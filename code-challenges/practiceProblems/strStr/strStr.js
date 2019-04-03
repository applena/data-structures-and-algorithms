'use strit';

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

function strStr(haystack, needle){
  if(needle === ''){ return 0; }
  let count = 0;
  for(let i = 0; i<haystack.length; i++){
    if(haystack.length >= needle){
      if( haystack[i] === needle[0]){
        while(count<=needle.length){
          if(needle[count] !== haystack[i+count]){
            break;
          }
          if(!haystack[i+count] && needle[count]){
            return -1;
          }
          count++;
        }
        return i;
      }
    }
  }
  return -1;
}


console.log(strStr('hello', 'll'));
console.log(strStr('aaaaa', 'bba'));
console.log(strStr('bababa', ''));
console.log(strStr('a', 'a'));