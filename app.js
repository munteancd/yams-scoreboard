// ===== GAME DATA =====

// ===== THEMES =====
const THEMES = {
    default: { name:'Default', bg:'#1a1a2e', bg2:'#16213e', surface:'#0f3460', text:'#e8e8e8', text2:'#a0a0b0', accent:'#e94560', accent2:'#ff6b6b', accent3:'#ffd93d', green:'#6bcb77', blue:'#4d96ff', gradient:'none' },
    dark: { name:'Dark', bg:'#121212', bg2:'#1e1e1e', surface:'#333', text:'#fff', text2:'#999', accent:'#bb86fc', accent2:'#cf6679', accent3:'#03dac6', green:'#03dac6', blue:'#bb86fc', gradient:'none' },
    pastel: { name:'Pastel', bg:'#f3e5f5', bg2:'#fff', surface:'#e1bee7', text:'#4a148c', text2:'#7b1fa2', accent:'#ba68c8', accent2:'#ab47bc', accent3:'#f06292', green:'#81c784', blue:'#64b5f6', gradient:'none' },
    'high-contrast': { name:'High Contrast', bg:'#fff', bg2:'#f5f5f5', surface:'#e0e0e0', text:'#000', text2:'#333', accent:'#d50000', accent2:'#ff1744', accent3:'#ff6d00', green:'#00c853', blue:'#2962ff', gradient:'none' },
    ocean: { name:'Ocean', bg:'#0a1628', bg2:'#0d2137', surface:'#134a6e', text:'#e0f7fa', text2:'#80deea', accent:'#00bcd4', accent2:'#26c6da', accent3:'#84ffff', green:'#69f0ae', blue:'#00bcd4', gradient:'linear-gradient(135deg, #0a1628, #0d2137, #0a2540)' },
    forest: { name:'Forest', bg:'#1b2e1b', bg2:'#243524', surface:'#2e4a2e', text:'#e8f5e9', text2:'#a5d6a7', accent:'#66bb6a', accent2:'#81c784', accent3:'#ffeb3b', green:'#69f0ae', blue:'#4db6ac', gradient:'linear-gradient(135deg, #1b2e1b, #2e4a2e)' },
    sunset: { name:'Sunset', bg:'#1a0a0a', bg2:'#2d1111', surface:'#4a1a1a', text:'#fff3e0', text2:'#ffab91', accent:'#ff5722', accent2:'#ff7043', accent3:'#ffc107', green:'#a5d6a7', blue:'#ef9a9a', gradient:'linear-gradient(135deg, #1a0a0a, #3d1515, #4a2020)' },
    desert: { name:'Desert', bg:'#2c1e0f', bg2:'#3d2a15', surface:'#5c3d1f', text:'#fff8e1', text2:'#ffe0b2', accent:'#ff9800', accent2:'#ffb74d', accent3:'#fff176', green:'#aed581', blue:'#ffb74d', gradient:'linear-gradient(135deg, #2c1e0f, #4a3520)' },
    winter: { name:'Winter', bg:'#0d1b2a', bg2:'#1b2838', surface:'#1f4068', text:'#e1f5fe', text2:'#81d4fa', accent:'#29b6f6', accent2:'#4fc3f7', accent3:'#e1f5fe', green:'#80cbc4', blue:'#29b6f6', gradient:'linear-gradient(135deg, #0d1b2a, #1b2838, #0d2948)' },
    spring: { name:'Spring', bg:'#1a2e1a', bg2:'#253825', surface:'#3a5a3a', text:'#f1f8e9', text2:'#c5e1a5', accent:'#8bc34a', accent2:'#9ccc65', accent3:'#ffee58', green:'#69f0ae', blue:'#81c784', gradient:'linear-gradient(135deg, #1a2e1a, #2a422a)' },
    summer: { name:'Summer', bg:'#2a2400', bg2:'#3d3500', surface:'#5c5000', text:'#fffde7', text2:'#fff9c4', accent:'#fdd835', accent2:'#ffee58', accent3:'#ff8f00', green:'#aed581', blue:'#fff176', gradient:'linear-gradient(135deg, #2a2400, #4a4000)' },
    autumn: { name:'Autumn', bg:'#2a1508', bg2:'#3d200e', surface:'#5c3015', text:'#fbe9e7', text2:'#ffab91', accent:'#ff7043', accent2:'#ff8a65', accent3:'#ffc107', green:'#a5d6a7', blue:'#ff8a65', gradient:'linear-gradient(135deg, #2a1508, #4a2510)' },
    vintage: { name:'Vintage', bg:'#2c2416', bg2:'#3d3220', surface:'#5c4a30', text:'#f5f5dc', text2:'#d2b48c', accent:'#d2691e', accent2:'#cd853f', accent3:'#daa520', green:'#8fbc8f', blue:'#b8860b', gradient:'none' },
    modern: { name:'Modern', bg:'#eceff1', bg2:'#fff', surface:'#cfd8dc', text:'#263238', text2:'#546e7a', accent:'#455a64', accent2:'#607d8b', accent3:'#ff6e40', green:'#26a69a', blue:'#42a5f5', gradient:'none' },
    neon: { name:'Neon', bg:'#0a0a0a', bg2:'#151515', surface:'#222', text:'#fff', text2:'#888', accent:'#ff00ff', accent2:'#ff4081', accent3:'#00ffff', green:'#39ff14', blue:'#00ffff', gradient:'none' },
    classic: { name:'Classic', bg:'#fafafa', bg2:'#fff', surface:'#e8e8e8', text:'#212121', text2:'#757575', accent:'#ff5252', accent2:'#ff4081', accent3:'#ffc107', green:'#4caf50', blue:'#2196f3', gradient:'none' },
    space: { name:'Space', bg:'#000011', bg2:'#0a0a2e', surface:'#1a1a4e', text:'#e8e8ff', text2:'#9999cc', accent:'#7c4dff', accent2:'#b388ff', accent3:'#ea80fc', green:'#69f0ae', blue:'#448aff', gradient:'linear-gradient(135deg, #000011, #0a0a2e, #110033)' },
    earth: { name:'Earth', bg:'#1c1410', bg2:'#2a1f18', surface:'#4e3b2e', text:'#efebe9', text2:'#bcaaa4', accent:'#8d6e63', accent2:'#a1887f', accent3:'#ffab40', green:'#81c784', blue:'#a1887f', gradient:'none' },
    floral: { name:'Floral', bg:'#1a0e14', bg2:'#2d1524', surface:'#4a1f3d', text:'#fce4ec', text2:'#f48fb1', accent:'#ec407a', accent2:'#f06292', accent3:'#ff80ab', green:'#80cbc4', blue:'#f48fb1', gradient:'linear-gradient(135deg, #1a0e14, #2d1524)' },
    monochrome: { name:'Mono', bg:'#1a1a1a', bg2:'#252525', surface:'#333', text:'#eee', text2:'#999', accent:'#bbb', accent2:'#ddd', accent3:'#fff', green:'#aaa', blue:'#888', gradient:'none' },
    sunrise: { name:'Sunrise', bg:'#1a0a00', bg2:'#2d1200', surface:'#5c2400', text:'#fff', text2:'#ffcc80', accent:'#ff512f', accent2:'#ff7043', accent3:'#f09819', green:'#a5d6a7', blue:'#ff9800', gradient:'linear-gradient(135deg, #1a0500, #3d1500, #5c3000)' },
    twilight: { name:'Twilight', bg:'#050520', bg2:'#0a0a35', surface:'#1a1a5c', text:'#e8e8ff', text2:'#9999dd', accent:'#00c6ff', accent2:'#4dd0e1', accent3:'#b388ff', green:'#69f0ae', blue:'#00c6ff', gradient:'linear-gradient(135deg, #050520, #0a0a35, #0d0d50)' },
    dusk: { name:'Dusk', bg:'#0d1520', bg2:'#152030', surface:'#1f3550', text:'#e0e8f0', text2:'#90a4ae', accent:'#4ca1af', accent2:'#64b5f6', accent3:'#ffab40', green:'#80cbc4', blue:'#4ca1af', gradient:'linear-gradient(135deg, #0d1520, #1a2a40)' },
    aurora: { name:'Aurora', bg:'#020210', bg2:'#0a0a25', surface:'#151540', text:'#e0f0ff', text2:'#80c0ff', accent:'#00d2ff', accent2:'#00e5ff', accent3:'#c0a0ff', green:'#69f0ae', blue:'#00d2ff', gradient:'linear-gradient(135deg, #020210, #0a1530, #051525)' },
    peach: { name:'Peach', bg:'#1a0a10', bg2:'#2d1520', surface:'#5c2040', text:'#fff', text2:'#ffb0c0', accent:'#ed4264', accent2:'#ff6b81', accent3:'#ffedbc', green:'#a5d6a7', blue:'#ef9a9a', gradient:'linear-gradient(135deg, #1a0a10, #3d1525)' },
    emerald: { name:'Emerald', bg:'#051510', bg2:'#0a2518', surface:'#154030', text:'#e0fff0', text2:'#80d0a0', accent:'#11998e', accent2:'#38ef7d', accent3:'#a8ff78', green:'#38ef7d', blue:'#11998e', gradient:'linear-gradient(135deg, #051510, #0a2518)' },
    midnight: { name:'Midnight', bg:'#0a0a12', bg2:'#141420', surface:'#232535', text:'#e0e0e8', text2:'#8888a0', accent:'#5c6bc0', accent2:'#7986cb', accent3:'#b0bec5', green:'#69f0ae', blue:'#5c6bc0', gradient:'linear-gradient(135deg, #0a0a12, #141420, #1a1a30)' },
    lavender: { name:'Lavender', bg:'#150a20', bg2:'#251535', surface:'#3a1c50', text:'#f0e0ff', text2:'#c0a0d0', accent:'#9c27b0', accent2:'#ba68c8', accent3:'#ffab7b', green:'#81c784', blue:'#ce93d8', gradient:'linear-gradient(135deg, #150a20, #301550, #451a60)' },
    sunburst: { name:'Sunburst', bg:'#1a1000', bg2:'#2d1c00', surface:'#5c3800', text:'#fff', text2:'#ffd080', accent:'#f7971e', accent2:'#ffa726', accent3:'#ffd200', green:'#a5d6a7', blue:'#ffb74d', gradient:'linear-gradient(135deg, #1a1000, #3d2000)' },
    bubblegum: { name:'Bubblegum', bg:'#1a0510', bg2:'#2d0a1a', surface:'#5c1535', text:'#fff0f5', text2:'#ff90b0', accent:'#ff6a88', accent2:'#ff8fa0', accent3:'#ffcdd2', green:'#a5d6a7', blue:'#f48fb1', gradient:'linear-gradient(135deg, #1a0510, #2d0a1a)' },
    rainbow: { name:'🌈 Rainbow', bg:'#fff', bg2:'#fff', surface:'#e8e8e8', text:'#333', text2:'#666', accent:'#e94560', accent2:'#ff6b6b', accent3:'#9c27b0', green:'#4caf50', blue:'#2196f3', gradient:'rainbow', special: true },
    'cotton-candy': { name:'Cotton Candy', bg:'#fce4f3', bg2:'#fff', surface:'#f8bbd0', text:'#4a1942', text2:'#7b1fa2', accent:'#e91e9c', accent2:'#f06292', accent3:'#4fc3f7', green:'#81c784', blue:'#4fc3f7', gradient:'none' },
    lemonade: { name:'Lemonade', bg:'#fffde4', bg2:'#fff', surface:'#fff9c4', text:'#5d4037', text2:'#8d6e63', accent:'#f9a825', accent2:'#fbc02d', accent3:'#ff7043', green:'#66bb6a', blue:'#ffa726', gradient:'none' },
    sky: { name:'Sky', bg:'#e3f2fd', bg2:'#fff', surface:'#bbdefb', text:'#1a237e', text2:'#3949ab', accent:'#1976d2', accent2:'#42a5f5', accent3:'#ff7043', green:'#66bb6a', blue:'#1976d2', gradient:'none' },
    mint: { name:'Mint', bg:'#e0f2f1', bg2:'#fff', surface:'#b2dfdb', text:'#004d40', text2:'#00695c', accent:'#00897b', accent2:'#26a69a', accent3:'#ff8a65', green:'#66bb6a', blue:'#26a69a', gradient:'none' },
    sand: { name:'Sand', bg:'#f5f0e8', bg2:'#fffef8', surface:'#e8dcc8', text:'#4e342e', text2:'#795548', accent:'#a1887f', accent2:'#bcaaa4', accent3:'#ff8f00', green:'#81c784', blue:'#a1887f', gradient:'none' },
    lilac: { name:'Lilac', bg:'#f3e5f5', bg2:'#fff', surface:'#e1bee7', text:'#311b92', text2:'#5e35b1', accent:'#7e57c2', accent2:'#9575cd', accent3:'#ff80ab', green:'#81c784', blue:'#9575cd', gradient:'none' },
    coral: { name:'Coral', bg:'#fbe9e7', bg2:'#fff', surface:'#ffccbc', text:'#bf360c', text2:'#d84315', accent:'#ff5722', accent2:'#ff7043', accent3:'#ffc107', green:'#66bb6a', blue:'#ff8a65', gradient:'none' },
};

