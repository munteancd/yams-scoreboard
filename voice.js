// voice.js — helperi puri + (mai târziu) parser vocal

// valoarea de export a unei celule select: gol -> '', altfel număr
function cellToExport(raw) {
    return raw === '' ? '' : (parseInt(raw, 10) || 0);
}

function normalize(s) {
    return (s || '')
        .toLowerCase()
        .normalize('NFD').replace(/[̀-ͯ]/g, '') // scoate diacriticele
        .replace(/[^a-z0-9 ]/g, ' ')
        .replace(/\s+/g, ' ').trim();
}

const UNITS = { zero:0, unu:1, una:1, un:1, doi:2, doua:2, trei:3, patru:4, cinci:5,
    sase:6, sapte:7, opt:8, noua:9, zece:10, unsprezece:11, doisprezece:12, doisprece:12,
    treisprezece:13, paisprezece:14, cincisprezece:15, saisprezece:16, saptesprezece:17,
    optsprezece:18, nouasprezece:19 };
const TENS = { douazeci:20, treizeci:30, patruzeci:40, cincizeci:50, saizeci:60,
    saptezeci:70, optzeci:80, nouazeci:90 };

function roNumber(text) {
    const t = normalize(text);
    if (/^\d+$/.test(t)) return parseInt(t, 10);
    const words = t.split(' ').filter(Boolean);
    // un token pur numeric oriunde in fraza
    for (const w of words) if (/^\d+$/.test(w)) return parseInt(w, 10);
    const tIdx = words.findIndex(w => TENS[w] !== undefined);
    if (tIdx !== -1) {
        let n = TENS[words[tIdx]];
        const rest = words.slice(tIdx + 1);
        const siIdx = rest.indexOf('si');
        if (siIdx !== -1 && rest[siIdx + 1] && UNITS[rest[siIdx + 1]] !== undefined) {
            n += UNITS[rest[siIdx + 1]];
        }
        return n;
    }
    for (const w of words) if (UNITS[w] !== undefined) return UNITS[w];
    return null;
}

const COL_WORDS = { jos:0, liber:1, sus:2, servit:3 };
const FACE_WORDS = { unari:1, doiari:2, treiari:3, patrari:4, cinciari:5, sasari:6 };
const CUT_WORDS = ['taie','tai','taiat','taiem'];

function findCol(words) {
    for (const w of words) if (COL_WORDS[w] !== undefined) return COL_WORDS[w];
    return null;
}
function findRow(t) {
    if (/\bo pereche\b/.test(t)) return 12;
    if (/\b(doua|2) perechi\b/.test(t)) return 13;
    if (/\b(trei|3) bucati\b/.test(t)) return 14;
    if (/\bchinta mica\b/.test(t)) return 16;
    if (/\bchinta mare\b/.test(t)) return 17;
    // categorii dintr-un singur cuvant: prefix-match ca sa prinda articole/plurale (careul, yamsul)
    // ATENTIE la ordine: categoriile care iau un argument-fata (careu, yams, full)
    // trebuie verificate INAINTEA cuvintelor-fata (unari..sasari), altfel "yams cinciari"
    // ar fi prins gresit ca rand top-section "cinciari".
    const SINGLE = [
        [/\byams/, 19], [/\bcareu/, 18], [/\bfull/, 15],
        [/\bmic\b/, 7], [/\bmare/, 8], [/\bpare/, 10], [/\bimpare/, 11],
        [/\bunari/, 0], [/\bdoiari/, 1], [/\btreiari/, 2], [/\bpatrari/, 3],
        [/\bcinciari/, 4], [/\bsasari/, 5],
    ];
    for (const [re, idx] of SINGLE) if (re.test(t)) return idx;
    return null;
}
function isCut(words) { return words.some(w => CUT_WORDS.includes(w)); }
function findFace(words) {
    for (const w of words) if (FACE_WORDS[w] !== undefined) return FACE_WORDS[w];
    return null;
}
function inSet(val, set) { return set.indexOf(val) !== -1; }

