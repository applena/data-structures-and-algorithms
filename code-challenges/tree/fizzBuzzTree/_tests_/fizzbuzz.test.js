'use strict';

const fizzBuzzTree = require('../fizz-buzz-tree');
const Tree = require('../../tree');
const Node = require('../../Node');

describe('fizzbuzz tree', () => {
  it ('requires a tree as an argument', () => {
    expect(() => {fizzBuzzTree();}).toThrow('you must enter a tree');
  });

  it('turns a value that is divisible by 3 into "fizz"', () => {
    let tree = new Tree();
    let a = new Node(20);
    let b = new Node(15);
    let c = new Node(5);
    let d = new Node(3);
    let e = new Node(1);
    let f = new Node(10);

    a.left = b;
    a.right = c;
    c.left = f;
    b.left = d;
    b.right = e;
    tree.root = a;

    let result = fizzBuzzTree(tree);
    expect (result[2]).toEqual('Fizz');
  });

  it('turns a value that is divisible by 5 into "buzz"', () => {
    let tree = new Tree();
    let a = new Node(20);
    let b = new Node(15);
    let c = new Node(5);
    let d = new Node(3);
    let e = new Node(1);
    let f = new Node(10);

    a.left = b;
    a.right = c;
    c.left = f;
    b.left = d;
    b.right = e;
    tree.root = a;

    let result = fizzBuzzTree(tree);
    expect (result[0]).toEqual('Buzz');
  });

  it('turns a value that is divisible by 3 and 5 into "FizzBuzz"', () => {
    let tree = new Tree();
    let a = new Node(20);
    let b = new Node(15);
    let c = new Node(5);
    let d = new Node(3);
    let e = new Node(1);
    let f = new Node(10);

    a.left = b;
    a.right = c;
    c.left = f;
    b.left = d;
    b.right = e;
    tree.root = a;

    let result = fizzBuzzTree(tree);
    expect (result[1]).toEqual('FizzBuzz');
  });
});