// ===== STATE =====
let playerMode = 1;
let currentTheme = 'default';
const PLAYER_COLORS = [
    'linear-gradient(135deg, var(--accent), var(--accent2))',
    'linear-gradient(135deg, var(--blue), #7b68ee)',
    'linear-gradient(135deg, var(--green), #26a69a)',
    'linear-gradient(135deg, #ffa726, #ff7043)',
];
const MAX_PLAYERS = 4;

// ===== INIT =====
function init() {
    buildPlayersGrid();
    loadTheme();
    renderThemeGrid();
    for (let i = 1; i <= playerMode; i++) updateAll('p'+i);
    renderHistory();
}

function buildPlayersGrid() {
    const grid = document.getElementById('playersGrid');
    grid.innerHTML = '';
    for (let i = 1; i <= playerMode; i++) {
        const pid = 'p' + i;
        const block = document.createElement('div');
        block.className = 'player-block';
        block.id = `player${i}-block`;
        block.innerHTML = `
            <div class="player-header" style="background: ${PLAYER_COLORS[(i-1) % PLAYER_COLORS.length]}">
                <input type="text" id="player${i}-name" placeholder="Jucător ${i}" value="Jucător ${i}" maxlength="20">
                <div class="player-score-badge" id="player${i}-total-badge">0</div>
            </div>
            <table class="score-table" id="table-${pid}"></table>
        `;
        grid.appendChild(block);
        buildTable(pid);
        updateAll(pid);
    }
    updateEmptyBadges();
}

