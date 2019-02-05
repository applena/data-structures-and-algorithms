'use strict';

const Tree = require('../Tree');
const Node = require('../Node');
const treeIntersection = require('../treeIntersection/tree-intersection');

describe('tree intersection', () => {
  it('returns null if either tree or both are empty', () => {
    let tree1 = new Tree;
    let tree2 = new Tree;
    expect(treeIntersection(tree1, tree2)).toEqual(null);
  });

  it('returns null if the trees do not contain a shared value', () => {
    let tree1 = new Tree();
    let a = new Node('bird');
    let b = new Node('parrot');
    let c = new Node('cheetah');
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

    expect(treeIntersection(tree1, tree2)).toEqual(null);
  });

  it('requires two trees as parameters', () => {
    let tree1 = new Tree();
    expect(() => {treeIntersection(tree1);}).toThrow('you must enter two trees');
  });

  it('returns an array of repeated values', () => {
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

    expect(treeIntersection(tree1, tree2)).toEqual(['cat', 'pig', 'dog']);
  });
});