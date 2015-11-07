'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Number$isInteger = require('babel-runtime/core-js/number/is-integer')['default'];

var _Map = require('babel-runtime/core-js/map')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _round = require('./round');

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

            if (number >= 17 && number <= 19) {
                return 'dieci' + this.convert(number - 10);
            }
            if (number >= 21 && number <= 29) {
                return 'veinti' + this.convert(number - 20);
            }
            if (number > 30 && number < 100) {
                var decimal = (0, _round.roundToBase)(number);
                var misc = number % decimal;
                return this.convert(decimal) + ' y ' + this.convert(misc);
            }
            if (number > 100 && number <= 999) {
                var decimal = (0, _round.roundToBase)(number);
                var misc = number % decimal;
                if (number > 100 && number < 200) {
                    return 'ciento ' + this.convert(misc);
                } else {
                    return this.convert(decimal) + ' ' + this.convert(misc);
                }
            }
            throw new Error('Number "' + number + '" is too big!');
        }
    }]);

    return SpanishConvertor;
})();

exports.SpanishConvertor = SpanishConvertor;
function getNumberMap() {
    var numbers = [[1, 'uno'], [2, 'dos'], [3, 'tres'], [4, 'cuatro'], [5, 'cinco'], [6, 'seis'], [7, 'siete'], [8, 'ocho'], [9, 'nueve'], [10, 'diez'], [11, 'once'], [12, 'doce'], [13, 'trece'], [14, 'catorce'], [15, 'quince'], [16, 'dieciséis'], //has extra accent
    [20, 'veinte'], [22, 'veintidós'], //accent
    [23, 'veintitrés'], //accent
    [26, 'veintiséis'], //accent
    [30, 'treinta'], [40, 'cuarenta'], [50, 'cincuenta'], [60, 'sesenta'], [70, 'setenta'], [80, 'ochenta'], [90, 'noventa'], [100, 'cien'], [200, 'doscientos'], [300, 'trescientos'], [400, 'cuatrocientos'], [500, 'quinientos'], [600, 'seiscientos'], [700, 'setecientos'], [800, 'ochocientos'], [900, 'novecientos'], [1000, 'mil']];

    return new _Map(numbers);
}