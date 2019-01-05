'use strict';

const Stack = require('../stacks');
const Queue = require('../queues');

describe('stack', () => {
  it('creates an instance', () => {
    let stack = new Stack();
    expect( stack instanceof Stack).toBeTruthy();
  });

  describe('peek()', () => {
    it('returns null on an empty stack', () => {
      let stack = new Stack();
      expect(stack.peek()).toBeNull();
    });

    it('returns the top item', () => {
      let stack = new Stack();
      stack.push(1);
      stack.push(2);
      expect(stack.peek().value).toEqual(2);
    });

    it('does not alter the stack', () => {
      let stack = new Stack();
      stack.push(1);
      expect(stack.peek().value).toEqual(1);
      expect(stack.peek().value).toEqual(1);
    });
  });

  describe('pop()', () => {
    it('returns and removes the top item', () => {
      let stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.pop().value).toEqual(3);
      expect(stack.pop().value).toEqual(2);
      expect(stack.pop().value).toEqual(1);
    });

    it('following a pop() points to the new head of the stack', () => {
      let stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.pop().value).toEqual(3);
      expect(stack.peek().value).toEqual(2);
    });

    it('', () => {
      let stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.pop().value).toEqual(3);
      expect(stack.pop().value).toEqual(2);
      expect(stack.pop().value).toEqual(1);
    });
    
  });

  describe('push', () => {
    it('adds a value to the top of the stack', ()=> {
      let stack = new Stack;
      stack.push(1);
      stack.push(2);
      expect(stack.peek().value).toEqual(2);
    });

    it('requires a value as a parameter', ()=> {
      let stack = new Stack;
      stack.push();
      expect(stack.peek().value).toEqual(undefined);
    });

    it('adds 1 to the lenght of the stack', ()=> {
      let stack = new Stack;
      stack.push(1);
      stack.push(2);
      expect(stack.size).toEqual(2);
    });
  });
});


describe('Queue', () => {
  describe('enqueue()', () => {
    it('returns null if there is not at least one value', ()=> {
      let queue = new Queue();
      expect(()=> {queue.enqueue();}).toThrow('you must enter a vaule');
    });

    it('increses the size of the Queue by one', ()=> {
      let queue = new Queue();
      queue.enqueue('Adam');
      queue.enqueue('Ilya');
      expect(queue.size).toEqual(2);
    });

    //happy path
    it('adds a node to the end of a Queue', ()=> {
      let queue = new Queue();
      queue.enqueue('Adam');
      queue.enqueue('Ilya');
      expect(queue.peek().value).toEqual('Adam');
    });
  });

  describe('dequeue()', () => {
    it('returns null if the queque is empty', ()=> {
      let queue = new Queue();
      expect(() => {queue.dequeue();}).toThrow('empty queue');
    });

    it('the size of the queue will decrease by one', ()=> {
      let queue = new Queue();
      queue.enqueue('Adam');
      queue.enqueue('Ilya');
      queue.dequeue();
      expect(queue.size).toEqual(1);
    });

    //happy path
    it('removes a node from the front/top of the Queue', ()=> {
      let queue = new Queue();
      queue.enqueue('Adam');
      queue.enqueue('Ilya');
      queue.dequeue();
      expect(queue.peek().value).toEqual('Ilya');
    });
  });

  describe('peek()', () => {
    it('returns null on an empty stack', ()=> {
      let queue = new Queue();
      expect(() => queue.peek()).toThrow('empty queque');
    });

    it('does not alter the queue', ()=> {
      let queue = new Queue();
      queue.enqueue('Adam');
      queue.enqueue('Ilya');
      queue.peek();
      expect(queue.size).toEqual(2);
    });

    //happy path
    it('returns the front node of the queue', ()=> {
      let queue = new Queue();
      queue.enqueue('Adam');
      queue.enqueue('Ilya');
      expect(queue.peek().value).toEqual('Adam');
    });
  });
});
