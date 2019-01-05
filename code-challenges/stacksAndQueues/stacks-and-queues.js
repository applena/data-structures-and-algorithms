'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

// Create a Stack class that has a top property. It creates an empty Stack when instantiated.

class Stack {
  constructor(){
    this.top = null;
    this.size = 0;
  }

  push(value){
    if(!value){throw 'you must enter a value for the new node';}
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

class Queue {
  constructor(){
    this.top = null;
    this.rear.next = null;
    this.size = 0;
  }

  enqueue(value){
    let node = new Node(value);
    if(this.rear){
      this.rear.next = node;
    }
    this.rear = node;
  }

  dequeue(){
    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    return temp;
  }

  peek(){
    return this.top;
  }
}

module.exports = Stack;
module.exports = Queue;

// Write at least three test assertions for each method that you define.

// Ensure your tests are passing before you submit your solution.

// Documentation: Your README.md
// # Stacks and Queues
// <!-- Short summary or background information -->

// ## Challenge
// <!-- Description of the challenge -->

// ## Approach & Efficiency
// <!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

// ## API
// <!-- Description of each method publicly available to your Stack and Queue-->
// Submission Instructions