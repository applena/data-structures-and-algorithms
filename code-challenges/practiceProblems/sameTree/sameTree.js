'use strict';

// Given two binary trees, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  let pArr = [];
  let qArr = [];

  const _walkTree = (node, arr) => {
    if(node.left){ 
      arr.push(node.val);
      _walkTree(node.left, arr);
    }
    if(node.right){ 
      arr.push(node.val);
      _walkTree(node.right, arr); 
    }
  };

  _walkTree(p, pArr);
  _walkTree(q, qArr);

  for(let i = 0; i<pArr.length; i++){
    for(let j=0; j<qArr.length; j++){
      if(pArr[i] !== qArr[j]){ 
        return false; 
      } 
    }
  }

  return true; 
};