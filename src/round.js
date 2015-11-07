/**
 * Rounds the number down to whole base number
 * e.g. 73 -> 70, 678 -> 600
 *
 * @param number
 * @returns {number}
 */
export function roundToBase(number) {
    let pow = number.toString().length - 1;
    let base = Math.pow(10, pow);
    return Math.floor(number / base) * base;
}
