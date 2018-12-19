'use strict';

module.exports = function binarySearch(arr=[], key=0){
  //ensures it is a sorted array
  if (arr.sort((a, b) => {
    return a > b ? 1: -1;
  }) !== true ){
    return null;
  }

  let midIdx = Math.floor(arr.length/2);

  //function that runs if the key is larger than the value at the middle index
  let bottomMiddle = function(midIdx){
    midIdx = Math.floor(midIdx/2);
  }

  //function that runs if the key is smaller than the value at the middle index
  let topMiddle = function(midIdx){
    midIdx = midIdx+Math.floor((arr.length - midIdx)/2);
  }

  while(key !== arr[midIdx]){
    if(key === arr[midIdx] || key === arr[midIdx + 1]){
      return midIdx;
    } else if (key < arr[midIdx]){
      bottomMiddle(midIdx);
    } else if (key > arr[midIdx]){
      topMiddle(midIdx);
    } else {
      return -1;
    }
  }  
}

console.log(binarySearch([2,4,5,6,9,23,145,354], 4));