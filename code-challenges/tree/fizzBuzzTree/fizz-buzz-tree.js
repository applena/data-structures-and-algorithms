'use strict';

const Tree = require('../tree');
const Node = require('../Node');

function fizzBuzzTree(tree){
  if(!tree){ throw 'you must enter a tree';}

  let _walk = (node) => {
    if(node.value % 3 === 0 && node.value % 5 === 0){
      node.value = 'FizzBuzz';
    }else if(node.value % 3 === 0){
      node.value = 'Fizz';
    } else if(node.value % 5 === 0){
      node.value = 'Buzz';
    }

    if(node.left){
      _walk(node.left);
    }

    if(node.right){ 
      _walk(node.right);
    }
  };

  _walk(tree.root);
  return tree.preOrder();

}

module.exports = fizzBuzzTree;

// let tree = new Tree();
// let a = new Node(20);
// let b = new Node(15);
// let c = new Node(5);
// let d = new Node(3);
// let e = new Node(1);
// let f = new Node(10);

// a.left = b;
// a.right = c;
// c.left = f;
// b.left = d;
// b.right = e;
// tree.root = a;

// console.log(fizzBuzzTree(tree));