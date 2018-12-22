'use strict';

const util = require('util');

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor (){
    this.head = null;
  }
  
  insert(value){

    let node = new Node(value);
    if( !this.head ){
      this.head = node;
      return;
    }

    //assume first that the head node is the last node until you verfiy otherwise with the while loop
    let lastNode = this.head;

    //cycle through until you find the last node that doesn't have a node following it
    while(lastNode.next){
      lastNode = lastNode.next;
    }

    lastNode.next = node;

  }

  includes(value){
    //assuming that the vaule is the head until proven otherwise
    let matchingNode = this.head;

    while( matchingNode.value !== value ){
      matchingNode = matchingNode.next;
      if( !matchingNode ){
        return false;
      }
    }
    return true;
  }

  print(){
    // Define a method called print which takes in no arguments and outputs all of the current Node values in the Linked List.
    let endNode = this.head;
    let length = 1;

    while (endNode.next){
      endNode = endNode.next;
      length++;
    }
    console.log(util.inspect(this, {depth: length}));
    return this; 
  }
}

module.exports = LinkedList;