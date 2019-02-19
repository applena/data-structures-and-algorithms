'use strict';

function quickSort(arr){
  if(!arr){ return null };
  if(!arr.length){ return null };
  if(arr.length < 2){ return arr };

  let pivot = arr[0];
  let lesser = [];
  let greater = [];

  for(let i in arr){
    if(arr[i] < pivot){
      lesser.push(arr[i]);
    }
    if(arr[i] > pivot){
      greater.push(arr[i]);
    }
  }

  return quickSort(lesser).concat(quickSort(pivot, quickSort(greater)));
}

module.exports = quickSort;