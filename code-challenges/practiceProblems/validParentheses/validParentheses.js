// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true

'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
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

function isValidParentheses(s){
  let myStack = new Stack();

  let round = 0;
  let square = 0;
  let curly = 0;

  for(let i = 0; i < s.length; i++){
    
    if(s[i] === '('){ 
      round++; 
      myStack.push(s[i]);
    }
    if(s[i] === '['){ 
      square++;
      myStack.push(s[i]); 
    }
    if(s[i] === '{'){ 
      curly++; 
      myStack.push(s[i]);
    }
    
    if(s[i] === ')'){ 
      round--; 
      if(myStack.peek().value !== '('){
        return false;
      } else {
        myStack.pop();
      }
    }
    if(s[i] === ']'){ 
      square--; 
      if(myStack.peek().value !== '['){
        return false;
      } else {
        myStack.pop();
      }
    }
    if(s[i] === '}'){ 
      curly--; 
      if(myStack.peek().value !== '{'){
        return false;
      } else {
        myStack.pop();
      }
    }

  }


  if(round < 0 || square < 0 || curly < 0){
    console.log('in the false conditional');
    return false;
  }

  return true;
}

console.log(isValidParentheses('()'), 'expect true');
console.log(isValidParentheses('()[]{}'), 'expect true');
console.log(isValidParentheses('(]'), 'expect false');
console.log(isValidParentheses('([)]'), 'expect false');
console.log(isValidParentheses('{[]}'), 'expect true');