'use strict';

const radixSort = require('../radix-sort');

describe('radix-sort', () => {
  it('requires an array', () => {
    expect(radixSort()).toEqual(null);
  });

  it('requires only positive numbers', () => {
    expect(() => {radixSort([-4, 5, 98, 0]);}).toThrow('only positive numbers allowed');
  });

  it('returns a sorted array', () => {
    expect(radixSort([4, 92, 3])).toEqual([3, 4, 92]);
  });

});