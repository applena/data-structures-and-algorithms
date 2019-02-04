'use strict';

let Hashtable = require('../hashtable');

function repeatedWord(str){
  let strLower = str.toLowerCase();
  let strArr = strLower.match(/[a-z'’]+/gi);

  let repeatHash = new Hashtable(1072);

  for(let i = 0; i<strArr.length; i++){
    if(repeatHash.contains(strArr[i])){
      return strArr[i];
    } else {
      repeatHash.add(strArr[i], 'undefined');
    }
  }
  return null;
}

module.exports = repeatedWord;

//console.log(repeatedWord('It was a queer, sultry Summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...'));
//repeatedWord('It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...');