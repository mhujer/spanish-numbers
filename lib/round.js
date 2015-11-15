"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.roundToBase = roundToBase;
/**
 * Rounds the number down to whole base number
 * e.g. 73 -> 70, 678 -> 600
 *
 * @param number
 * @returns {number}
 */
function roundToBase(number) {
  var pow = number.toString().length - 1;
  var base = Math.pow(10, pow);
  return Math.floor(number / base) * base;
}