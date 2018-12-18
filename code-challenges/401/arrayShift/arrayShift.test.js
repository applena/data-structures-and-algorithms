'use strict';

const shiftArray = require('./array-shift');

describe('testing module', () => {
  it('requires an array as the first value', () => {
    let expected = null;
    let result = shiftArray.insertShiftArray(4, 4);
    expect(result).toEqual(expected);
  });

  it('defaults to an empty array and 0', () => {
    let expected = [0];
    let result = shiftArray.insertShiftArray();
    expect(result).toEqual(expected);
  });

  //Happy Path
  it('inserts the second parameter into the middle of the array', () => {
    let expected = [2,4,5,6,8];
    let result = shiftArray.insertShiftArray([2,4,6,8], 5);
    expect(result).toEqual(expected);
  })
})