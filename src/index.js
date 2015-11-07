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
        if (number > 30 && number < 100) {
            let decimal = Math.floor(number / 10) * 10;
            let misc = number % 10;
            return this.convert(decimal) + ' y ' + this.convert(misc);
        }
    }
}

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
    ];

    return new Map(numbers);
}