function resolveValue({ rowIndex, servit, words, t, def, set }) {
    // taiere
    if (isCut(words) || /\b0 la\b/.test(t) || (words.includes('0') && rowIndex > 5)) {
        if (rowIndex === 7 || rowIndex === 8) return null; // mic/mare nu pot fi 0
        if (inSet(0, set)) return 0;
        return null;
    }
    // top section
    if (rowIndex <= 5) {
        const qty = roNumber(t);
        if (qty === null) return null;
        return qty * (rowIndex + 1);
    }
    // mic/mare/pare/impare/2 perechi: numar rostit
    if (rowIndex === 7 || rowIndex === 8 || rowIndex === 10 || rowIndex === 11 || rowIndex === 13) {
        return roNumber(t);
    }
    // o pereche
    if (rowIndex === 12) {
        const face = findFace(words);
        if (face) return 2 * face;
        return roNumber(t);
    }
    // 3 bucati / careu / yams: dupa fata
    if (rowIndex === 14 || rowIndex === 18 || rowIndex === 19) {
        const face = findFace(words);
        if (!face) return null;
        return set[face];
    }
    // chinte
    if (rowIndex === 16 || rowIndex === 17) {
        return set[1];
    }
    // full
    if (rowIndex === 15) {
        const m = t.match(/de (\w+) cu (\w+)/);
        if (m && FACE_WORDS[m[1]] && FACE_WORDS[m[2]]) {
            const sum = 3 * FACE_WORDS[m[1]] + 2 * FACE_WORDS[m[2]];
            return sum + (servit ? 20 : 10);
        }
        return roNumber(t);
    }
    return null;
}

function parseCommand(transcript, ctx) {
    const rowDefs = ctx.rowDefs;
    const names = (ctx.playerNames || []).map(normalize);
    const t = normalize(transcript);
    const words = t.split(' ').filter(Boolean);

    const colIndex = findCol(words);
    if (colIndex === null) return { ok:false, reason:'coloana_lipsa' };
    const rowIndex = findRow(t);
    if (rowIndex === null) return { ok:false, reason:'categorie_lipsa' };

    let playerIndex = 1, nameMatched = false;
    names.forEach((n, i) => {
        if (n && words.includes(n.split(' ')[0])) { playerIndex = i + 1; nameMatched = true; }
    });
    const confident = names.length <= 1 ? true : nameMatched;

    const def = rowDefs[rowIndex];
    const servit = colIndex === 3;
    const set = (servit && def.valuesServit) ? def.valuesServit : def.values;

    const value = resolveValue({ rowIndex, servit, words, t, def, set });
    if (value === null) return { ok:false, reason:'valoare' };
    if (!inSet(value, set)) return { ok:false, reason:'valoare_invalida' };

    return { ok:true, playerIndex, rowIndex, colIndex, value,
             label: `${def.label} ${['jos','liber','sus','servit'][colIndex]}`, confident };
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { cellToExport, normalize, roNumber, parseCommand, FACE_WORDS, COL_WORDS };
}

if (typeof window !== 'undefined') {
    window.getPlayerNames = function () {
        const out = [];
        const count = (typeof playerMode !== 'undefined' ? playerMode : 1);
        for (let i = 1; i <= count; i++) {
            const el = document.getElementById(`player${i}-name`);
            out.push(el ? el.value : `Jucator ${i}`);
        }
        return out;
    };

    window.applyParsed = function (r) {
        const pid = 'p' + r.playerIndex;
        const sel = document.getElementById(`${pid}_s_${r.rowIndex}_${r.colIndex}`);
        if (!sel) { showToast('⚠️ Celulă inexistentă'); return; }
        const prev = sel.value;
        sel.value = String(r.value);
        onSelect(sel, pid, r.rowIndex, r.colIndex);
        showToast(`🎤 ${r.label} = ${r.value} · apasă pt. Anulează`, () => {
            sel.value = prev;
            onSelect(sel, pid, r.rowIndex, r.colIndex);
        });
    };

    window.startVoice = function () {
        const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SR) { showToast('⚠️ Browserul nu suportă recunoaștere vocală'); return; }
        const rec = new SR();
        rec.lang = 'ro-RO';
        rec.interimResults = false;
        rec.maxAlternatives = 1;
        const btn = document.getElementById('voiceBtn');
        if (btn) btn.textContent = '🔴 …';
        rec.onresult = function (ev) {
            const text = ev.results[0][0].transcript;
            const r = parseCommand(text, { rowDefs: ROW_DEFS, playerNames: window.getPlayerNames() });
            console.log('[voce] ai zis:', JSON.stringify(text), '→', JSON.stringify(r));
            if (!r.ok) {
                const why = {
                    coloana_lipsa: 'n-am prins coloana (jos/liber/sus/servit)',
                    categorie_lipsa: 'n-am prins categoria',
                    valoare: 'n-am prins valoarea',
                    valoare_invalida: 'valoarea nu se potrivește pe acel rând'
                }[r.reason] || r.reason;
                showToast(`🤷 „${text}" — ${why}`);
                return;
            }
            if (r.confident) {
                window.applyParsed(r);
            } else {
                showModal('Confirmi comanda?',
                    `Am înțeles: „${text}" → Jucător ${r.playerIndex}, ${r.label} = ${r.value}`,
                    () => window.applyParsed(r));
            }
        };
        rec.onerror = function () { showToast('⚠️ Eroare microfon'); };
        rec.onend = function () { if (btn) btn.textContent = '🎤 Voce'; };
        rec.start();
    };
}
