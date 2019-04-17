'use strict';

// implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in hte array, but it will alays be sorted.

// countUniqueValues([1,1,1,1,1,2]) //2

function countUniqueValues(arr){
  let first = 0;
  let second = 1;
  let count = 0;

  for(let i = 0; i < arr.length; i++){
    if(arr[first+i] !== arr[second+i]){
      count++;
    }
  }
  return count;
}

// console.log(countUniqueValues([1,1, 1, 6]));

function countUniqueValuesNew(arr){
  let j = 1;

  for(let i = 0; i<arr.length; i++){
    if(arr[i] === arr[j]){
      j++;
    } else {
      i++;
      arr[i] = arr[j];
      console.log(arr);
    }
    // console.log(arr);
    return i+1;
  }
}

console.log(countUniqueValuesNew([1,2,3,3,3,4,5,5,6]));