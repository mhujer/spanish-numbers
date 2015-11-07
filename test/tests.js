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
    ]);
    expected.forEach((words, digits) => {
        it(`converts "${digits}" to "${words}"`, () => {
            assert.strictEqual(words, Convertor.convert(digits));
        });
    });
});
