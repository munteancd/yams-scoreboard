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

// ===== Reparare jargon STT =====
// Cuvintele de Yams (unari/doiari/.../yams) nu-s cuvinte reale, asa ca STT-ul le stalceste.
// fixJargon readuce variantele la forma canonica INAINTE de parsare.
function lev(a, b) {
    const m = a.length, n = b.length;
    const d = Array.from({ length: m + 1 }, (_, i) => { const r = new Array(n + 1).fill(0); r[0] = i; return r; });
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++)
        for (let j = 1; j <= n; j++)
            d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    return d[m][n];
}
const ARI_NUM = { unu:1, un:1, una:1, o:1, doi:2, doua:2, trei:3, patru:4, cinci:5, sase:6,
    '1':1, '2':2, '3':3, '4':4, '5':5, '6':6 };
const ARI_JOINED = ['unari','doiari','treiari','patrari','cinciari','sasari'];
const JARGON = { iams:'yams', iems:'yams', jams:'yams', games:'yams', iamcs:'yams', iamsu:'yams' };

function fixJargon(t) {
    // forma despartita "<numar> ari" -> cuvant unit (ex. "doi ari"->"doiari", "3 ari"->"treiari")
    let s = t.replace(/\b(unu|un|una|o|doi|doua|trei|patru|cinci|sase|[1-6])\s+ari\b/g,
        (_, num) => ARI_JOINED[ARI_NUM[num] - 1]);
    // token-level: jargon fix + variante fonetice apropiate (ex. "dolari"->"doiari")
    s = s.split(' ').map(w => {
        if (JARGON[w]) return JARGON[w];
        if (ARI_JOINED.indexOf(w) !== -1) return w;
        if (/ari$/.test(w)) {
            for (const j of ARI_JOINED)
                if (Math.abs(w.length - j.length) <= 1 && lev(w, j) <= 1) return j;
        }
        return w;
    }).join(' ');
    return s;
}

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
    const t = fixJargon(normalize(transcript));
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

// ===== Fallback AI (OpenRouter) — normalizeaza transcriptul stalcit la formularea canonica =====
const AI_MODEL = 'openai/gpt-4o-mini';
const AI_ROWS = 'unari, doiari, treiari, patrari, cinciari, sasari, mic, mare, pare, impare, o pereche, 2 perechi, 3 bucati, full, chinta mica, chinta mare, careu, yams';

// exemple few-shot (din transcripturi reale stalcite de STT) -> comanda canonica
const AI_EXAMPLES = [
    ['Neamt de cinci ani servit', 'yams servit cinciari'],
    ['pireu de cinciar in sus', 'careu de cinciari in sus'],
    ['releu de cinci ari in sus', 'careu de cinciari in sus'],
    ['patru patrate in jos', 'patru patrari in jos'],
    ['trei patrate in jos', 'trei patrari in jos'],
    ['trei dolari in jos', 'trei doiari in jos'],
    ['trei sesar in jos', 'trei sasari in jos'],
    ['3 5 ari in jos', 'trei cinciari in jos'],
    ['full de cinci cu patru jos', 'full de cinciari cu patrari jos'],
    ['taie careul servit', 'taie careu servit'],
    ['opt la mic in jos', 'mic 8 in jos'],
    ['in sus', '']
];

function buildAiBody(transcript, playerNames) {
    const names = (playerNames && playerNames.length) ? playerNames.join(', ') : '(un singur jucator)';
    const system = [
        'Esti un normalizator de comenzi vocale pentru un tabel de Yams (Yahtzee) in romana.',
        'Primesti un transcript posibil gresit recunoscut de STT si il rescrii in formularea canonica EXACTA.',
        'Randuri (categorii) valide: ' + AI_ROWS + '.',
        'Coloane valide: jos, liber, sus, servit.',
        'Jucatori: ' + names + '.',
        'Cuvintele de Yams nu-s cuvinte reale, deci STT le stalceste. Variante des intalnite:',
        '- categoriile de sus = "<numar>ari": unari (un ari / un are), doiari (dolari / doi ari / 2 ari),',
        '  treiari (trei ari / 3 ari), patrari (patrate / patrat / patru ari), cinciari (cinci ari / cinci ani),',
        '  sasari (sesar / sase ari / sasa). "ani" si "ari" sunt acelasi lucru.',
        '- careu = patru zaruri identice (four of a kind); auzit ca: careu, caro, cariu, pireu, releu, reu.',
        '- full = full house (trei identice + o pereche); auzit ca: full, fald, ful. NU confunda careu cu full.',
        'Reguli de formulare canonica:',
        '- Sectiunea de sus: "<cantitate> <categorie> <coloana>", ex. "trei doiari in jos". Primul numar e CANTITATEA (cate zaruri), separat de categorie.',
        '- yams / careu / 3 bucati: "<categorie> [servit] de <fata>", unde <fata> e unul din unari..sasari, ex. "careu de cinciari in sus", "yams servit cinciari".',
        '- full: "full de <X> cu <Y> <coloana>" (X=tripletul, Y=perechea) sau "full <numar> <coloana>".',
        '- chinte: "chinta mica <coloana>" / "chinta mare <coloana>".',
        '- mic/mare/pare/impare/o pereche/2 perechi: "<categorie> <numar> <coloana>".',
        '- taiere (zero): "taie <categorie> <coloana>".',
        '- Daca recunosti un nume de jucator in transcript, pune-l la inceput.',
        'IMPORTANT: NU inventa. Daca lipseste coloana, sau categoria, sau (la sectiunea de sus) cantitatea, returneaza {"command":""}. Nu repeta niciodata textul brut neschimbat.',
        'Raspunde DOAR cu JSON: {"command": "<comanda canonica>"}.'
    ].join('\n');
    const messages = [{ role: 'system', content: system }];
    for (const [inp, out] of AI_EXAMPLES) {
        messages.push({ role: 'user', content: inp });
        messages.push({ role: 'assistant', content: JSON.stringify({ command: out }) });
    }
    messages.push({ role: 'user', content: transcript });
    return { model: AI_MODEL, temperature: 0, response_format: { type: 'json_object' }, messages };
}

