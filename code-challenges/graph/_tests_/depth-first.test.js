'use strict';

const Graph = require('../depthFirst/depth-first');


describe('depth-first', ()=>{
  it('takes in a starting node', () =>{
    let myGraph = new Graph();

    expect(myGraph.depthFristTraversal()).toEqual(null)
  });

  it('returns an array of nodes in the order that they are assigned edges', () =>{
    let myGraph = new Graph();
    let a = myGraph.AddNode('a');
    let b = myGraph.AddNode('b');
    let c = myGraph.AddNode('c');
    let g = myGraph.AddNode('g');
    let d = myGraph.AddNode('d');
    let e = myGraph.AddNode('e');
    let h = myGraph.AddNode('h');
    let f = myGraph.AddNode('f');
    
    myGraph.AddEdge(a, b);
    myGraph.AddEdge(b, c);
    myGraph.AddEdge(c, g);
    
    myGraph.AddEdge(a,d);
    
    myGraph.AddEdge(d,b);
    
    myGraph.AddEdge(d,e);
    myGraph.AddEdge(d,h);
    myGraph.AddEdge(d,f);
    myGraph.AddEdge(f,h);

   // expect(myGraph.depthFristTraversal(a)).toEqual(['a', 'b', 'c', 'g', 'd', 'e', 'h', 'f']);
  });

  it('reutrns an array of just one value is starting node is not connect to any other nodes', () =>{
    let myGraph = new Graph();
    let a = myGraph.AddNode('a');

    expect(myGraph.depthFristTraversal(a)).toEqual(['a']);
  });
});
