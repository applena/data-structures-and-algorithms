'use strict';

let Hashtable = require('../hashtable');


module.exports = function leftJoin(hash1, hash2){
  if(arguments.length !== 2){ throw 'you must enter two hashtables';}
  if(!hash1.size){ return null;  }
  let container = [];

  for(let i = 0; i < hash1.size; i++){
    if(hash1.map[i]){
      let current = hash1.map[i].head;
      let bucket = [];
      while(current){
        for(let k in current.value){
          bucket.push(k, current.value[k]);
        }
        current = current.next;

        if(hash2.contains(bucket[0])){
          bucket.push(hash2.find(bucket[0]));
        } else {
          bucket.push(null);
        }

        container.push(bucket);
      }
    }
  }
  return container;
};

// let hash1 = new Hashtable(10);
// hash1.add('nice', 'kind');
// hash1.add('happy', 'joyful');
// hash1.add('sad', 'upseat');

// let hash2 = new Hashtable(10);
// hash2.add('nice', 'mean');
// hash2.add('happy', 'sad');

// console.log(leftJoin(hash1, hash2));