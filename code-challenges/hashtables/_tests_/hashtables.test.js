'use strict';
const HashMap = require('../hashtable');

describe ('hashtables', () => {
  describe('getHash', () => {
    it('requires a key', () => {
      let myHash = new HashMap(6);
      expect(() => {myHash.getHash();}).toThrow('please enter a key');
    });

    it('accepts both intergers and strings as a key', () => {
      let myHash = new HashMap(6);
      expect(myHash.getHash('john')).toEqual(5);
      expect(myHash.getHash(34)).toEqual(1);
    });

    it('returns an integer between 1 and the size of the hashtable', () => {
      let myHash = new HashMap(6);
      expect(myHash.getHash('john')).toEqual(5);
      expect(myHash.getHash(34)).toEqual(1);
      expect(myHash.getHash('Zach')).toEqual(0);
    });
  });

  describe('add', () => {
    it('requires a key and value as a parameter', () => {
      let myHash = new HashMap(5);
      expect(() => {myHash.add('johbn');}).toThrow('please enter a value and a key');
      expect(() => {myHash.add();}).toThrow('please enter a value and a key');
    });

    it('adds a key value pair to an index determind in the getHash', () => {
      let myHash = new HashMap(5);
      myHash.add('john', 'dad');
      expect((myHash.contains('john'))).toBe(true);
    });
    
    it('can add more than one key value pair to the same index', () => {
      let myHash = new HashMap(5);
      expect(myHash.getHash('Cathy')).toEqual(0);
      expect(myHash.getHash('Zach')).toEqual(0);
    });
  });

  describe('find', () => {
    it('requires a key', () => {
      let myHash = new HashMap(6);
      expect(() => {myHash.getHash();}).toThrow('please enter a key');
    });

    it('returns the value of a given key if the key is present in the hashmap', () => {
      let myHash = new HashMap(6);
      myHash.add('john', 'dad');
      expect(myHash.find('john')).toEqual('dad');
    });
    
    it('returns undefined if value of a given key if the key is not present in the hashmap', () => {
      let myHash = new HashMap(6);
      myHash.add('john', 'dad');
      expect(myHash.find('bob')).toEqual(null);
    });

    it('returns null if value of a given key if the key is not present in the hashmap', () => {
      let myHash = new HashMap(6);
      expect(myHash.find('bob')).toBe(null);
    });
  });

  describe('contains', () => {
    it('requires a key', () => {
      let myHash = new HashMap(6);
      expect(() => {myHash.getHash();}).toThrow('please enter a key');
    });

    it('returns false if they key is not present in the hashmap', () => {
      let myHash = new HashMap(6);
      myHash.add('john', 'dad');
      expect(myHash.contains('bob')).toBe(false);
    });
    
    it('returns true if they key is present in the hashmap', () => {
      let myHash = new HashMap(6);
      myHash.add('john', 'dad');
      expect(myHash.contains('john')).toBe(true);
    });
  });


});

// let myHash = new HashMap(6);
// myHash.add('John', 'dad');
// myHash.add('Cathy', 'mom');
// myHash.add('Zach', 'boy');
// myHash.add('Allie', 'girl');