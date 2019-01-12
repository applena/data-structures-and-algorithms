'use strict';

const BinaryTree = require('../tree');
const Node = require('../Node');
const BinarySearchTree = require('../BinarySearchTree');

describe('binary search tree', () => {
  describe('add', () => {
    it('requires a value', () => {
      let tree = new BinarySearchTree();
      expect(() => {tree.add();}).toThrow('you must enter a value');
    });

    it('adds a node to the root if no root exits', () => {
      let tree = new BinarySearchTree();
      tree.add(4);
      expect(tree.root.value).toEqual(4);
    });

    it('adds a value to the first available left child that is null', () => {
      let tree = new BinarySearchTree();
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

      tree.add(4);
      let treeArray = tree.preOrder();
      expect(treeArray).toEqual(['a', 'b', 'd', 4, 'e', 'c', 'f']);

    });
  });

  describe('contains', () => {
    it('requires a value', () => {
      let tree = new BinarySearchTree();
      expect(() => {tree.add();}).toThrow('you must enter a value');
    });

    it('returns false if the value does not exist in the tree', () => {
      let tree = new BinarySearchTree();
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

      expect(tree.contains(4)).toBe(false);

    });

    it('returns true if the value exists in the tree', () => {
      let tree = new BinarySearchTree();
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

      expect(tree.contains('f')).toBe(true);

    });
  });
});