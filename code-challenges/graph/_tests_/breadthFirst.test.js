'use strict';

const Graph = require('../breadthFirst/breadth-first');

describe('breadthFrist', () => {
  it('requires a starting node', () => {
    let myGraph = new Graph();
    expect(myGraph.breadthFristTraversal()).toBe(null);
  });

  it('will not include any islands', () => {
    let myGraph = new Graph();
    let a = myGraph.AddNode('a');
    let b = myGraph.AddNode('b');
    let c = myGraph.AddNode('c');
    let d = myGraph.AddNode('d');
    
    myGraph.AddEdge(a, b);
    myGraph.AddEdge(b,c);

    let traversal = myGraph.breadthFristTraversal(a);

    expect(JSON.stringify(traversal)).toEqual('[{"value":"a","visited":true},{"value":"b"},{"value":"c"}]');
  });

  it('returns an array of the the nodes visited', () => {
    let myGraph = new Graph();
    let a = myGraph.AddNode('a');
    let b = myGraph.AddNode('b');
    let c = myGraph.AddNode('c');
    let d = myGraph.AddNode('d');
    
    myGraph.AddEdge(a, b);
    myGraph.AddEdge(b,c);
    myGraph.AddEdge(c, d);
    myGraph.AddEdge(d, a);

    let traversal = myGraph.breadthFristTraversal(a);
    expect(JSON.stringify(traversal)).toEqual('[{"value":"a","visited":true},{"value":"b"},{"value":"c"},{"value":"d"}]');
  });
});