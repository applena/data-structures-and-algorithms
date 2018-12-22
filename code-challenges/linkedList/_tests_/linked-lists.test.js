'use strict';

const LinkedList = require ('../linked-list.js');
const { exec } = require('child_process');

describe ('linked lists data structure', () => {

  it('allows an undefined value', () => {
    let list = new LinkedList();
    list.insert();
    expect(list.head.value).toEqual(undefined);
  });

  it('returns true is you search for an value that is in the node list', () => {
    let list = new LinkedList();
    list.insert('Adam');
    list.insert('Lena');
    list.insert('Ilya');
    let result = list.includes('Lena');
    expect(result).toEqual(true);
  });

  it('reutrn false if you search for a value that is not in the node list', () => {
    let list = new LinkedList();
    list.insert('Adam');
    list.insert('Lena');
    list.insert('Ilya');
    let result = list.includes('Steve');
    expect(result).toEqual(false);
  });

  it('prints the node list', (done) => {
    exec('node _tests_/output.js', (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      expect(stderr).toEqual('');
      expect(stdout).toEqual(
        `LinkedList {
  head:
   Node {
     value: 'Adam',
     next:
      Node { value: 'Lena', next: Node { value: 'Ilya', next: null } } } }
`);
      done();
    });
  });

  it('adds a value to the node list', () => {
    let list = new LinkedList();
    list.insert('Adam');
    expect(list.head.value).toEqual('Adam');
  });

  it('will only care about the first argument', () => {
    let list = new LinkedList();
    list.insert('Adam', 'Lena');
    let result = list.includes('Lena');
    expect(result).toEqual(false);
  });

});