// ===== BUILD TABLE =====
function buildTable(pid) {
    const table = document.getElementById(`table-${pid}`);
    let html = '<thead><tr><th></th>';
    COLS.forEach(c => html += `<th>${c}</th>`);
    html += '</tr></thead><tbody>';

    ROW_DEFS.forEach((row, ri) => {
        const cls = row.cssClass || '';
        html += `<tr class="${cls}" data-row="${ri}">`;
        html += `<td>${row.label}</td>`;
        for (let ci = 0; ci < NUM_COLS; ci++) {
            if (row.type === 'computed') {
                html += `<td><span class="computed-val" id="${pid}_cv_${ri}_${ci}">0</span></td>`;
            } else {
                const vals = (ci === 3 && row.valuesServit) ? row.valuesServit : row.values;
                html += `<td><select id="${pid}_s_${ri}_${ci}" onchange="onSelect(this,'${pid}',${ri},${ci})">`;
                html += `<option value="" disabled selected></option>`;
                html += `<option value="delete">Șterge</option>`;
                vals.forEach(v => html += `<option value="${v}">${v}</option>`);
                html += `</select></td>`;
            }
        }
        html += '</tr>';
    });

    // TO row
    html += `<tr class="computed-row grand-total"><td>TO</td>`;
    html += `<td colspan="${NUM_COLS}"><span class="computed-val" id="${pid}_to" style="font-size:1.3em;">0</span></td>`;
    html += '</tr></tbody>';
    table.innerHTML = html;
}

// ===== SELECT HANDLER =====
function onSelect(sel, pid, ri, ci) {
    if (sel.value === 'delete') {
        sel.value = '';
        sel.selectedIndex = 0;
    }
    // Color coding
    sel.classList.remove('val-zero', 'val-yams');
    if (sel.value === '0') sel.classList.add('val-zero');
    if (ri === 19 && sel.value !== '' && sel.value !== '0') sel.classList.add('val-yams');

    // Animation
    sel.parentElement.classList.add('score-pop');
    setTimeout(() => sel.parentElement.classList.remove('score-pop'), 400);

    // Sound
    playSound('select');

    updateAll(pid);

    // Check for Yams
    if (ri === 19 && parseInt(sel.value) >= 55) {
        launchConfetti();
        playSound('yams');
        showToast('🎲 YAMS! Felicitări! 🎉');
    }
}

// ===== CALCULATIONS =====
function getVal(pid, ri, ci) {
    const el = document.getElementById(`${pid}_s_${ri}_${ci}`);
    if (!el) return 0;
    return el.value === '' ? 0 : parseInt(el.value) || 0;
}

function setComputed(pid, ri, ci, val) {
    const el = document.getElementById(`${pid}_cv_${ri}_${ci}`);
    if (el) {
        el.textContent = val;
        el.classList.remove('bonus-active');
    }
}

function updateAll(pid) {
    // TB (row 6) = sum of rows 0-5, bonus if >= 60
    for (let ci = 0; ci < NUM_COLS; ci++) {
        let sum = 0;
        for (let ri = 0; ri < 6; ri++) sum += getVal(pid, ri, ci);
        let bonus = 0;
        if (sum >= 60) bonus = (ci !== 3) ? 30 : 60;
        const tb = sum + bonus;
        setComputed(pid, 6, ci, tb);
        const el = document.getElementById(`${pid}_cv_6_${ci}`);
        if (el && sum >= 60) {
            el.classList.add('bonus-active');
            el.closest('tr').classList.add('bonus-flash');
            setTimeout(() => el.closest('tr').classList.remove('bonus-flash'), 600);
        }
    }

    // TM (row 9) = Ma - mi
    for (let ci = 0; ci < NUM_COLS; ci++) {
        const mi = getVal(pid, 7, ci);
        const ma = getVal(pid, 8, ci);
        setComputed(pid, 9, ci, ma - mi);
    }

    // TC (row 20) = TB + TM + sum of rows 10-19
    let grandTotal = 0;
    for (let ci = 0; ci < NUM_COLS; ci++) {
        const tb = parseInt(document.getElementById(`${pid}_cv_6_${ci}`)?.textContent) || 0;
        const tm = parseInt(document.getElementById(`${pid}_cv_9_${ci}`)?.textContent) || 0;
        let sum = tb + tm;
        for (let ri = 10; ri < 20; ri++) sum += getVal(pid, ri, ci);
        setComputed(pid, 20, ci, sum);
        grandTotal += sum;
    }

    // TO
    document.getElementById(`${pid}_to`).textContent = grandTotal;

    // Badge
    const badge = document.getElementById(`${pid === 'p1' ? 'player1' : 'player2'}-total-badge`);
    if (badge) badge.textContent = grandTotal;

    // Empty cells
    updateEmptyCells(pid);
}

function updateEmptyCells(pid) {
    updateEmptyBadges();
}

// ===== PLAYER MODE =====
function setPlayerMode(mode) {
    // Save current names before rebuilding
    const savedNames = {};
    for (let i = 1; i <= playerMode; i++) {
        const el = document.getElementById(`player${i}-name`);
        if (el) savedNames[i] = el.value;
    }
    playerMode = mode;
    document.querySelectorAll('#modeToggle button').forEach((b, i) => {
        b.classList.toggle('active', i === mode - 1);
    });
    buildPlayersGrid();
    // Restore names
    Object.entries(savedNames).forEach(([i, name]) => {
        const el = document.getElementById(`player${i}-name`);
        if (el) el.value = name;
    });
}

function updateEmptyBadges() {
    const container = document.getElementById('emptyBadges');
    let html = '';
    for (let i = 1; i <= playerMode; i++) {
        const pid = 'p' + i;
        let empty = 0;
        ROW_DEFS.forEach((row, ri) => {
            if (row.type !== 'select') return;
            for (let ci = 0; ci < NUM_COLS; ci++) {
                const el = document.getElementById(`${pid}_s_${ri}_${ci}`);
                if (el && (el.value === '' || el.selectedIndex === 0)) empty++;
            }
        });
        html += `<span class="empty-badge">P${i}: ${empty}</span>`;
    }
    container.innerHTML = html;
}

