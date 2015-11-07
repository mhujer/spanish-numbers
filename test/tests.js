import assert from 'assert';
import {convert as convertSrc} from '../src/index';
import {convert as convertLib} from '../lib/index';

describe('spanish-numbers', () => {
    it('can convert numbers', () => {
        assert.strictEqual('uno', convertSrc(1));
        assert.strictEqual('uno', convertLib(1));
    });
});
