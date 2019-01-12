'use strict';

let Node = require('./Node');

class BinaryTree {
  constructor () {
    this.root = null;
  }

  preOrder(){

    let nodes = [];

    let _walk = (node) => {
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
      if(node.left){ _walk(node.left);}
      nodes.push(node.value);
      if(node.right){ _walk(node.right);}
    };

    return nodes;
  }

  postOrder(){

    let nodes = [];

    let _walk = (node) => {
      if(node.left){ _walk(node.left);}
      if(node.right){ _walk(node.right);}
      nodes.push(node.value);
    };

    return nodes;

  }
}

let tree = new BinaryTree();
let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');
let f = new Node('f');

a.left = b;
a.right = c;
c.left = f;
b.left = d;
b.right = e;
tree.root = a;

module.exports = BinaryTree;

// Features
// Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
// Create a BinaryTree class
// Define a method for each of the depth first traversals called preOrder, inOrder, and postOrder which returns an array of the values, ordered appropriately.
// At no time should an exception or stack trace be shown to the end user. Catch and handle any such exceptions and return a printed value or operation which cleanly represents the state and either stops execution cleanly, or provides the user with clear direction and output.

// Create a BinarySearchTree class
// Define a method named add that accepts a value, and adds a new node with that value in the correct location in the binary search tree.
// Define a method named contains that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.

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