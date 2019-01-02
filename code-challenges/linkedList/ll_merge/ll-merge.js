'use strict';

const LinkedList = require('../linked-list');
const util = require('util');

function mergedList(listOne, listTwo){
  if(arguments.length !==2 ){throw 'you must enter two lists';}

  let currentListOne = listOne.head;
  let currentListTwo = listTwo.head;

  while(currentListOne.next && currentListTwo.next){
    let temp = currentListTwo.next;
    currentListTwo.next = currentListOne.next;
    currentListOne.next = currentListTwo;
    currentListOne = currentListTwo.next;
    currentListTwo = temp;
  }

  while (currentListOne.next){
    currentListOne = currentListOne.next;
  }

  while (currentListTwo.next){
    currentListOne = currentListTwo;
    currentListTwo = currentListTwo.next;
  }

  console.log(util.inspect(currentListOne, {depth: 20}));
  return currentListOne;
}

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
mergedList(firstList, secondList);


module.exports = mergedList;