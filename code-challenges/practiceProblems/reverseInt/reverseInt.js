'use strict';

// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21

function reverseInt(x){
  let newArr = [];

  let y = x+'';
  let negative;
  
  if(y[0] === '-'){
    negative = '-';
    y = y.substring(1, y.length);
  }
  
  for(let i = 0; i<y.length; i++){
    newArr[y.length-i] = y[i];
  }
  
  if(negative === '-'){
    newArr.unshift('-');  
  }

  let resultStr = newArr.join('');
  let num = Number(resultStr);

  if(num < -2147483648){ return 0; }
  if(num > 2147483647){ return 0; }
  
  return num;
}

console.log(reverseInt(-1234));