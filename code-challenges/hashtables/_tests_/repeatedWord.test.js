'use strict';

let repeatedWord = require('../repeatedWord/repeated-word');

describe('repeated-word', () => {
  it('returns null if no words are repeated', () => {
    expect(repeatedWord('hi there')).toBe(null);
  });

  it('is case insensitive', () => {
    expect(repeatedWord('it Summer has summer')).toEqual('summer');
  });

  it('includes apostrophies in its calculations', () => {
    expect(repeatedWord('It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...')).toEqual('summer');
  });

  it('returns the frist word that is repeated', () => {
    expect(repeatedWord('Once upon a time, there was a brave princess who...')).toEqual('a');
  });
});