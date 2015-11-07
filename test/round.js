import assert from 'assert';
import {roundToBase as rounder} from '../src/round';

describe('rounder', () => {
    let expected = new Map([
        [11, 10],
        [16, 10],
        [22, 20],
        [97, 90],
        [127, 100],
        [179, 100],
    ]);
    expected.forEach((rounded, input) => {
        it(`converts "${input}" to "${rounded}"`, () => {
            assert.strictEqual(rounded, rounder(input));
        });
    });
});
