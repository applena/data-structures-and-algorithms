'use strict';

const Stack = require('../stacks');

class PseudoQueue {

  constructor(){
    this.top = null;
    this.next = null;
  }

  enqueue(stack1, stack2){
    if(arguments.length !== 2){throw 'you must enter two Stacks as arguments';}
    let previous;
    let stack = new Stack();

    stack.push(stack1);
    
    this.top = previous;

    stack.push(stack2);

    top.next = previous;
    previous = top;
  }

  dequeue(stack1, stack2){
    if(arguments.length !== 2){throw 'you must enter two Stacks as arguments';}
    let stack = new Stack();
    stack.push(stack1);
    stack.push(stack2);
    stack.pop();
  }
}

module.exports = PseudoQueue;