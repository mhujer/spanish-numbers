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
    ];

    return new Map(numbers);
}
