'use strict';

const romanToInt = require('../romanToInt/romanToInteger');

describe('romanToInteger', () => {
  it('requires a string', () => {
    expect(romanToInt(23)).toEqual(null);
  });

  it('adds one when it hits an I', () => {
    expect(romanToInt('III')).toEqual(3);
  });

  it('subtracts one from the next number when a I preceeds it', () => {
    expect(romanToInt('IV')).toEqual(4);
  });

  it('adds 50 when it hits an L and adds 5 when it hits a V', () => {
    expect(romanToInt('LVIII')).toEqual(58);
  });

  it('adds one when it hits an I, adds 5 when it hits a V, adds 10 when it hits and X, adds 50 when it hits an L, adds 100 with C, adds 500 with D, and 1000 with M', () => {
    expect(romanToInt('MCMXCIV')).toEqual(1994);
  });
});