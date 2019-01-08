'use strict';

const Stack = require('../stacks');

class PseudoQueue {

  constructor(){
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value){
    if(arguments.length !== 1){throw 'you must enter a value as arguments';}
    
    this.stack1.push(value);
    while(this.stack1){
      this.stack2.push(this.stack1.pop());
    }

  }

  dequeue(){
    if(arguments.length){throw 'this does not take an argument';}
    if(!this.bottom){throw 'this is an empty pseudoQ';}
    // it won't have a previous if this is a stack of 1 item
    return this.stack2.pop();
  }
}

module.exports = PseudoQueue;
