'use strict';

const BinaryTree = require('../tree');
const Node = require('../Node');

describe('tree', () => {
  describe('preOrder', () => {
    it('returns an array of nodes in preOrder', () => {
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
      
      expect(tree.preOrder()).toEqual(['a', 'b', 'd', 'e', 'c', 'f']);
    });

    //happy path
    it('traverses the tree left first', () => {
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
      
      let result = tree.preOrder();
      expect(result[1]).toEqual('b');
    });

    it('throws an error if the tree is empty', () => {
      let tree = new BinaryTree();
      expect(() => {tree.preOrder(this.root);}).toThrow('this tree is empty');
    });
  });

  describe('inOrder', () => {
    it('returns an array of nodes inOrder', () => {
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
      
      expect(tree.inOrder()).toEqual(['d', 'b', 'e', 'a', 'f', 'c']);
    });

    //happy path
    it('traverses the tree in order', () => {
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
      
      let result = tree.inOrder();
      expect(result[1]).toEqual('b');
    });

    it('throws an error if the tree is empty', () => {
      let tree = new BinaryTree();
      expect(() => {tree.preOrder(this.root);}).toThrow('this tree is empty');
    });
  });

  describe('postOrder', () => {
    it('returns an array of nodes in postOrder', () => {
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
      
      expect(tree.postOrder()).toEqual(['d', 'e', 'b', 'f', 'c', 'a']);
    });

    //happy path
    it('traverses the tree right first', () => {
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
      
      let result = tree.postOrder();
      expect(result[1]).toEqual('e');
    });

    it('throws an error if the tree is empty', () => {
      let tree = new BinaryTree();
      expect(() => {tree.preOrder(this.root);}).toThrow('this tree is empty');
    });
  });

  describe('breadthFirst', () => {
    it('', () => {

    });

    it('returns an array of values', () => {
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

      expect(tree.breadthFirst()).toEqual(['a', 'b', 'c', 'd', 'e', 'f']);
    });

    it('returns an array of values from the top down', () => {
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

      expect(tree.breadthFirst()[0]).toEqual('a');
    });
  });
});