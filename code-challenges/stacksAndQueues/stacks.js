'use strict';

const Node = require('./node');

class Stack {
  constructor(){
    this.stack = new Node();
    this.top = null;
    this.size = 0;
    this.next = null;
  }

  push(value){
    let node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.size++;
  }

  pop() {
    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    this.size--;
    return temp;
  }

  peek() {
    return this.top;
  }
}

module.exports = Stack;