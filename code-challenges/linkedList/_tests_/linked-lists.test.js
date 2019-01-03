'use strict';

const LinkedList = require ('../linked-list.js');
const { exec } = require('child_process');

describe ('linked lists data structure insert a value', () => {

  it('allows an undefined value', () => {
    let list = new LinkedList();
    list.insert();
    expect(list.head.value).toEqual(undefined);
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

describe ('linked lists data structure searches for nodes in linked list', () => {
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

  it('requires a value', () => {
    let list = new LinkedList();
    expect(()=>{list.includes();}).toThrow('you must enter a search value');
  });

});

describe('linked lists data structure prints a list of nodes', () => {

  it('prints the node list', (done) => {
    exec('node _tests_/outputFull.js', (error, stdout, stderr) => {
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

  it('prints an empty list if there is an error', (done) => {
    exec('node _tests_/outputFull.js', (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      expect(stderr).toEqual('');
      done();
    });
  });

  it('prints an empty list if there are no values', () => {
    let list = new LinkedList();
    expect(() => {list.print();}).toThrow('this is an empty list');
  });

});

describe ('it inserts a node in the middle of the list', () => {
  //happy path insertBefore
  it ('inserts a node value before a given node', () => {
    let list = new LinkedList();
    list.insert('Adam');
    list.insert('Lena');
    list.insert('Ilya');
    list.insertBefore('Lena', 'John');
    let result = list.includes('John');
    expect(result).toEqual(true);
  });

  it('requires two arguments in order to insert', () => {
    let list = new LinkedList();
    list.insert('Adam');
    list.insert('Lena');
    list.insert('Ilya');
    expect(() => {list.insertBefore('Taco');}).toThrow('you must enter two values');
  });

  it('requires the first value to be present in the list', () => {
    let list = new LinkedList();
    list.insert('Adam');
    list.insert('Lena');
    list.insert('Ilya');
    expect(() => {list.insertBefore('Taco', 'TacoAgain');}).toThrow('value not found in link list');
  });

  //happy path insertAfter
  it ('inserts a node value after a given node', () => {
    let list = new LinkedList();
    list.insert('Adam');
    list.insert('Lena');
    list.insert('Ilya');
    list.insertBefore('Lena', 'John');
    let result = list.includes('John');
    expect(result).toEqual(true);
  });

  it('requires two arguments in order to insert', () => {
    let list = new LinkedList();
    list.insert('Adam');
    list.insert('Lena');
    list.insert('Ilya');
    expect(() => {list.insertAfter('Taco');}).toThrow('you must enter two values');
  });

  it('requires the first value to be present in the list', () => {
    let list = new LinkedList();
    list.insert('Adam');
    list.insert('Lena');
    list.insert('Ilya');
    expect(() => {list.insertAfter('Taco', 'TacoAgain');}).toThrow('value not found in link list');
  });
});

describe('returns the value of a given node from the end', () => {
  //happy path
  it('returns the value of a node x value from the end', () => {
    let list = new LinkedList();
    list.insert('Adam');
    list.insert('Lena');
    list.insert('Ilya');
    expect(list.kth_from_end(1)).toEqual('Lena');
  });

  it('returns null if the number is bigger than the length', () => {
    let list = new LinkedList();
    list.insert('Adam');
    list.insert('Lena');
    list.insert('Ilya');
    expect(list.kth_from_end(4)).toEqual(null);
  });

  it('requires a number as a parameter', () => {
    let list = new LinkedList();
    list.insert('Adam');
    list.insert('Lena');
    list.insert('Ilya');
    expect(() => {list.kth_from_end('taco');}).toThrow('please enter a number');
  });
});

describe('it combines two linked lists', () => {
  let mergedList = require('../ll_merge/ll-merge');

  it('requires two linked list as parameters', () => {
    let firstList = new LinkedList();
    firstList.insert('Adam');
    firstList.insert('Lena');
    firstList.insert('Ilya');
    expect(() => {mergedList(firstList);}).toThrow('you must enter two lists');
  });

  it('returns the head node', () => {
    let firstList = new LinkedList();
    let secondList = new LinkedList();
    firstList.insert('Adam');
    firstList.insert('Lena');
    firstList.insert('Ilya');
    secondList.insert('A');
    secondList.insert('B');
    secondList.insert('C');
    secondList.insert('D');
    secondList.insert('E');
    let result = mergedList(firstList, secondList);
    expect(result.head.value).toEqual(firstList.head.value);
  });

  it('zips the two lists together', () => {
    let firstList = new LinkedList();
    let secondList = new LinkedList();
    firstList.insert('Adam');
    firstList.insert('Lena');
    firstList.insert('Ilya');
    secondList.insert('A');
    secondList.insert('B');
    secondList.insert('C');
    secondList.insert('D');
    secondList.insert('E');
    let result = mergedList(firstList, secondList);
    expect(result).toMatchObject({'head': {'next': {'next': {'next': {'next': {'next': {'next': {'next': {'next': null, 'value': 'E'}, 'value': 'D'}, 'value': 'C'}, 'value': 'Ilya'}, 'value': 'B'}, 'value': 'Lena'}, 'value': 'A'}, 'value': 'Adam'}});
  });
});