'use strict';

const Hashtable = require('../hashtable');
const Tree = require('../Tree');
const Node = require('../Node');

function tree_intersection(tree1, tree2){
  if(arguments.length !== 2){ throw 'you must enter two trees'; }
  if(!tree1.root || !tree2.root){ return null; }

  let myHash = new Hashtable(1072);
  let resultArr = [];

  const _walk = (node) => {
    myHash.add(node.value, 0);
    if(node.left){_walk(node.left); }
    if(node.right){_walk(node.right); }
  };

  _walk(tree1.root);

  const _walkAgain = (node) => {
    if (myHash.contains(node.value)){
      resultArr.push(node.value); 
    }

    if(node.left){_walkAgain(node.left); }
    if(node.right){_walkAgain(node.right); }
  };

  _walkAgain(tree2.root);
  
  if(!resultArr.length){ return null; }
  return resultArr;
}

let tree1 = new Tree();
let a = new Node('cat');
let b = new Node('dog');
let c = new Node('pig');
let d = new Node('elephant');
let e = new Node('bear');
let f = new Node('tiger');

a.left = b;
a.right = c;
c.left = f;
b.left = d;
b.right = e;
tree1.root = a;

let tree2 = new Tree();
let g = new Node('cat');
let h = new Node('pig');
let i = new Node('lion');
let j = new Node('dog');
let k = new Node('snake');
let l = new Node('cub');

g.left = h;
g.right = i;
i.left = l;
h.left = j;
h.right = k;
tree2.root = g;

console.log(tree_intersection(tree1, tree2));

module.exports = tree_intersection;