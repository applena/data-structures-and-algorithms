'use strict';

const mergeSort = require('../merge-sort');

describe('mergeSort', () => {
  it('requires an array', () => {
    expect(mergeSort()).toEqual(null);
  });

  it('returns a sorted array', () => {
    expect(mergeSort([4, 9, -2, 0, 1 ])).toEqual([-2, 0, 1, 4, 9]);
  });

  it('requires numberic values in the array', () => {
    expect(mergeSort(['a', 3, 2])).toEqual(null);
  });
});