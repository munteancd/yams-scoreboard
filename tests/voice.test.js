const { test } = require('node:test');
const assert = require('node:assert');
const { normalize, roNumber } = require('../voice.js');

test('normalize: lowercase + fara diacritice', () => {
    assert.strictEqual(normalize('Cinciári ŞI Şase'), 'cinciari si sase');
});
test('roNumber: cuvinte simple', () => {
    assert.strictEqual(roNumber('patru'), 4);
    assert.strictEqual(roNumber('zero'), 0);
    assert.strictEqual(roNumber('33'), 33);
});
test('roNumber: compus cu "si"', () => {
    assert.strictEqual(roNumber('douazeci si trei'), 23);
    assert.strictEqual(roNumber('patruzeci si opt'), 48);
});
test('roNumber: necunoscut -> null', () => {
    assert.strictEqual(roNumber('balena'), null);
});

const { parseCommand } = require('../voice.js');
const { ROW_DEFS } = require('../data.js');
const ctx1 = { rowDefs: ROW_DEFS, playerNames: ['jucator 1'] };

test('top: patru unari in jos -> 4 @ r0 c0', () => {
    const r = parseCommand('patru unari in jos', ctx1);
    assert.strictEqual(r.ok, true);
    assert.deepStrictEqual([r.rowIndex, r.colIndex, r.value], [0, 0, 4]);
});
test('top: trei doiari la liber -> 6 @ r1 c1', () => {
    const r = parseCommand('trei doiari la liber', ctx1);
    assert.deepStrictEqual([r.rowIndex, r.colIndex, r.value], [1, 1, 6]);
});
test('taie careul servit -> 0 @ r18 c3', () => {
    const r = parseCommand('taie careul servit', ctx1);
    assert.deepStrictEqual([r.rowIndex, r.colIndex, r.value], [18, 3, 0]);
});
test('yams servit cinciari -> 125', () => {
    const r = parseCommand('yams servit cinciari', ctx1);
    assert.deepStrictEqual([r.rowIndex, r.colIndex, r.value], [19, 3, 125]);
});
test('yams cinciari in jos -> 75', () => {
    assert.strictEqual(parseCommand('yams cinciari in jos', ctx1).value, 75);
});
test('careu de patrari jos -> 41', () => {
    assert.strictEqual(parseCommand('careu de patrari jos', ctx1).value, 41);
});
test('3 bucati de sasari servit -> 28', () => {
    assert.strictEqual(parseCommand('trei bucati de sasari servit', ctx1).value, 28);
});
test('full de cinciari cu patrari jos -> 33', () => {
    assert.strictEqual(parseCommand('full de cinciari cu patrari jos', ctx1).value, 33);
});
test('full de cinciari cu patrari servit -> 43', () => {
    assert.strictEqual(parseCommand('full de cinciari cu patrari servit', ctx1).value, 43);
});
test('full 33 jos -> 33', () => {
    assert.strictEqual(parseCommand('full 33 jos', ctx1).value, 33);
});
test('chinta mica liber -> 30', () => {
    assert.strictEqual(parseCommand('chinta mica liber', ctx1).value, 30);
});
test('chinta mare servit -> 60', () => {
    assert.strictEqual(parseCommand('chinta mare servit', ctx1).value, 60);
});
test('pare 18 jos -> 18', () => {
    assert.strictEqual(parseCommand('pare 18 jos', ctx1).value, 18);
});
test('o pereche de cinciari jos -> 10', () => {
    assert.strictEqual(parseCommand('o pereche de cinciari jos', ctx1).value, 10);
});
test('mic taiat -> respins', () => {
    assert.strictEqual(parseCommand('taie mic jos', ctx1).ok, false);
});
test('coloana lipsa -> ok false', () => {
    assert.strictEqual(parseCommand('patru unari', ctx1).ok, false);
});

const ctx2 = { rowDefs: ROW_DEFS, playerNames: ['Cristi', 'Lore'] };
test('numele tinteste jucatorul corect', () => {
    const r = parseCommand('lore patru unari jos', ctx2);
    assert.strictEqual(r.playerIndex, 2);
    assert.strictEqual(r.confident, true);
});
test('2 jucatori fara nume -> confident false', () => {
    const r = parseCommand('patru unari jos', ctx2);
    assert.strictEqual(r.ok, true);
    assert.strictEqual(r.confident, false);
});
