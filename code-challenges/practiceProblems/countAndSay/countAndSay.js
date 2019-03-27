'use strict';

// The count-and-say sequence is the sequence of integers with the first five terms as following:

// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.

// Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence.

// Note: Each term of the sequence of integers will be represented as a string.

// pattern: 1, 11, 21, 1211, 111221, 312211, 13112221

// Example 1:

// Input: 1
// Output: "1"
// Example 2:

// Input: 4
// Output: "1211"

function countAndSay(n){
  let resultArr = ['1'];
  let x=0;
  
  while(x <= n){
    let newTerm = [];
    let i = 0;
    while(i <= n){
      let count = 0;
      newTerm=[];

      while(resultArr[i][count] === resultArr[i][count+1]){
        //console.log('in the while with ', resultArr[i][count]);
        count++;
      }

      newTerm.push(count+1+'');
      newTerm.push(resultArr[i][0]);
      resultArr.push((newTerm.join('')));
      i = i+count+1;
      console.log('i = ', i, 'results Arr ', resultArr);
    }
    console.log('x = ', x);
    x++;
  }
  return (resultArr[n]);
  // let resultArr = [];
  // for(let i = 0; i < n.length; i++){
  //   let count = 0;
  //   while(n[i+count] === n[i+count+1]){
  //     count++;
  //   }
  //   resultArr.push(count);
  //   resultArr.push(n[i]);
  // }
  // return resultArr;
}

console.log(countAndSay(2));