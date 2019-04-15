'use strict';

// given two strings, write a function to determine if the second string is an anagram of th efrist. An anagram is a word, phrase, or name formed by rearraanging the letters of another, such as cinema, formed from iceman.

// validAnagram('', '') true
// validAnagram('aaz', 'zza') false
// validAnagram('anagram', 'nagaram') true
// validAnagram('rat', 'car') false
// ('awesome', 'awesom') false
// ('gwerty', 'qeywrt') true
// ('texttwisttime', 'timewisttext') true

function validAnagram(str1, str2){
  let frequency1 = {};
  let frequency2 = {};

  str1.split('').forEach(letter => {
    frequency1[letter] = frequency1[letter] ? frequency1[letter] + 1 : 1;
  });

  str2.split('').forEach(letter => {
    frequency2[letter] = frequency2[letter] ? frequency2[letter] + 1 : 1;
  });

  // console.log(frequency1, frequency2);

  for(let key in frequency1){
    // console.log(key, frequency2[key]);
    if(!(key in frequency2)){
      return false;
    }
    if(frequency1[key] !== frequency2[key]){
      return false;
    }
  }
  return true;
}

console.log(validAnagram('anagram', 'nagaram'), 'true');
console.log(validAnagram('', ''), 'true'); // true
console.log(validAnagram('aaz', 'zza'), 'false'); // false
// validAnagram('anagram', 'nagaram') true
// validAnagram('rat', 'car') false
// ('awesome', 'awesom') false
// ('gwerty', 'qeywrt') true
// ('texttwisttime', 'timewisttext') true)