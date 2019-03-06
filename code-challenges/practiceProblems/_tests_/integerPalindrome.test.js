'use strict';

const integerPalindrome = require('../integerPalindrome');

describe('integerPalindrome', () => {
  it('requres an int as a paramete', () => {
    expect(integerPalindrome('4k4')).toEqual(false);
  });

  it('returns false if the int is not a palindrome', () => {
    expect(integerPalindrome(173)).toEqual(false);
  });

  it('returns true if the int is a palindrome', () => {
    expect(integerPalindrome(123454321)).toEqual(true);
  });

  it('considers the negative sign as a character in determining if the int is a palindrome', () => {
    expect(integerPalindrome(-42824)).toEqual(false);
  });
});