'use strict';

const binarySearch = require('../array-binary-search');

describe('binary search', () => {
  it('requires a sorted arr', () => {
    let expected = null;
    let result = binarySearch([4,3,2,8], 3);
    expect(result).toEqual(expected);
  });

  it('defaults arr to [] and key to 0', () => {
    let expected = -1;
    let result = binarySearch();
    expect(result).toEqual(expected);
  });

  //happy path
  it('searches through the array and returns the index value of the key', () => {
    let expected = 2;
    let result = binarySearch([8, 10, 12, 14, 16], 12);
    expect(result).toEqual(expected);
  })

  it('returns -1 if the key is not in the array', () => {
    let expected = -1;
    let result = binarySearch([8, 10, 12, 14, 16], 24);
    expect(result).toEqual(expected);
  })
});