'use strict';

const twoSums = require('../twoSum/twoSum');

describe('twoSums', () =>{
  it('returns an empty array if the given array is empty', () => {
    expect(twoSums([], 9)).toEqual([]);
  });

  it('returns an empty array if no two sums add up to the target', () =>{
    expect(twoSums([1,2,3], 9)).toEqual([]);
  });

  it('returns the indexs of the two numbers that add up to the target', () => {
    expect(twoSums([1,2,3,4,5,6,7], 9)).toEqual([1,6]);
  });
});