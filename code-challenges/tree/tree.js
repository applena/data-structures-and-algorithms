'use strict';

let Queue = require('./queue');

class BinaryTree {
  constructor () {
    this.root = null;
  }

  preOrder(){

    let nodes = [];

    let _walk = (node) => {
      if(!this.root){ throw 'this tree is empty'; }
      nodes.push(node.value);
      if(node.left){ _walk(node.left);}
      if(node.right){ _walk(node.right);}
    };

    _walk(this.root);
    return nodes;

  }

  inOrder(){

    let nodes = [];

    let _walk = (node) => {
      if(!this.root){ throw 'this tree is empty'; }
      if(node.left){ _walk(node.left);}
      nodes.push(node.value);
      if(node.right){ _walk(node.right);}
    };

    _walk(this.root);
    return nodes;
  }

  postOrder(){

    let nodes = [];

    let _walk = (node) => {
      if(!this.root){ throw 'this tree is empty'; }
      if(node.left){ _walk(node.left);}
      if(node.right){ _walk(node.right);}
      nodes.push(node.value);
    };

    _walk(this.root);
    return nodes;

  }

  breadthFirst(){

    let nodes = [];
    let breadth = new Queue();

    breadth.enqueue(this.root);
    while(breadth.peek()){
      nodes.push(breadth.front.value);

      if(breadth.front.left){
        breadth.enqueue(breadth.front.left);
      }

      if(breadth.front.right){
        breadth.enqueue(breadth.front.right);
      }

      breadth.dequeue(breadth.front);
    }

    return nodes;
  }

  findMaximumValue(){
    if(!this.root){ return null; }
    if(typeof this.root.value !== 'number'){ return null;}
    let temp=this.root.value;
    let _walk = (node) => {
      if(node.value > temp){
        temp = node.value;
      }

      if(node.left){_walk(node.left);}
      if(node.right){_walk(node.right);}

    };
    _walk(this.root);
    return temp;
  }

}

let Node = require('./Node');
let tree = new BinaryTree();
let a = new Node(4);
let b = new Node(5);
let c = new Node(23);
let d = new Node(2);
let e = new Node(6);
let f = new Node(9);

a.left = b;
a.right = c;
c.left = f;
b.left = d;
b.right = e;
tree.root = a;

console.log(tree.findMaximumValue());
module.exports = BinaryTree;

//node: node
//edget: link between nodes
//  * leftChild
//  * rightChild
//root: top
//leaf: no children
//height: max # of edges from root to leaf
//depth: # of edges from node to edges
//balanced: if # of edges on one side are within one of the # of edges on the other side
//complete tree: every node has exactly two children

// Write a function called find-maximum-value which takes binary tree as its only input. Without utilizing any of the built-in methods available to your language, return the maximum value stored in the tree. You can assume that the values stored in the Binary Tree will be numeric.