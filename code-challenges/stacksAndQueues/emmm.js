'use strict';

// function emmm(arr, n){

//   while (arr.length !== 1){
//     let tempArr = [];
//     for(let i = 0; i < arr.length; i++){
//       if((i+1) % n !== 0){
//         tempArr.push(arr[i]);
//       }
//       if (arr.length - i < n){
//         tempArr.unshift(arr.slice(i, arr.length));//put it at the beginning
//       }
//     }
//     arr = tempArr;
//   }
//   return arr;
// }

// console.log(emmm(['a', 'b', 'c', 'd', 'e', 'f'], 3));

function emmm(arr, n){
  let current = 1;
  while (arr.length !== 1){
    let tempArr = [];
    for(let i = 0; i < arr.length; i++){
      if(current!==n){ // not taking every n item
        tempArr.push(arr[i]);
      }
      current++;
      if(current > n){
        // reset current to 1 if it crosses n
        current = 1;
      }
    }
    // save new arr so the while loop will do another for loop
    // but will keep our current tracking an increment from 1-n
    arr = tempArr;
  }
  return arr;
}

console.log(emmm(['a', 'b', 'c', 'd', 'e', 'f'], 3));