// ===== RESET =====
function confirmReset() {
    showModal('Resetare Joc', 'Ești sigur că vrei să resetezi toate scorurile?', () => {
        for (let i = 1; i <= playerMode; i++) resetGame('p'+i);
        showToast('🔄 Joc resetat!');
    });
}

function resetGame(pid) {
    ROW_DEFS.forEach((row, ri) => {
        if (row.type !== 'select') return;
        for (let ci = 0; ci < NUM_COLS; ci++) {
            const el = document.getElementById(`${pid}_s_${ri}_${ci}`);
            if (el) { el.value = ''; el.selectedIndex = 0; el.classList.remove('val-zero','val-yams'); }
        }
    });
    updateAll(pid);
}

// ===== FINISH GAME =====
function finishGame() {
    const players = [];
    for (let i = 1; i <= playerMode; i++) {
        const pid = 'p' + i;
        const total = parseInt(document.getElementById(`${pid}_to`)?.textContent) || 0;
        const name = document.getElementById(`player${i}-name`)?.value || `Jucător ${i}`;
        players.push({ name, score: total, pid });
    }

    if (players.every(p => p.score === 0)) {
        showToast('⚠️ Nu sunt scoruri de salvat!');
        return;
    }

    const bestScore = Math.max(...players.map(p => p.score));
    const winner = playerMode > 1 ? players.find(p => p.score === bestScore)?.name : null;

    const game = {
        date: new Date().toISOString(),
        mode: playerMode,
        players: players.map(p => ({ name: p.name, score: p.score })),
        winner,
        details: {},
    };

    players.forEach(p => {
        game.details[p.pid] = {};
        ROW_DEFS.forEach((row, ri) => {
            if (row.type === 'select') {
                game.details[p.pid][row.key] = [];
                for (let ci = 0; ci < NUM_COLS; ci++) {
                    game.details[p.pid][row.key].push(getVal(p.pid, ri, ci));
                }
            }
        });
    });

    let history = JSON.parse(localStorage.getItem('yams_history') || '[]');
    history.unshift(game);
    if (history.length > 100) history = history.slice(0, 100);
    localStorage.setItem('yams_history', JSON.stringify(history));

    showGameover(game);
    launchConfetti();
    playSound('yams');
    renderHistory();
}

function showGameover(game) {
    const overlay = document.getElementById('gameoverOverlay');
    const trophy = document.getElementById('gameoverTrophy');
    const title = document.getElementById('gameoverTitle');
    const subtitle = document.getElementById('gameoverSubtitle');
    const scores = document.getElementById('gameoverScores');
    const diff = document.getElementById('gameoverDiff');
    const bestScore = Math.max(...game.players.map(p => p.score));

    if (game.mode === 1) {
        const p = game.players[0];
        const isGreat = p.score > 400;
        const isGood = p.score > 250;
        trophy.textContent = isGreat ? '🌟' : isGood ? '🏆' : '🎲';
        title.textContent = isGreat ? 'Scor Incredibil!' : isGood ? 'Joc Excelent!' : 'Joc Terminat!';
        subtitle.textContent = p.name;
        scores.innerHTML = `<div class="gameover-player winner"><div class="gameover-player-name">${p.name}</div><div class="gameover-player-score">${p.score}</div></div>`;
        const hist = getHistory();
        const allScores = hist.flatMap(g => g.players.map(pp => pp.score));
        if (allScores.length <= 1 || p.score >= Math.max(...allScores)) {
            diff.innerHTML = '🎉 <strong>Nou record personal!</strong>';
        } else {
            const best = Math.max(...allScores);
            diff.textContent = `Record: ${best} (diferență: ${best - p.score})`;
        }
    } else {
        const winners = game.players.filter(p => p.score === bestScore);
        const isTie = winners.length > 1;
        trophy.textContent = isTie ? '🤝' : '🏆';
        title.textContent = isTie ? 'Egalitate!' : `${game.winner} câștigă!`;
        subtitle.textContent = game.players.map(p => p.name).join(' vs ');

        scores.innerHTML = game.players.map(p => {
            const cls = p.score === bestScore ? 'winner' : 'loser';
            return `<div class="gameover-player ${cls}"><div class="gameover-player-name">${p.name}</div><div class="gameover-player-score">${p.score}</div>${p.score === bestScore && !isTie ? '<div class="gameover-winner-label">★ Câștigător</div>' : ''}</div>`;
        }).join('');

        const scoreDiff = bestScore - Math.min(...game.players.map(p => p.score));
        diff.textContent = isTie ? 'Remiză!' : `Diferență: ${scoreDiff} puncte`;
    }
    overlay.classList.add('active');
}

function closeGameover() {
    document.getElementById('gameoverOverlay').classList.remove('active');
}

// ===== SAVE / LOAD LOCAL =====
function saveToLocal() {
    const state = { playerMode, names: {} };
    for (let i = 1; i <= playerMode; i++) {
        const pid = 'p' + i;
        state[pid] = {};
        state.names[i] = document.getElementById(`player${i}-name`)?.value || `Jucător ${i}`;
        ROW_DEFS.forEach((row, ri) => {
            if (row.type !== 'select') return;
            state[pid][`row_${ri}`] = [];
            for (let ci = 0; ci < NUM_COLS; ci++) {
                const el = document.getElementById(`${pid}_s_${ri}_${ci}`);
                state[pid][`row_${ri}`].push(el ? el.value : '');
            }
        });
    }
    localStorage.setItem('yams_current', JSON.stringify(state));
    showToast('💿 Joc salvat local!');
}

function loadFromLocal() {
    const data = localStorage.getItem('yams_current');
    if (!data) { showToast('⚠️ Nu există joc salvat local!'); return; }
    const state = JSON.parse(data);
    if (state.playerMode) setPlayerMode(state.playerMode);

    // Restore names
    if (state.names) {
        Object.entries(state.names).forEach(([i, name]) => {
            const el = document.getElementById(`player${i}-name`);
            if (el) el.value = name;
        });
    }

    for (let i = 1; i <= playerMode; i++) {
        const pid = 'p' + i;
        if (!state[pid]) continue;
        ROW_DEFS.forEach((row, ri) => {
            if (row.type !== 'select') return;
            const vals = state[pid][`row_${ri}`];
            if (!vals) return;
            for (let ci = 0; ci < NUM_COLS; ci++) {
                const el = document.getElementById(`${pid}_s_${ri}_${ci}`);
                if (el && vals[ci] !== undefined) {
                    el.value = vals[ci];
                    el.classList.remove('val-zero','val-yams');
                    if (el.value === '0') el.classList.add('val-zero');
                    if (ri === 19 && el.value !== '' && el.value !== '0') el.classList.add('val-yams');
                }
            }
        });
        updateAll(pid);
    }
    showToast('📥 Joc încărcat!');
}

