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

function searchInsertPosition(nums, target){
  let left = 0;
  let right = nums.length-1;

  const findMiddle = () => {
    return Math.floor((right-left)/2)+left;
  };

  const _findTarget = (middle) => {
    console.log(left, middle, right);
    if(right-left <= 2){
      if(target >= nums[right]){
        if(nums[right] === target){
          return right;
        }
        return right + 1;
      }

      if(target <= nums[left]){
        if(target === nums[left]){
          return left;
        } else if (left === 0){
          return 0;
        } else {
          return left - 1;
        }
      }

      return left+1;

    }
    
    if(target < nums[middle]){
      right = middle;
      let newMiddle = findMiddle();
      return _findTarget(newMiddle);
    } else if(target > nums[middle]){
      left = middle;
      let newMiddle = findMiddle();
      return _findTarget(newMiddle);
    }
    return middle; 
  };

  return _findTarget(findMiddle());
  
}

// function searchInsertPosition(nums, target){
//   let count = 0;
//   while(target >= nums[count]){
//     console.log('in while loop with ', nums[count]);
//     if(target === nums[count]){
//       console.log('target = num[count]', nums[count]);
//       return count;
//     } 
//     count++;
//   }

//   return count;
// }

console.log(searchInsertPosition([1,3,5], 4));
// console.log(searchInsertPosition([1,3,5,6], 2));
// console.log(searchInsertPosition([1,3,5,6], 7));
// console.log(searchInsertPosition([1,3,5,6], 0));
