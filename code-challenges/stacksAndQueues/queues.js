'use strict';

let Node = require('./node');

class Queue {
  constructor(){
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  enqueue(value){
    if(!value){throw 'you must enter a vaule';}
    let node = new Node(value);
    if(this.rear){
      this.rear.next = node;
    } else {
      this.front = node;
      this.rear = node;
    }
    this.size++;
  }

  dequeue(){
    let temp = this.top;
    this.front = this.front.next;
    temp.next = null;
    this.size--;
    return temp;
  }

  peek(){
    return this.front;
  }
}


module.exports = Queue;