// ===== SAVE / LOAD XLSX =====
function saveToXlsx() {
    const data = [['', ...COLS]];
    ROW_DEFS.forEach((row, ri) => {
        const rowData = [row.label];
        for (let ci = 0; ci < NUM_COLS; ci++) {
            if (row.type === 'computed') {
                rowData.push(parseInt(document.getElementById(`p1_cv_${ri}_${ci}`)?.textContent) || 0);
            } else {
                const el = document.getElementById(`p1_s_${ri}_${ci}`);
                rowData.push(cellToExport(el ? el.value : ''));
            }
        }
        data.push(rowData);
    });
    data.push(['TO', parseInt(document.getElementById('p1_to').textContent) || 0]);

    if (playerMode === 2) {
        data.push([]);
        data.push(['', ...COLS]);
        ROW_DEFS.forEach((row, ri) => {
            const rowData = [row.label];
            for (let ci = 0; ci < NUM_COLS; ci++) {
                if (row.type === 'computed') {
                    rowData.push(parseInt(document.getElementById(`p2_cv_${ri}_${ci}`)?.textContent) || 0);
                } else {
                    const el = document.getElementById(`p2_s_${ri}_${ci}`);
                    rowData.push(cellToExport(el ? el.value : ''));
                }
            }
            data.push(rowData);
        });
        data.push(['TO', parseInt(document.getElementById('p2_to').textContent) || 0]);
    }

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, 'Yams');
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });
    function s2ab(s) { const buf = new ArrayBuffer(s.length); const view = new Uint8Array(buf); for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff; return buf; }
    const fname = (document.getElementById('fileName').value || 'yams_game') + '.xlsx';
    saveAs(new Blob([s2ab(wbout)], { type: 'application/octet-stream' }), fname);
    showToast(`💾 Salvat ca ${fname}`);
}

function loadFromXlsx() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.xlsx,.xls';
    input.onchange = e => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = ev => {
            const data = new Uint8Array(ev.target.result);
            const wb = XLSX.read(data, { type: 'array' });
            const ws = wb.Sheets[wb.SheetNames[0]];
            const json = XLSX.utils.sheet_to_json(ws, { header: 1 });
            populateFromXlsx('p1', json, 1);
            updateAll('p1');
            showToast('📂 Fișier încărcat!');
        };
        reader.readAsArrayBuffer(file);
    };
    input.click();
}

function populateFromXlsx(pid, data, startRow) {
    ROW_DEFS.forEach((row, ri) => {
        if (row.type !== 'select') return;
        const dataRow = data[startRow + ri];
        if (!dataRow) return;
        for (let ci = 0; ci < NUM_COLS; ci++) {
            const val = dataRow[ci + 1];
            const el = document.getElementById(`${pid}_s_${ri}_${ci}`);
            if (el && val !== undefined && val !== '') {
                el.value = String(val);
                el.classList.remove('val-zero','val-yams');
                if (el.value === '0') el.classList.add('val-zero');
                if (ri === 19 && el.value !== '' && el.value !== '0') el.classList.add('val-yams');
            }
        }
    });
}

// ===== HISTORY & STATS =====
function getHistory() {
    return JSON.parse(localStorage.getItem('yams_history') || '[]');
}

function renderHistory() {
    const history = getHistory();
    renderStats(history);

    const container = document.getElementById('historyContent');
    if (history.length === 0) {
        container.innerHTML = '<div class="no-data">🎲 Niciun joc finalizat încă. Joacă și termină un joc pentru a vedea istoricul!</div>';
        return;
    }

    let html = '<table class="history-table"><thead><tr><th>#</th><th>Data</th><th>Jucători</th><th>Scor</th><th>Câștigător</th></tr></thead><tbody>';
    history.forEach((game, i) => {
        const date = new Date(game.date);
        const dateStr = date.toLocaleDateString('ro-RO', { day:'2-digit', month:'short', year:'numeric', hour:'2-digit', minute:'2-digit' });
        const players = game.players.map(p => p.name).join(' vs ');
        const scores = game.players.map(p => p.score).join(' - ');
        const winner = game.winner ? `<span class="winner-badge">🏆 ${game.winner}</span>` : '-';
        html += `<tr><td>${history.length - i}</td><td>${dateStr}</td><td>${players}</td><td style="font-family:'JetBrains Mono',monospace;font-weight:700;">${scores}</td><td>${winner}</td></tr>`;
    });
    html += '</tbody></table>';
    container.innerHTML = html;
}

function renderStats(history) {
    const grid = document.getElementById('statsGrid');
    if (history.length === 0) {
        grid.innerHTML = '';
        return;
    }

    const allScores = history.flatMap(g => g.players.map(p => p.score));
    const totalGames = history.length;
    const bestScore = Math.max(...allScores);
    const avgScore = Math.round(allScores.reduce((a,b) => a+b, 0) / allScores.length);
    const worstScore = Math.min(...allScores);

    // Find best player name
    let bestPlayer = '-';
    history.forEach(g => g.players.forEach(p => { if (p.score === bestScore) bestPlayer = p.name; }));

    // Win stats for 2-player games
    const twoPlayerGames = history.filter(g => g.mode === 2);
    let winStats = '';
    if (twoPlayerGames.length > 0) {
        const wins = {};
        twoPlayerGames.forEach(g => { if (g.winner) wins[g.winner] = (wins[g.winner] || 0) + 1; });
        const topWinner = Object.entries(wins).sort((a,b) => b[1]-a[1])[0];
        if (topWinner) winStats = `${topWinner[0]} (${topWinner[1]})`;
    }

    let html = `
        <div class="stat-card"><span class="stat-value">${totalGames}</span><span class="stat-label">Jocuri Totale</span></div>
        <div class="stat-card"><span class="stat-value">${bestScore}</span><span class="stat-label">Record 🏆</span></div>
        <div class="stat-card"><span class="stat-value">${avgScore}</span><span class="stat-label">Scor Mediu</span></div>
        <div class="stat-card"><span class="stat-value">${worstScore}</span><span class="stat-label">Cel Mai Mic</span></div>
        <div class="stat-card"><span class="stat-value" style="font-size:1em;">${bestPlayer}</span><span class="stat-label">Recordman</span></div>
    `;
    if (winStats) {
        html += `<div class="stat-card"><span class="stat-value" style="font-size:1em;">${winStats}</span><span class="stat-label">Cele mai multe victorii</span></div>`;
    }
    grid.innerHTML = html;
}

function confirmClearHistory() {
    showModal('Ștergere Istoric', 'Ești sigur că vrei să ștergi tot istoricul de jocuri? Această acțiune nu poate fi anulată.', () => {
        localStorage.removeItem('yams_history');
        renderHistory();
        showToast('🗑️ Istoric șters!');
    });
}

