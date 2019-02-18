'use strict';

function mergeSort(arr){
  if(!arr){ return null };
  if(arr.length === 1){ return arr };

  let middle = Math.floor(arr.length/2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  return merge(
    mergeSort(left),
    mergeSort(right)
  );

}

function merge(left, right){
  let results = [];
  let indexRight = 0;
  let indexLeft = 0;

  while(indexLeft < left.length && indexRight < right.length){
    if(typeof left[indexLeft] !== 'number'){return null};
    if(typeof right[indexRight] !== 'number'){return null};
    if(left[indexLeft] < right[indexRight]){
      results.push(left[indexLeft]);
      indexLeft++;
    } else {
      results.push(right[indexRight]);
      indexRight++;
    }
  }
  return results.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}
//console.log(mergeSort([53, 29, -9, 0, 4, 8, 10, 11, 1]));

// const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3]
// console.log(mergeSort(list)) // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]

module.exports = mergeSort;