'use strict';

function findMax(arr){
  let max = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < 0){throw 'only positive numbers allowed';}
    if(arr[i].toString().length > max){
      max = arr[i].toString().length;
    }
  }
  
  return max;
}

function makeBuckets(int){
  let results = new Array(int);
  for(let i = 0; i < int; i++){
    results[i] = [];
  }
  
  return results;
}

function findValue(num, place){
  let str = num.toString();
  let val = str[place] ? str[place] : 0;
  return parseInt(val);
}

function sortRadix(arr){
  if(!arr){return null;}
  let max = findMax(arr);

  for(let i = 0; i < max; i++){
    let buckets = makeBuckets(10);

    for(let j = 0; j<arr.length; j++){
      console.log('sending this to findValue ', arr[j], i);
      let value = findValue(arr[j], i);
      buckets[value].push(arr[j]);
    }
    arr = [].concat(...buckets);
  }
  return arr;
}
// console.log(findMax([34, 3, 4, 29, 244]));
// console.log(findMax([344]));
// console.log(findMax([34555]));

//console.log(sortRadix([3, 2, 6, 1, 314, 34]));

module.exports = sortRadix;