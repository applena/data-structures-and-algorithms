'use strict';

const Graph = require('../graph');

describe('graph', () => {
  describe ('AddNode', () => {
    it('requires a value', ()=> {
      let myGraph = new Graph();
      expect(() => {myGraph.AddNode();}).toThrow('you must enter a vaule');
    });

    it('increments the size when a node is added', ()=> {
      let myGraph = new Graph();
      myGraph.AddNode('a');
      expect(myGraph.Size()).toEqual(1);
    });

    it('adds a node to the graph', ()=> {
      let myGraph = new Graph();
      expect(myGraph.AddNode('a').value).toEqual('a');
    });
  });

  describe ('AddEdge', () => {
    it('requires that the start node and end node are in the graph', ()=> {
      let myGraph = new Graph();
      let a;
      let b;
      expect(() => {myGraph.AddEdge(a, b);}).toThrow('__ERROR__ invalid nodes')
    });

    it('can optionally take in a weight to add to the edge', ()=> {
      let myGraph = new Graph();
      let a = myGraph.AddNode('a');
      let b = myGraph.AddNode('b');
      let c = myGraph.AddNode('c');
      let d = myGraph.AddNode('d');

      let edge = myGraph.AddEdge(a, b, 5);
      expect(edge[0].weight).toEqual(5);
    });

    it('adds an edge between a start and end node', ()=> {
      let myGraph = new Graph();
      let a = myGraph.AddNode('a');
      let b = myGraph.AddNode('b');
      let edge = myGraph.AddEdge(a, b);
      expect(edge[0].node.value).toEqual('b');
    });
  });

  describe ('GetNodes', () => {
    it('returns an array of all the nodes from the graph', ()=> {
      let myGraph = new Graph();
      let a = myGraph.AddNode('a');
      let b = myGraph.AddNode('b');
      expect(myGraph.GetNodes()[0][0].value).toEqual('a');
    });

  });

  describe ('GetNeighbors', () => {
    it('returns all the neighbors of the nodes', ()=> {
      let myGraph = new Graph();
      let a = myGraph.AddNode('a');
      let b = myGraph.AddNode('b');
      myGraph.AddEdge(a, b);
      expect(myGraph.GetNeighbors(a)[0].node.value).toEqual('b');
    });

    it('includes the weight of the edges between neighbors', ()=> {
      let myGraph = new Graph();
      let a = myGraph.AddNode('a');
      let b = myGraph.AddNode('b');
      myGraph.AddEdge(a, b, 10);
      expect(myGraph.GetNeighbors(a)[0].weight).toEqual(10);
    });

  });

  describe ('Size', () => {
    it('returns the number of nodes in the graph', ()=> {
      let myGraph = new Graph();
      let a = myGraph.AddNode('a');
      let b = myGraph.AddNode('b');
      expect(myGraph.Size()).toEqual(2);
    });

    it('returns a graph with only one node and one edge', ()=> {
      let myGraph = new Graph();
      let a = myGraph.AddNode('a');
      myGraph.AddEdge(a, a);
      expect(myGraph.GetNodes()[0][0].value).toEqual('a');
    });

    it('an empty graph returns null', ()=> {
      let myGraph = new Graph();
      expect(myGraph.GetNodes()).toBe(null);
    });
  });
});