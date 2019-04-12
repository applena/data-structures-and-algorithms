'use strict';

///////////////UNSOLVED////////////////////////

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Follow up:

// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

let finalArr = [];
let total;

function maximumSubarray(nums){
  if(!nums.length){return;}
  let tempTotal;

  for(let i=0; i<nums.length; i++){
    console.log('entering the for loop with ', nums[i]);
    if (typeof total !== 'number'){ 
      total=nums[i]; 
    }

    if (typeof tempTotal !=='number') { 
      tempTotal = nums[i]; 
    } else { 
      tempTotal += nums[i];
    }

    if(tempTotal > total){
      console.log('in the if with tempTotal: ', tempTotal);
      total = tempTotal;
      console.log('setting finalArr as ', finalArr);
      finalArr = nums.slice(0, i);
    }
  }

  let newNums = nums.slice(1, nums.length);
  maximumSubarray(newNums);
}

maximumSubarray([-2,1,-3]);
console.log(finalArr);