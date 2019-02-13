'use strict';

class Node{
  constructor(value){
    this.value=value;
  }
}

class Graph{
  constructor(){
    this._adjacencyList = new Map();
    this.size = 0;
  }


  AddNode(value){
    if(!value){ throw 'you must enter a vaule'; }
    
    let node = new Node(value);
    this._adjacencyList.set(node, []);
    this.size++;
    return node;
  }
  
  AddEdge(startNode, endNode, weight=0){
    if(!this._adjacencyList.has(startNode) ||
        !this._adjacencyList.has(endNode))
      throw new Error('__ERROR__ invalid nodes');
    
    let adjacencies = this._adjacencyList.get(startNode);

    adjacencies.push({
      node:endNode,
      weight,
    });
    
    return adjacencies;
  }
  

  GetNodes(){
    if(!this.size){ return null; }
    let itierator = this._adjacencyList.entries();  
    let result = itierator.next();

    let arr = [];
    while (!result.done) {
      arr.push(result); 
      result = itierator.next();
    }
    return arr;
  }

  GetNeighbors(node){
    if(!this._adjacencyList.has(node))
      throw new Error('__ERROR__ invalid node');
    
    return [...this._adjacencyList.get(node)];
  }

  Size(){
    return this.size;
  }
}

module.exports = Graph; 

let myGraph = new Graph();
let a = myGraph.AddNode('a');
let b = myGraph.AddNode('b');
let c = myGraph.AddNode('c');
let d = myGraph.AddNode('d');

myGraph.AddEdge(a, b);
myGraph.AddEdge(b,c);
myGraph.AddEdge(c, d);
myGraph.AddEdge(d, a);

//console.log(myGraph.GetNodes());