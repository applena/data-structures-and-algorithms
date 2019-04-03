'use strict';

// Check Permutation: Given two strings, write a method to decide if one is a permutation of the
// other. 

function checkPermutation(str1, str2){
  let str1Arr = str1.split('');
  for(let i = 0; i < str2.length; i++){
    if(str1Arr.includes(str2[i])){
      let newArr = [];
      str1Arr.filter(letter => {
        if(str2[i] !== letter){
          newArr.push(letter);
        }
      });
    }
  }
}

checkPermutation('hello', 'hi');