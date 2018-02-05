/** @flow */


/**
 * determines whether `str` is a string.
 * 
 * @param {*} val
 * @returns {boolean}
 * @example
 * isString(3) // => false
 * isString('foo') // => true
 */
export default function isString(val: string): boolean {
  return typeof val === 'string';
};
