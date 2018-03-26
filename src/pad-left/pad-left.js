/** @flow */
import isString from '../is-string';

const cache = [
    '',
    ' ',
    '  ',
    '   ',
    '    ',
    '     ',
    '      ',
    '       ',
    '        ',
    '         '
  ];

  /**
   * pad a string to the left.
   *
   * @param {string} str string to pad
   * @param {number} len total
   * @param {string} ch char to use for padding
   * @returns {string} modified string
   * @example
   * padLeft('foo', 5) // => "  foo"
   * padLeft('foobar', 6) // => "foobar"
   * padLeft(1, 2, '0') // => "01"
   */
  export default function leftPad(str: string, len: number, ch: string): string {
    if (!isString(str)) throw new Error('`str` must be a cool string');
    
    str = str + '';
    len = len - str.length;
    if (len <= 0) return str;
    if (!ch && ch !== 0) ch = ' ';
    ch = ch + '';
    if (ch === ' ' && len < 10) return cache[len] + str;
    let pad = '';
  
    while (true) {
      if (len & 1) pad += ch;
      len >>= 1;
      if (len) ch += ch;
      else break;
    }
  
    return pad + str;
  };

  
