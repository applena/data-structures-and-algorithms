'use strict';

const List = require('./linkedList');

// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

function mergeSortedList(list1, list2){
  let list1Current = list1.head;
  let list2Current = list2.head;

  let myList = new List();
  // console.log('mylist head', myList.head);

  while(list1Current || list2Current){
    console.log('in while loop');
    if(list1Current && !list2Current){
      myList.insert(list1Current);
      list1Current = list1Current.next;
    } else if(list2Current && !list1Current){
      myList.insert(list2Current);
      list2Current = list2Current.next;
    } else if(list1Current.value <= list2Current.value){
      // console.log('inserting ', list1Current.value);
      myList.insert(list1Current.value);
      if(list1Current.next){
        list1Current = list1Current.next;
      } else {list1Current = null;}
    } else {
      // console.log('inserting ', list2Current.value);
      myList.insert(list2Current.value);
      if(list2Current.next){
        list2Current = list2Current.next;
      } else {
        list2Current = null;
      }
    }
  }
  console.log('myList', myList);
  myList.print();
}


let list1 = new List();
list1.insert(1);
list1.insert(2);
list1.insert(4);
list1.insert(6);
list1.insert(7);

let list2 = new List();
list2.insert(1);
list2.insert(3);
list2.insert(4);

mergeSortedList(list1, list2);
