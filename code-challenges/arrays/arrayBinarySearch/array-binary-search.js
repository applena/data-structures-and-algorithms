'use strict';

module.exports = function binarySearch(arr=[], key=0){
  //ensures it is a sorted array
  arr.sort((a, b) => {
    return a > b ? 1: -1;
  });

  let midIdx = Math.floor(arr.length/2);

  //function that runs if the key is larger than the value at the current middle index
  let bottomMiddle = function(start, end){
    midIdx = Math.floor(((end - start)/2)+start);
  };

  //function that runs if the key is smaller than the value at the middle index
  let topMiddle = function(start, end){
    midIdx = midIdx+Math.floor((end - start)/2);
  };
  let start = 0;
  let end = arr.length;
  while(key !== arr[midIdx]){
    console.log(key, midIdx, arr[midIdx]);
    if(midIdx===0 || midIdx===arr.length-1){
      return -1;
    } else if (key < arr[midIdx]){
      end = midIdx;
      bottomMiddle(start, end);
    } else if (key > arr[midIdx]){
      start = midIdx;
      topMiddle(start, end);
    }
  }  
  return midIdx;
};