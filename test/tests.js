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
        [21, 'veintiuno'],
        [22, 'veintidós'],
        [23, 'veintitrés'],
        [24, 'veinticuatro'],
        [25, 'veinticinco'],
        [26, 'veintiséis'],
        [27, 'veintisiete'],
        [28, 'veintiocho'],
        [29, 'veintinueve'],
        [30, 'treinta'],
        [31, 'treinta y uno'],
        [32, 'treinta y dos'],
        [33, 'treinta y tres'],
        [35, 'treinta y cinco'],
        [40, 'cuarenta'],
        [41, 'cuarenta y uno'],
        [42, 'cuarenta y dos'],
        [50, 'cincuenta'],
        [60, 'sesenta'],
        [70, 'setenta'],
        [73, 'setenta y tres'],
        [78, 'setenta y ocho'],
        [80, 'ochenta'],
        [90, 'noventa'],
        [100, 'cien'],
    ]);
    expected.forEach((words, digits) => {
        it(`converts "${digits}" to "${words}"`, () => {
            assert.strictEqual(words, Convertor.convert(digits));
        });
    });
});
