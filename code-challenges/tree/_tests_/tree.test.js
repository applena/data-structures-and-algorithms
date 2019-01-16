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
    it('returns an array of every value in the tree', () => {
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

      expect(tree.breadthFirst()[5]).toEqual('f');
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

  describe('findMaximumValue', () => {
    it('returns null if the tree is empty', () => {
      let tree = new BinaryTree();
      expect(tree.findMaximumValue()).toEqual(null);
    });

    it('return null if the value of the root is not a number', () => {
      let tree = new BinaryTree();
      let a = new Node('a');
      tree.root = a;
      expect(tree.findMaximumValue()).toEqual(null);
    });

    it('returns the value of the highest value node on the tree', () => {
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

      expect(tree.findMaximumValue()).toEqual(23);
    });
  });
});