'use strict';

const Hashtable = require('../../hashtables/hashtable');

// Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
// cannot use additional data structures? 

function isUnique(str){
  let myHash = new Hashtable(1072);

  for(let i = 0; i<str.length; i++){
    if(myHash.contains(str[i])){
      console.log('my hash contains', str[i]);
      return false;
    } else {
      myHash.add(str[i], true);
    }
  }
  return true;
}

console.log(isUnique('abcdefghijklmnopqrstuvwxyz1234567890'));