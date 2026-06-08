// data.js — definițiile tabelului, partajate de app.js, voice.js și teste
const ROW_DEFS = [
    { key: '1', label: '1', type: 'select', values: [0,1,2,3,4,5] },
    { key: '2', label: '2', type: 'select', values: [0,2,4,6,8,10] },
    { key: '3', label: '3', type: 'select', values: [0,3,6,9,12,15] },
    { key: '4', label: '4', type: 'select', values: [0,4,8,12,16,20] },
    { key: '5', label: '5', type: 'select', values: [0,5,10,15,20,25] },
    { key: '6', label: '6', type: 'select', values: [0,6,12,18,24,30] },
    { key: 'TB', label: 'TB', type: 'computed', cssClass: 'computed-row total-row' },
    { key: 'mi', label: 'mi', type: 'select', values: Array.from({length:26}, (_,i) => i+5) },
    { key: 'Ma', label: 'Ma', type: 'select', values: Array.from({length:26}, (_,i) => i+5) },
    { key: 'TM', label: 'TM', type: 'computed', cssClass: 'computed-row total-row' },
    { key: 'P', label: 'P', type: 'select', values: [0,10,12,14,16,18,20,22,24,26,28,30] },
    { key: 'I', label: 'I', type: 'select', values: [0,5,7,9,11,13,15,17,19,21,23,25] },
    { key: '1p', label: '1p', type: 'select', values: [0,2,4,6,8,10,12] },
    { key: '2p', label: '2p', type: 'select', values: [0,6,8,10,12,14,16,18,20,22] },
    { key: '3b', label: '3b', type: 'select', values: [0,8,11,14,17,20,23], valuesServit: [0,13,16,19,22,25,28] },
    { key: 'F', label: 'F', type: 'select', values: Array.from({length:49}, (_,i) => i) },
    { key: 'q', label: 'q', type: 'select', values: [0,30], valuesServit: [0,45] },
    { key: 'Q', label: 'Q', type: 'select', values: [0,40], valuesServit: [0,60] },
    { key: 'K', label: 'K', type: 'select', values: [0,29,33,37,41,45,49], valuesServit: [0,54,58,62,66,70,74] },
    { key: 'Y', label: 'Y', type: 'select', values: [0,55,60,65,70,75,80], valuesServit: [0,105,110,115,120,125,130] },
    { key: 'TC', label: 'TC', type: 'computed', cssClass: 'computed-row grand-total' },
];
const COLS = ['Jos','Liber','Sus','Servit'];
const NUM_COLS = 4;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ROW_DEFS, COLS, NUM_COLS };
}