// ===== THEMES =====
function applyTheme(name) {
    const t = THEMES[name];
    if (!t) return;
    currentTheme = name;
    const r = document.documentElement.style;
    r.setProperty('--bg', t.bg);
    r.setProperty('--bg2', t.bg2);
    r.setProperty('--surface', t.surface);
    r.setProperty('--text', t.text);
    r.setProperty('--text2', t.text2);
    r.setProperty('--accent', t.accent);
    r.setProperty('--accent2', t.accent2);
    r.setProperty('--accent3', t.accent3);
    r.setProperty('--green', t.green);
    r.setProperty('--blue', t.blue);
    r.setProperty('--gradient', t.gradient === 'rainbow' ? 'none' : t.gradient);

    // Update derived vars
    r.setProperty('--header-bg', t.accent);
    r.setProperty('--cell-border', t.text2 + '22');
    r.setProperty('--surface2', t.text + '0d');
    r.setProperty('--cell-bg', t.text + '08');
    r.setProperty('--computed-color', t.accent3);
    r.setProperty('--zero-color', t.accent);
    r.setProperty('--yams-color', t.green);
    r.setProperty('--bonus-glow', t.accent + '4d');

    // Handle rainbow special theme
    document.body.classList.remove('theme-rainbow');
    if (t.gradient === 'rainbow') {
        document.body.style.background = '';
        document.body.classList.add('theme-rainbow');
    } else {
        document.body.style.background = t.gradient !== 'none' ? t.gradient : t.bg;
    }
    document.body.style.color = t.text;

    localStorage.setItem('yams_theme', name);

    // Update active theme button
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === name);
    });
}

function loadTheme() {
    const saved = localStorage.getItem('yams_theme') || 'default';
    applyTheme(saved);
}

function renderThemeGrid() {
    const grid = document.getElementById('themeGrid');
    let html = '';
    Object.entries(THEMES).forEach(([key, t]) => {
        const bg = t.gradient !== 'none' ? t.gradient : t.bg;
        const active = key === currentTheme ? 'active' : '';
        html += `<button class="theme-btn ${active}" data-theme="${key}" style="background:${bg};color:${t.text};" onclick="applyTheme('${key}')">${t.name}</button>`;
    });
    grid.innerHTML = html;
}

// ===== UI HELPERS =====
function switchPanel(name) {
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    document.getElementById(`panel-${name}`).classList.add('active');
    event.target.classList.add('active');
    if (name === 'history') renderHistory();
}

function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2500);
}

function showModal(title, text, onConfirm) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalText').textContent = text;
    document.getElementById('confirmModal').classList.add('active');
    document.getElementById('modalConfirmBtn').onclick = () => { closeModal(); onConfirm(); };
}
function closeModal() { document.getElementById('confirmModal').classList.remove('active'); }

// ===== FULLSCREEN =====
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
        document.getElementById('fullscreenBtn').textContent = '⛶';
    } else {
        document.exitFullscreen();
        document.getElementById('fullscreenBtn').textContent = '⛶';
    }
}
document.addEventListener('fullscreenchange', () => {
    document.getElementById('fullscreenBtn').textContent = document.fullscreenElement ? '✕' : '⛶';
});

// ===== CHART =====
function openChart() {
    const history = getHistory();
    const container = document.getElementById('chartContent');

    if (history.length < 2) {
        container.innerHTML = '<div class="chart-no-data">📊 Ai nevoie de cel puțin 2 jocuri finalizate pentru a vedea graficul.</div>';
        document.getElementById('chartOverlay').classList.add('active');
        return;
    }

    // Get last 20 games in chronological order
    const games = history.slice(0, 20).reverse();

    // Collect all unique player names
    const playerNames = {};
    games.forEach(g => g.players.forEach(p => { playerNames[p.name] = true; }));
    const players = Object.keys(playerNames);

    const colors = ['#e94560', '#4d96ff', '#6bcb77', '#ffd93d', '#a855f7'];
    const allScores = games.flatMap(g => g.players.map(p => p.score));
    const maxScore = Math.max(...allScores, 100);
    const minScore = Math.min(...allScores, 0);

    const W = 640, H = 220;
    const padL = 45, padR = 15, padT = 15, padB = 30;
    const chartW = W - padL - padR;
    const chartH = H - padT - padB;

    // Scale functions
    const scaleX = (i) => padL + (i / (games.length - 1)) * chartW;
    const scaleY = (v) => padT + chartH - ((v - minScore) / (maxScore - minScore || 1)) * chartH;

    let svg = `<svg class="chart-svg" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">`;

    // Grid lines
    const gridSteps = 5;
    for (let i = 0; i <= gridSteps; i++) {
        const val = Math.round(minScore + (maxScore - minScore) * (i / gridSteps));
        const y = scaleY(val);
        svg += `<line x1="${padL}" y1="${y}" x2="${W-padR}" y2="${y}" stroke="var(--cell-border)" stroke-width="0.5"/>`;
        svg += `<text x="${padL-6}" y="${y+4}" text-anchor="end" fill="var(--text2)" font-size="10" font-family="JetBrains Mono,monospace">${val}</text>`;
    }

    // X axis labels (game numbers)
    games.forEach((g, i) => {
        const x = scaleX(i);
        svg += `<text x="${x}" y="${H-5}" text-anchor="middle" fill="var(--text2)" font-size="9" font-family="JetBrains Mono,monospace">${i+1}</text>`;
    });

    // Lines + dots per player
    players.forEach((pName, pi) => {
        const color = colors[pi % colors.length];
        const points = [];

        games.forEach((g, gi) => {
            const player = g.players.find(p => p.name === pName);
            if (player) {
                points.push({ x: scaleX(gi), y: scaleY(player.score), score: player.score });
            }
        });

        if (points.length < 2) return;

        // Line
        const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' ');
        svg += `<path d="${pathD}" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>`;

        // Area fill (subtle)
        svg += `<path d="${pathD} L ${points[points.length-1].x.toFixed(1)} ${padT+chartH} L ${points[0].x.toFixed(1)} ${padT+chartH} Z" fill="${color}" opacity="0.07"/>`;

        // Dots
        points.forEach(p => {
            svg += `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="4" fill="${color}" stroke="var(--bg2)" stroke-width="2"/>`;
            svg += `<title>${pName}: ${p.score}</title>`;
        });
    });

    svg += '</svg>';

    // Legend
    let legend = '<div class="chart-legend">';
    players.forEach((pName, pi) => {
        const color = colors[pi % colors.length];
        legend += `<div class="chart-legend-item"><div class="chart-legend-dot" style="background:${color}"></div>${pName}</div>`;
    });
    legend += '</div>';

    // Summary stats
    let summary = '<div style="margin-top:14px; display:flex; gap:12px; justify-content:center; flex-wrap:wrap;">';
    players.forEach((pName, pi) => {
        const scores = games.flatMap(g => g.players.filter(p => p.name === pName).map(p => p.score));
        if (scores.length === 0) return;
        const avg = Math.round(scores.reduce((a,b) => a+b, 0) / scores.length);
        const best = Math.max(...scores);
        const color = colors[pi % colors.length];
        summary += `<div style="text-align:center; font-size:0.8em; color:var(--text2);">
            <div style="color:${color}; font-weight:700;">${pName}</div>
            <div>Medie: <strong>${avg}</strong> | Record: <strong>${best}</strong></div>
        </div>`;
    });
    summary += '</div>';

    container.innerHTML = svg + legend + summary;
    document.getElementById('chartOverlay').classList.add('active');
}

