// voice.js — helperi puri + (mai târziu) parser vocal

// valoarea de export a unei celule select: gol -> '', altfel număr
function cellToExport(raw) {
    return raw === '' ? '' : (parseInt(raw, 10) || 0);
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { cellToExport };
}
