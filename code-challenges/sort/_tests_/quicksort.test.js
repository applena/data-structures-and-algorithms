'use strict';

const quickSort = require('../quick-sort');

describe('quickSort', () => {
  it('requires an array', () => {
    expect(quickSort()).toEqual(null);
  });

  it('returns null if the array is empty', () => {
    expect(quickSort([])).toEqual(null);
  });

  it('returns an sorted array', () => {
    expect(quickSort([3,6,2,0,11,7])).toEqual([0,2,3,6,7,11]);
  });
});