function closeChart() {
    document.getElementById('chartOverlay').classList.remove('active');
}

// ===== PWA REGISTRATION =====
function registerPWA() {
    // Create inline manifest as blob
    const manifest = {
        name: 'Yams Scoreboard',
        short_name: 'Yams',
        description: 'Tabel de scor digital pentru jocul Yams',
        start_url: '.',
        display: 'standalone',
        background_color: '#1a1a2e',
        theme_color: '#e94560',
        icons: [{
            src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%23e94560'/%3E%3Ccircle cx='16' cy='16' r='5' fill='white'/%3E%3Ccircle cx='48' cy='16' r='5' fill='white'/%3E%3Ccircle cx='32' cy='32' r='5' fill='white'/%3E%3Ccircle cx='16' cy='48' r='5' fill='white'/%3E%3Ccircle cx='48' cy='48' r='5' fill='white'/%3E%3C/svg%3E",
            sizes: "any",
            type: "image/svg+xml",
            purpose: "any maskable"
        }]
    };
    const blob = new Blob([JSON.stringify(manifest)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('link');
    link.rel = 'manifest';
    link.href = url;
    document.head.appendChild(link);
}
registerPWA();

// ===== CONFETTI =====
function launchConfetti() {
    const container = document.getElementById('confettiContainer');
    const colors = ['#e94560','#ffd93d','#6bcb77','#4d96ff','#ff6b6b','#a855f7','#00d2ff'];
    for (let i = 0; i < 60; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.left = Math.random() * 100 + '%';
        piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        piece.style.animationDelay = Math.random() * 0.5 + 's';
        piece.style.animationDuration = (2 + Math.random() * 2) + 's';
        piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
        piece.style.width = (6 + Math.random() * 8) + 'px';
        piece.style.height = (6 + Math.random() * 8) + 'px';
        container.appendChild(piece);
    }
    setTimeout(() => container.innerHTML = '', 4000);
}

// ===== SOUND SYSTEM =====
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx = null;
let soundEnabled = true;

function getAudioCtx() {
    if (!audioCtx) audioCtx = new AudioCtx();
    return audioCtx;
}

function playSound(type) {
    if (!soundEnabled) return;
    try {
        const ctx = getAudioCtx();
        if (ctx.state === 'suspended') ctx.resume();

        if (type === 'roll') {
            // Quick rattle sound
            for (let i = 0; i < 4; i++) {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.type = 'square';
                osc.frequency.value = 200 + Math.random() * 400;
                gain.gain.setValueAtTime(0.06, ctx.currentTime + i * 0.06);
                gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.06 + 0.08);
                osc.start(ctx.currentTime + i * 0.06);
                osc.stop(ctx.currentTime + i * 0.06 + 0.08);
            }
        } else if (type === 'lock') {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.type = 'sine';
            osc.frequency.value = 600;
            gain.gain.setValueAtTime(0.08, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
            osc.start();
            osc.stop(ctx.currentTime + 0.1);
        } else if (type === 'unlock') {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.type = 'sine';
            osc.frequency.value = 400;
            gain.gain.setValueAtTime(0.06, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
            osc.start();
            osc.stop(ctx.currentTime + 0.08);
        } else if (type === 'yams') {
            // Victorious fanfare
            const notes = [523, 659, 784, 1047];
            notes.forEach((freq, i) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.type = 'sine';
                osc.frequency.value = freq;
                gain.gain.setValueAtTime(0.1, ctx.currentTime + i * 0.12);
                gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.12 + 0.3);
                osc.start(ctx.currentTime + i * 0.12);
                osc.stop(ctx.currentTime + i * 0.12 + 0.3);
            });
        } else if (type === 'combo') {
            // Short pleasant ding
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.type = 'sine';
            osc.frequency.value = 880;
            gain.gain.setValueAtTime(0.08, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
            osc.start();
            osc.stop(ctx.currentTime + 0.2);
        } else if (type === 'select') {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.type = 'triangle';
            osc.frequency.value = 500;
            gain.gain.setValueAtTime(0.04, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
            osc.start();
            osc.stop(ctx.currentTime + 0.06);
        }
    } catch(e) { /* silently fail */ }
}

function toggleSound() {
    soundEnabled = document.getElementById('diceSoundToggle').checked;
    localStorage.setItem('yams_sound', soundEnabled ? '1' : '0');
}

// ===== DICE SYSTEM =====
const diceState = {
    values: [0, 0, 0, 0, 0],
    locked: [false, false, false, false, false],
    rollsLeft: 3,
    hasRolled: false,
};
let dice3dMode = false;

const DOT_POSITIONS = {
    1: [[28, 28]],
    2: [[16, 16], [40, 40]],
    3: [[16, 16], [28, 28], [40, 40]],
    4: [[16, 16], [40, 16], [16, 40], [40, 40]],
    5: [[16, 16], [40, 16], [28, 28], [16, 40], [40, 40]],
    6: [[16, 14], [40, 14], [16, 28], [40, 28], [16, 42], [40, 42]],
};

// 3D face dot layouts (CSS grid positions)
const FACE_DOTS = {
    1: [5], // center
    2: [1, 9], // top-left, bottom-right
    3: [1, 5, 9],
    4: [1, 3, 7, 9],
    5: [1, 3, 5, 7, 9],
    6: [1, 3, 4, 6, 7, 9],
};

function build3dFaceHTML(val) {
    if (val === 0) return '<div class="die-3d-face"></div>';
    const positions = FACE_DOTS[val] || [];
    // 3x3 grid
    let cells = '';
    for (let i = 1; i <= 9; i++) {
        if (positions.includes(i)) {
            cells += '<span class="dot3d"></span>';
        } else {
            cells += '<span style="width:10px;height:10px;"></span>';
        }
    }
    return cells;
}

function renderDie(index) {
    const wrapper = document.getElementById(`die-${index}`);
    const val = diceState.values[index];

    if (dice3dMode) {
        let html = `<div class="die-3d-scene"><div class="die-3d-cube" data-value="${val || 1}">`;
        for (let f = 1; f <= 6; f++) {
            html += `<div class="die-3d-face die-face-${f}" style="display:grid;grid-template-columns:repeat(3,1fr);align-items:center;justify-items:center;padding:6px;">${build3dFaceHTML(f)}</div>`;
        }
        html += `</div></div>`;
        wrapper.innerHTML = html;
    } else {
        const dots = val > 0 ? DOT_POSITIONS[val] : [];
        let svg = `<svg class="die-svg" viewBox="0 0 56 56"><rect class="die-bg" width="56" height="56" rx="8"/>`;
        dots.forEach(([cx, cy]) => {
            svg += `<circle class="die-dot" cx="${cx}" cy="${cy}" r="5.5"/>`;
        });
        svg += `</svg>`;
        wrapper.innerHTML = svg;
    }
}

function renderAllDice() {
    for (let i = 0; i < 5; i++) renderDie(i);
    updateDiceUI();
}

function toggleLock(index) {
    if (!diceState.hasRolled) return;
    if (diceState.rollsLeft === 0) return;
    diceState.locked[index] = !diceState.locked[index];
    const wrapper = document.getElementById(`die-${index}`);
    wrapper.classList.toggle('locked', diceState.locked[index]);
    playSound(diceState.locked[index] ? 'lock' : 'unlock');
}

function rollDice() {
    if (diceState.rollsLeft <= 0) return;

    diceState.rollsLeft--;
    diceState.hasRolled = true;
    playSound('roll');

    for (let i = 0; i < 5; i++) {
        if (!diceState.locked[i]) {
            diceState.values[i] = Math.floor(Math.random() * 6) + 1;
            const wrapper = document.getElementById(`die-${i}`);

            if (dice3dMode) {
                const cube = wrapper.querySelector('.die-3d-cube');
                if (cube) {
                    cube.classList.add('rolling-3d');
                    setTimeout(() => {
                        cube.classList.remove('rolling-3d');
                        cube.setAttribute('data-value', diceState.values[i]);
                    }, 580);
                }
            } else {
                wrapper.classList.add('die-rolling');
                setTimeout(() => {
                    wrapper.classList.remove('die-rolling');
                    renderDie(i);
                }, 500);
            }
        }
    }

    setTimeout(() => {
        if (dice3dMode) {
            // Update 3d cube data-value
            for (let i = 0; i < 5; i++) {
                if (!diceState.locked[i]) {
                    const cube = document.querySelector(`#die-${i} .die-3d-cube`);
                    if (cube) cube.setAttribute('data-value', diceState.values[i]);
                }
            }
        } else {
            renderAllDice();
        }
        updateDiceSumDisplay();

        // Check for Yams (all same)
        const isYams = diceState.values.every(v => v === diceState.values[0]) && diceState.values[0] > 0;
        if (isYams) {
            launchConfetti();
            playSound('yams');
            showToast(`🎲 YAMS! Cinci de ${diceState.values[0]}! 🎉`);
        } else {
            // Check for other combos
            const combo = detectCombo();
            if (combo) playSound('combo');
        }
    }, 600);

    updateDiceUI();
}

function newDiceTurn() {
    diceState.values = [0, 0, 0, 0, 0];
    diceState.locked = [false, false, false, false, false];
    diceState.rollsLeft = 3;
    diceState.hasRolled = false;
    for (let i = 0; i < 5; i++) {
        document.getElementById(`die-${i}`).classList.remove('locked');
    }
    renderAllDice();
    updateDiceSumDisplay();
}

function updateDiceUI() {
    const btn = document.getElementById('rollBtn');
    btn.disabled = diceState.rollsLeft <= 0;
    btn.textContent = diceState.rollsLeft > 0 ? `🎲 Aruncă (${diceState.rollsLeft})` : '🎲 Gata!';

    for (let i = 0; i < 3; i++) {
        const dot = document.getElementById(`rollDot${i}`);
        dot.classList.toggle('used', i < (3 - diceState.rollsLeft));
    }
}

function detectCombo() {
    const counts = {};
    diceState.values.forEach(v => { counts[v] = (counts[v] || 0) + 1; });
    const sortedCounts = Object.values(counts).sort((a, b) => b - a);
    const uniqueVals = Object.keys(counts).map(Number).sort((a, b) => a - b);

    if (sortedCounts[0] === 5) return 'yams';
    if (sortedCounts[0] === 4) return 'careu';
    if (sortedCounts[0] === 3 && sortedCounts[1] === 2) return 'full';
    if (sortedCounts[0] === 3) return 'triple';
    if (sortedCounts[0] === 2 && sortedCounts[1] === 2) return 'doua_perechi';
    if (uniqueVals.length === 5 && (uniqueVals[4] - uniqueVals[0] === 4)) return 'scara_mare';
    // Check small straight (4 consecutive)
    const sorted = [...new Set(diceState.values)].sort((a,b) => a-b);
    for (let i = 0; i <= sorted.length - 4; i++) {
        if (sorted[i+3] - sorted[i] === 3 &&
            sorted[i+1] - sorted[i] === 1 &&
            sorted[i+2] - sorted[i+1] === 1) return 'scara_mica';
    }
    return null;
}

function updateDiceSumDisplay() {
    const el = document.getElementById('diceSumDisplay');
    if (!diceState.hasRolled) {
        el.innerHTML = '';
        return;
    }
    const sum = diceState.values.reduce((a, b) => a + b, 0);

    let details = diceState.values.join(' + ') + ` = <strong>${sum}</strong>`;

    const combo = detectCombo();
    const comboLabels = {
        yams: '🎲 YAMS!',
        careu: '🎯 Careu',
        full: '🏠 Full House',
        triple: '🎯 Trei identice',
        doua_perechi: '✌️ Două perechi',
        scara_mare: '🔥 Scară mare',
        scara_mica: '📏 Scară mică',
    };
    if (combo && comboLabels[combo]) {
        details += ` &nbsp;—&nbsp; ${comboLabels[combo]}`;
    }
    el.innerHTML = details;
}

// ===== 3D TOGGLE =====
function toggle3dDice() {
    dice3dMode = document.getElementById('dice3dToggle').checked;
    localStorage.setItem('yams_dice3d', dice3dMode ? '1' : '0');
    renderAllDice();
    // Re-apply locked states
    for (let i = 0; i < 5; i++) {
        const wrapper = document.getElementById(`die-${i}`);
        wrapper.classList.toggle('locked', diceState.locked[i]);
    }
}

function toggleDice() {
    const zone = document.getElementById('diceZone');
    zone.classList.toggle('collapsed');
    const isCollapsed = zone.classList.contains('collapsed');
    localStorage.setItem('yams_dice_visible', isCollapsed ? '0' : '1');
}

function initDice() {
    const visible = localStorage.getItem('yams_dice_visible');
    const zone = document.getElementById('diceZone');
    if (visible === '1') zone.classList.remove('collapsed');

    // Restore 3D preference
    const saved3d = localStorage.getItem('yams_dice3d');
    if (saved3d === '1') {
        dice3dMode = true;
        document.getElementById('dice3dToggle').checked = true;
    }

    // Restore sound preference
    const savedSound = localStorage.getItem('yams_sound');
    if (savedSound === '0') {
        soundEnabled = false;
        document.getElementById('diceSoundToggle').checked = false;
    }

    renderAllDice();
    updateDiceUI();
}

// Start
initDice();
init();
