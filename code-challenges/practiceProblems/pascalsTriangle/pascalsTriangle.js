// Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.

// Note that the row index starts from 0.


// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Example:

// Input: 3
// Output: [1,3,3,1]

'use strict';

function pascalTriangle(k){
  let pascalsArray = [];

  // generate pascals Triangle
  for(let i = 0; i <= k; i++){
    let tempArr = [];
    
    //for the first term
    if(i === 0){
      tempArr.push(1);
    }

    if(i >= 1){
      tempArr.push(1);
      
      for(let j = 1; j < pascalsArray[i-1].length; j++){
        tempArr.push(pascalsArray[i-1][j-1]+pascalsArray[i-1][j]);
      }

      tempArr.push(1);
    }
    pascalsArray.push(tempArr);
  }
  return pascalsArray[k];
}

console.log(pascalTriangle(4));