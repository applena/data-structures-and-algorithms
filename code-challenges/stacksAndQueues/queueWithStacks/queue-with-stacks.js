'use strict';

const Stack = require('../stacks');

class PseudoQueue {

  constructor(){
    this.bottom = null;
    this.stack = new Stack();
  }

  enqueue(value){
    if(arguments.length !== 1){throw 'you must enter a value as arguments';}
    
    this.stack.push(value);
    if(!this.bottom) {
      this.bottom = this.stack.top;
    }else{
      this.bottom.previous = this.stack.top;
    }

  }

  dequeue(){
    if(arguments.length){throw 'this does not take an argument';}
    if(!this.bottom){throw 'this is an empty pseudoQ';}
    // it won't have a previous if this is a stack of 1 item
    if(this.bottom.previous){
      this.bottom.previous.next = null; // delete knowledge of bottom from stack
    }

    let temp = this.bottom.value;
    // move the bottom reference to the new last item in the stack
    this.bottom = this.bottom.previous;

    return temp;
  }
}

module.exports = PseudoQueue;
