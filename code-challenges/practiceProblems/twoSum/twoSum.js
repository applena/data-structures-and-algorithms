'use strict';

// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

function twoSums(arr, target){
  for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] !== 'number'){ return null; }
    for(let j = i+1; j < arr.length; j++){
      if(typeof arr[i] !== 'number'){ return null; }
      if(arr[i] + arr[j] === target){
        return [i, j];
      }
    }
  }
  return [];
}

module.exports = twoSums;

console.log(twoSums([1,7,11,15, 2], 9));