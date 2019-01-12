'use strict';

let Node = require('./Node');

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