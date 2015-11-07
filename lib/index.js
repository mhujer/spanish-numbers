'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Number$isInteger = require('babel-runtime/core-js/number/is-integer')['default'];

var _Map = require('babel-runtime/core-js/map')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var SpanishConvertor = (function () {
    function SpanishConvertor() {
        _classCallCheck(this, SpanishConvertor);
    }

    /**
     * @returns {Map}
     */

    _createClass(SpanishConvertor, null, [{
        key: 'convert',
        value: function convert(number) {
            if (!_Number$isInteger(number)) {
                throw new Error('Invalid number "' + number + '"');
            }

            var numberMap = getNumberMap();

            if (numberMap.has(number)) {
                return numberMap.get(number);
            }
        }
    }]);

    return SpanishConvertor;
})();

exports.SpanishConvertor = SpanishConvertor;
function getNumberMap() {
    var numbers = [[1, 'uno'], [2, 'dos'], [3, 'tres'], [4, 'cuatro'], [5, 'cinco'], [6, 'seis'], [7, 'siete'], [8, 'ocho'], [9, 'nueve'], [10, 'diez']];

    return new _Map(numbers);
}