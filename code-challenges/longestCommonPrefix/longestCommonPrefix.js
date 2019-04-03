// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string ''.

// Example 1:

// Input: ['flower','flow','flight']
// Output: 'fl'
// Example 2:

// Input: ['dog','racecar','car']
// Output: ''
// Explanation: There is no common prefix among the input strings.
// Note:

// All given inputs are in lowercase letters a-z.

function longestCommonPrefix(strs){
  if(!strs.length){ return ''; }
  let prefix = strs[0];

  strs.forEach((str) => {
    if(str.length === 0 ){ prefix = ''; }
    for(let i = 0; i < str.length; i++) {
      prefix = prefix.substring(0, str.length);
      if(str[i] !== prefix[i]){
        prefix = prefix.substring(0, i);
      }
    }
  });
  
  if (prefix.length === undefined){ 
    return ''; 
  } else {
    return prefix;
  }
}

console.log(longestCommonPrefix(['abab','aba','']));