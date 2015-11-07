import assert from 'assert';
import {SpanishConvertor as Convertor} from '../src/index';

describe('spanish-numbers', () => {
    it('fails for invalid number', () => {
        assert.throws(() => {
            Convertor.convert('foo');
        }, /Invalid number "foo"/);
    });
    it('fails for big numbers', () => {
        assert.throws(() => {
            Convertor.convert(1001);
        }, /Number "1001" is too big!/);
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
        [101, 'ciento uno'],
        [102, 'ciento dos'],
        [110, 'ciento diez'],
        [111, 'ciento once'],
        [142, 'ciento cuarenta y dos'],
        [200, 'doscientos'],
        [201, 'doscientos uno'],
        [202, 'doscientos dos'],
        [211, 'doscientos once'],
        [276, 'doscientos setenta y seis'],
        [300, 'trescientos'],
        [375, 'trescientos setenta y cinco'],
        [400, 'cuatrocientos'],
        [500, 'quinientos'],
        [600, 'seiscientos'],
        [612, 'seiscientos doce'],
        [700, 'setecientos'],
        [800, 'ochocientos'],
        [900, 'novecientos'],
        [907, 'novecientos siete'],
        [999, 'novecientos noventa y nueve'],
        [1000, 'mil'],
        /*[1011, 'mil once'],
        [1111, 'mil ciento once'],
        [2000, 'dos mil'],
        [3000003, 'tres millones tres'],*/
    ]);
    expected.forEach((words, digits) => {
        it(`converts "${digits}" to "${words}"`, () => {
            assert.strictEqual(words, Convertor.convert(digits));
        });
    });
});
