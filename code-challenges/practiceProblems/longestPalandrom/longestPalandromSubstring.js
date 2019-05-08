'use strict';

// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"

const longestPalandromSub = (s) => {
  if(s.length === 1){
    return s;
  }

  let resultArr=[];

  let back = s.length;

  for(let i = 0; i<s.length; i++){
    let tempArr = [];
    while (s[i] === s[back]){
      tempArr.push(s[i]);
      i++;
      back--;
    }
    if(tempArr){
      resultArr.push(tempArr);
    }
  }


};