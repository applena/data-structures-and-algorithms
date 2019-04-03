'use strict';

const leftJoin = require('../leftJoin/left-join');
const Hashtable = require('../hashtable');



describe('left-join', () => {
  it('returns null if the left hash is empty', () => {
    let hash1 = new Hashtable(0);
    let hash2 = new Hashtable(1);
    expect(leftJoin(hash1, hash2)).toEqual(null);
  });

  it('requires two hash tables as parameters', () => {
    expect(()=> {leftJoin();}).toThrow('you must enter two hashtables');
  });

  it('it returns an array of arrays each containing the key from the first table and the values from both tables that match that key', () => {
    let hash1 = new Hashtable(10);
    hash1.add('nice', 'kind');
    hash1.add('happy', 'joyful');

    let hash2 = new Hashtable(10);
    hash2.add('nice', 'mean');
    hash2.add('happy', 'sad');

    expect(leftJoin(hash1, hash2)).toEqual([['nice', 'kind', 'mean'], ['happy', 'joyful', 'sad']]);
  });

  it('if the key is not in the second table, it returns null', () => {
    let hash1 = new Hashtable(10);
    hash1.add('sad', 'upseat');
    
    let hash2 = new Hashtable(10);
    hash2.add('happy', 'sad');

    expect(leftJoin(hash1, hash2)).toEqual([['sad', 'upseat', null]]);
  });

});