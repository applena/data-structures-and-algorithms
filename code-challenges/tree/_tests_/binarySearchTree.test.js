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

      tree.add(100);
      tree.add(50);
      tree.add(200);
      tree.add(25);
      tree.add(75);
      tree.add(150);
      tree.add(300);
      tree.add(60);
      tree.add(90);
      tree.add(342);

      let treeArray = tree.preOrder();
      expect(treeArray).toEqual([100, 50, 25, 75, 60, 90, 200, 150, 300, 342]);

    });
  });

  describe('contains', () => {
    it('requires a value', () => {
      let tree = new BinarySearchTree();
      expect(() => {tree.add();}).toThrow('you must enter a value');
    });

    it('returns false if the value does not exist in the tree', () => {
      let tree = new BinarySearchTree();

      tree.add(100);
      tree.add(50);
      tree.add(200);
      tree.add(25);
      tree.add(75);
      tree.add(150);
      tree.add(300);
      tree.add(60);
      tree.add(90);
      tree.add(342);

      expect(tree.contains(4)).toBe(false);

    });

    it('returns true if the value exists in the tree', () => {
      let tree = new BinarySearchTree();

      tree.add(100);
      tree.add(50);
      tree.add(200);
      tree.add(25);
      tree.add(75);
      tree.add(150);
      tree.add(300);
      tree.add(60);
      tree.add(90);
      tree.add(342);

      expect(tree.contains(50)).toBe(true);

    });
  });
});