import {roundToBase} from './round';

/**
 * @returns {Map}
 */
function getNumberMap() {
    let numbers = [
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
        [16, 'dieciséis'], //has extra accent
        [20, 'veinte'],
        [22, 'veintidós'], //accent
        [23, 'veintitrés'], //accent
        [26, 'veintiséis'], //accent
        [30, 'treinta'],
        [40, 'cuarenta'],
        [50, 'cincuenta'],
        [60, 'sesenta'],
        [70, 'setenta'],
        [80, 'ochenta'],
        [90, 'noventa'],
        [100, 'cien'],
        [200, 'doscientos'],
        [300, 'trescientos'],
        [400, 'cuatrocientos'],
        [500, 'quinientos'],
        [600, 'seiscientos'],
        [700, 'setecientos'],
        [800, 'ochocientos'],
        [900, 'novecientos'],
        [1000, 'mil'],
    ];

    return new Map(numbers);
}

export class SpanishConvertor {
    static convert(number) {
        if (!Number.isInteger(number)) {
            throw new Error(`Invalid number "${number}"`);
        }

        let numberMap = getNumberMap();

        if (numberMap.has(number)) {
            return numberMap.get(number);
        }

        if (number >= 17 && number <= 19) {
            return 'dieci' + this.convert(number - 10);
        }
        if (number >= 21 && number <= 29) {
            return 'veinti' + this.convert(number - 20);
        }
        if (number > 30 && number <= 999) {
            let roundedDown = roundToBase(number);
            let modulo = number % roundedDown;
            if (number > 30 && number < 100) {
                return this.convert(roundedDown) + ' y ' + this.convert(modulo);
            } else if (number > 100 && number < 200) {
                return 'ciento ' + this.convert(modulo);
            } else {
                return this.convert(roundedDown) + ' ' + this.convert(modulo);
            }
        }
        throw new Error(`Number "${number}" is too big!`);
    }
}
