// Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.

// Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.

// You may return any answer array that satisfies this condition.

 

// Example 1:

// Input: [4,2,5,7]
// Output: [4,5,2,7]
// Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.

'use strict';

function sortArray(A){
  let newArr = [];
  A.forEach(num => {
    let count = 0;
    if(num%2 === 0 || num === 0){
      while(newArr[count] || newArr[count] === 0){
        count = count + 2;
      }
      newArr[count] = num;
    } else {
      while(newArr[count+1]){
        count = count + 2;
      }
      newArr[count+1] = num;
    }
  });
  return newArr;
}

console.log(sortArray([1,1,0,4]));