// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// Example 1:

// Input: [1,3,5,6], 5
// Output: 2
// Example 2:

// Input: [1,3,5,6], 2
// Output: 1
// Example 3:

// Input: [1,3,5,6], 7
// Output: 4
// Example 4:

// Input: [1,3,5,6], 0
// Output: 0

'use strict';

// function searchInsertPosition(nums, target){
//   const findMiddleLeft = (middle) => {
//     return Math.floor(middle/2);
//   };

//   const findMiddleRight = (middle, length) => {
//     return Math.floor((length-middle)/2);
//   };

//   let middle = Math.floor(nums.length/2);

//   const _findTarget = (middle) => {
//     if(target < middle){
//       let newMiddle = findMiddleLeft(middle);
//       _findTarget(newMiddle);
//     } else if(target > middle){
//       let newMiddle = findMiddleRight(middle, nums.length);
//       _findTarget(newMiddle);
//     } else { return middle; }

//   };

//   _findTarget(middle);
// }

function searchInsertPosition(nums, target){
  let count = 0;
  while(target >= nums[count]){
    console.log('in while loop with ', nums[count]);
    if(target === nums[count]){
      console.log('target = num[count]', nums[count]);
      return count;
    } 
    count++;
  }

  return count;
}

console.log(searchInsertPosition([1,3,5,6], 5));
console.log(searchInsertPosition([1,3,5,6], 2));
console.log(searchInsertPosition([1,3,5,6], 7));
console.log(searchInsertPosition([1,3,5,6], 0));