function extractAiCommand(json) {
    try {
        const content = json.choices[0].message.content;
        const obj = typeof content === 'string' ? JSON.parse(content) : content;
        return (obj && typeof obj.command === 'string') ? obj.command.trim() : '';
    } catch (e) { return ''; }
}

async function aiNormalize(transcript, opts) {
    const f = (opts && opts.fetchImpl) || (typeof fetch !== 'undefined' ? fetch : null);
    if (!f) throw new Error('fetch indisponibil');
    const res = await f('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + opts.key,
            'Content-Type': 'application/json',
            'HTTP-Referer': 'https://munteancd.github.io/yams-scoreboard/',
            'X-Title': 'Yams Scoreboard'
        },
        body: JSON.stringify(buildAiBody(transcript, opts.playerNames))
    });
    if (!res.ok) throw new Error('AI HTTP ' + res.status);
    const json = await res.json();
    return extractAiCommand(json);
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { cellToExport, normalize, roNumber, parseCommand, fixJargon,
        buildAiBody, extractAiCommand, aiNormalize, FACE_WORDS, COL_WORDS };
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

    window.getAiKey = function () { return (localStorage.getItem('yams_or_key') || '').trim(); };
    window.saveAiKey = function (v) { localStorage.setItem('yams_or_key', (v || '').trim()); showToast('🔑 Cheie AI salvată'); };

    const REASONS = {
        coloana_lipsa: 'n-am prins coloana (jos/liber/sus/servit)',
        categorie_lipsa: 'n-am prins categoria',
        valoare: 'n-am prins valoarea (ex. „trei doiari în jos")',
        valoare_invalida: 'valoarea nu se potrivește pe acel rând'
    };

    function handleParsed(r, shown) {
        if (!r.ok) {
            const why = REASONS[r.reason] || r.reason;
            const hint = window.getAiKey() ? '' : ' · pune cheia AI în Setări pt. recunoaștere mai bună';
            showToast(`🤷 „${shown}" — ${why}${hint}`);
            return;
        }
        if (r.confident) {
            window.applyParsed(r);
        } else {
            showModal('Confirmi comanda?',
                `Am înțeles: „${shown}" → Jucător ${r.playerIndex}, ${r.label} = ${r.value}`,
                () => window.applyParsed(r));
        }
    }

    window.startVoice = function () {
        const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SR) { showToast('⚠️ Browserul nu suportă recunoaștere vocală'); return; }
        const rec = new SR();
        rec.lang = 'ro-RO';
        rec.interimResults = false;
        rec.maxAlternatives = 1;
        const btn = document.getElementById('voiceBtn');
        const setBtn = (txt) => { if (btn) btn.textContent = txt; };
        setBtn('🔴 …');
        rec.onresult = async function (ev) {
            const text = ev.results[0][0].transcript;
            const ctx = { rowDefs: ROW_DEFS, playerNames: window.getPlayerNames() };
            const key = window.getAiKey();
            let shown = text, r;
            if (key) {
                setBtn('🤖 …');
                try {
                    const cmd = await aiNormalize(text, { playerNames: ctx.playerNames, key });
                    shown = cmd || text;
                    r = parseCommand(cmd || text, ctx);
                } catch (e) {
                    console.warn('[voce] AI a picat, folosesc regulile:', e);
                    r = parseCommand(text, ctx);
                } finally { setBtn('🎤 Voce'); }
            } else {
                r = parseCommand(text, ctx);
            }
            console.log('[voce] ai zis:', JSON.stringify(text), '| interpretat:', JSON.stringify(shown), '→', JSON.stringify(r));
            handleParsed(r, shown);
        };
        rec.onerror = function () { showToast('⚠️ Eroare microfon'); };
        rec.onend = function () { setBtn('🎤 Voce'); };
        rec.start();
    };

    // populeaza campul cheii AI din Setari, daca exista
    const _aiKeyInput = document.getElementById('aiKey');
    if (_aiKeyInput) _aiKeyInput.value = window.getAiKey();
}
