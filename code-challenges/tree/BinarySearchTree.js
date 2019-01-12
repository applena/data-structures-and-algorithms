'use strict';

let Node = require('./Node');

// Create a BinarySearchTree class
// Define a method named add that accepts a value, and adds a new node with that value in the correct location in the binary search tree.
// Define a method named contains that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.

class BinarySearchTree {
  constructor (){
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

  add(value){
    if(!value){ throw 'you must enter a value'; }

    let newNode = new Node(value);

    let _walk = (node) => {
      if(!node){ 
        node = newNode;
        this.root = newNode;
        return;
      }
      if(!node.left){
        node.left = newNode;
        return;
      }
      _walk(node.left);
    };
    _walk(this.root);
  }

  contains(value){
    if(!value){ throw 'you must enter a value'; }

    let truth = false;

    let _walk = (node) => {

      if(node.left){ 
        if(node.left.value === value){ truth = true; }
        _walk(node.left);}

      if(node.right){ 
        if(node.right.value === value){ truth = true; }
        _walk(node.right);}
    };

    _walk(this.root);
    return truth;

  }
}

module.exports = BinarySearchTree;