import assert from 'assert';
import {SpanishConvertor as Convertor} from '../src/index';

describe('spanish-numbers', () => {
    it('fails for invalid number', () => {
        assert.throws(() => {
            Convertor.convert('foo');
        }, /Invalid number "foo"/);
    });

    let expected = new Map([
        [1, 'uno'],
        [2, 'dos'],
        [3, 'tres'],
        [4, 'cuatro'],
        [5, 'cinco'],
        [6, 'seis'],
        [7, 'siete'],
        [8, 'ocho'],
        [9, 'nueve'],
        [10, 'diez'],
        [11, 'once'],
        [12, 'doce'],
        [13, 'trece'],
        [14, 'catorce'],
        [15, 'quince'],
        [16, 'dieciséis'],
        [17, 'diecisiete'],
        [18, 'dieciocho'],
        [19, 'diecinueve'],
        [20, 'veinte'],
    ]);
    expected.forEach((words, digits) => {
        it(`converts "${digits}" to "${words}"`, () => {
            assert.strictEqual(words, Convertor.convert(digits));
        });
    });
});
