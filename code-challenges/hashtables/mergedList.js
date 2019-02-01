'use strict';

const LinkedList = require('./linkedList');
const util = require('util');

function mergedList(listOne, listTwo){
  if(arguments.length !==2 ){throw 'you must enter two lists';}

  let currentListOne = listOne.head;
  let currentListTwo = listTwo.head;

  while(currentListOne.next && currentListTwo.next){
    let oneNext = currentListOne.next;
    let twoNext = currentListTwo.next;
    currentListOne.next = currentListTwo;
    currentListTwo.next = oneNext;
    currentListOne = oneNext;
    currentListTwo = twoNext;
  }
  if(currentListTwo.next){
    currentListOne.next = currentListTwo;
  }

  console.log(util.inspect(listOne, {depth: 20}));
  return listOne;
}

// let firstList = new LinkedList();
// let secondList = new LinkedList();
// firstList.insert('Adam');
// firstList.insert('Lena');
// firstList.insert('Ilya');
// secondList.insert('A');
// secondList.insert('B');
// secondList.insert('C');
// secondList.insert('D');
// secondList.insert('E');
// mergedList(firstList, secondList);


module.exports = mergedList;