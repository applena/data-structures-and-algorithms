'use strict';

function quickSort(arr){
  if(!arr){ return []; }
  if(arr.length < 2){ return arr; }

  let pivot = arr[0];
  let lesser = [];
  let greater = [];

  for(let i = 0; i<arr.length; i++){
    if(arr[i] < pivot){
      lesser.push(arr[i]);
    }
    if(arr[i] > pivot){
      greater.push(arr[i]);
    }
  }

  return quickSort(lesser).concat(pivot, quickSort(greater));
}

console.log(quickSort([2,5,1,6]));

module.exports = quickSort;