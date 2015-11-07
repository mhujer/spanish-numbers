export class SpanishConvertor {
    static convert(number) {
        if (!Number.isInteger(number)) {
            throw new Error(`Invalid number "${number}"`);
        }

        let numberMap = getNumberMap();

        if (numberMap.has(number)) {
            return numberMap.get(number);
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
    ];

    return new Map(numbers);
}
