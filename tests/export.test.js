const { test } = require('node:test');
const assert = require('node:assert');
const { cellToExport } = require('../voice.js');

test('celula goala se exporta ca string gol, nu 0', () => {
    assert.strictEqual(cellToExport(''), '');
});
test('zero jucat ramane 0', () => {
    assert.strictEqual(cellToExport('0'), 0);
});
test('valoare numerica se exporta ca numar', () => {
    assert.strictEqual(cellToExport('23'), 23);
});
