'use strict';

const bracket = require('../multi-bracket-validation');

describe('multi bracket validation', () => {
  it('requires an input', () => {
    expect(() => {bracket();}).toThrow('you must enter an input string');
  });

  it('requires that the input is a string', () => {
    expect(() => {bracket(23);}).toThrow('you must enter a string');
  });

  it('returns true if the brackets are balanced', () => {
    let result = bracket('[lk({}])');
    expect(result).toEqual(true);
  });

  it('returns faluse if the brackets are not balanced', () => {
    let result = bracket(']lakd[][');
    expect(result).toEqual(false);
  });
});