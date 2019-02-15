'use strict';

const LinkedList = require('./linkedList');

module.exports = class HashMap{
  constructor(size){
    this.size = size;
    this.map = new Array(size);
  }

  // returns an index after hashing for the key value pair
  getHash(key){
    if(!key){throw 'please enter a key';}

    //turns ints into strings
    let stringKey = key+'';

    return stringKey.split('').reduce((startingValue, value) => {
      return startingValue + value.charCodeAt(0);
    }, 0) % this.size;
  }

  // add a key value pair
  add(key, value=0){
    let index = this.getHash(key);

    let list = this.map[index] || new LinkedList();
    this.map[index]=list;
    
    list.insert({[key]:value});
  
  }

  //returns the value of the given key
  find(key){
    if(!key){throw 'please enter a key';}
    let index = this.getHash(key);

    let list = this.map[index];

    if(!list){
      return null;
    }
    let current = list.head;


    while(current){
      if(current.value[key]){
        return current.value[key];
      }
      current = current.next;
    }

    return null;
  
  }

  //returns true or false if the key exists
  contains(key){
    if(!key){throw 'please enter a key';}
    let index = this.getHash(key);
    let list = this.map[index];

    if(!list){
      return false;
    }

    let current = list.head;

    while(current){
      if(current.value.hasOwnProperty(key)){
        return true;
      }
      current = current.next;
    }

    return false;
  }
};
// let myHash = new HashMap(6);
// //myHash.add('John', 'dad');
// myHash.add('Cathy', 'mom');
// //myHash.add('Zach', 'boy');
// myHash.add('Allie', 'girl');

// myHash.find('Cathy');


//console.log(myHash.add('lena'));

//console.log( util.inspect(myHash, {showHidden:false, depth:20}));
//console.log(myHash.add('Lena','Mom'));