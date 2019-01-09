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
    while(this.stack1.next){
      this.stack2.push(this.stack1.pop().value);
    }
    this.stack2.push(this.stack1.pop().value);
  }

  dequeue(){
    if(arguments.length){throw 'this does not take an argument';}
    if(!this.stack2.top){ throw 'this is an empty Q';}
    return this.stack2.pop().value;
  }

  peek(){
    return this.stack2.top.value;
  }
}

module.exports = PseudoQueue;
