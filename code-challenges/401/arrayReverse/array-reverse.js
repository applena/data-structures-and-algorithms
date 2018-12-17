'use strict';

// Write a function called reverseArray which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return an array with elements in reversed order.

function reverseArray(array){
  let newArray = [];
  for (let i=0; i < array.length; i++){
    newArray[i] = array[array.length-i-1];
  }
  return newArray;
};

console.log(reverseArray([1,2,3,4,5,6]));