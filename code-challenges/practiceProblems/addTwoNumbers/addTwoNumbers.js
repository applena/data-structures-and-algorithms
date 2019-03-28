'use strict';

const List = require('../../linkedList/linked-list');
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

function addTwoNumbers(li1, li2){
  // console.log(li1, li2);
  let arr1 = [];
  let arr2 = [];

  let current1 = li1.head;
  // console.log('current.next', current1.next.value);
  while(current1.next){
    // console.log('current', current1);
    arr1.push(current1.value);
    current1 = current1.next;
  }
  arr1.push(current1.value);

  let current2 = li2.head;
  while(current2.next){
    arr2.push(current2.value);
    current2 = current2.next;
  }
  arr2.push(current2.value);

  // console.log('arr1 and arr2', arr1, arr2);
  let num1 = arr1.reverse().join('');
  let num2 = arr2.reverse().join('');
  let resultNum = Number(num1)+Number(num2);
  let result = (resultNum+'').split('').reverse();

  let resultList = new List();
  result.forEach(num => {
    resultList.insert(num);
  });

  return resultList;

}

let list1 = new List();
list1.insert(4);
list1.insert(3);
list1.insert(2);

let list2 = new List();
list2.insert(3);
list2.insert(4);
list2.insert(1);
list2.insert(3);

addTwoNumbers(list1, list2);

