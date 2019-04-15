'use strict';

// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

// If the last word does not exist, return 0.

// Note: A word is defined as a character sequence consists of non-space characters only.

// Example:

// Input: "Hello World"
// Output: 5

function lengthOfLastWord(s){
  s = s.replace(/\s*$/, '');
  console.log('str ', s);
  let strArr = s.split(' '); 
  let lastWord = strArr[strArr.length-1];
  if(!lastWord){ return 0; }
  return lastWord.length;
}

console.log(lengthOfLastWord('a '));