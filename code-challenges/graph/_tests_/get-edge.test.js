'use strict';

const flightPlan = require('../getEdge/get-edge');
const Graph = require('../graph');

describe('get-edge', ()=> {
  it('requires two arguments - a graph and an array of cities', () => {
    expect(flightPlan()).toEqual('input error');
  });

  it('returns false and $0 if there is no direct path between two cities', () => {
    let myGraph = new Graph();
    let pandora = myGraph.AddNode('pandora');
    let metroville = myGraph.AddNode('metroville');
    let narnia = myGraph.AddNode('narnia');
    let naboo = myGraph.AddNode('naboo');
    let arendelle = myGraph.AddNode('arendelle');
    let monstropolis = myGraph.AddNode('monstropolis');

    myGraph.AddEdge(pandora, metroville, 82);
    myGraph.AddEdge(pandora, arendelle, 150);
    myGraph.AddEdge(narnia, metroville, 37);
    myGraph.AddEdge(metroville, naboo, 26);
    myGraph.AddEdge(metroville, arendelle, 99);
    myGraph.AddEdge(metroville, monstropolis, 105);
    myGraph.AddEdge(arendelle, monstropolis, 42);
    myGraph.AddEdge(naboo, monstropolis, 73);

    expect(flightPlan(myGraph, ['naboo', 'pandora'])).toEqual('False, $0');
    expect(flightPlan(myGraph, ['narnia', 'arendelle', 'pandora'])).toEqual('False, $0');

  });

  it('returns true and the cost of a flight if you can fly to all the ciites in the array', () => {
    let myGraph = new Graph();
    let pandora = myGraph.AddNode('pandora');
    let metroville = myGraph.AddNode('metroville');
    let narnia = myGraph.AddNode('narnia');
    let naboo = myGraph.AddNode('naboo');
    let arendelle = myGraph.AddNode('arendelle');
    let monstropolis = myGraph.AddNode('monstropolis');

    myGraph.AddEdge(pandora, metroville, 82);
    myGraph.AddEdge(pandora, arendelle, 150);
    myGraph.AddEdge(narnia, metroville, 37);
    myGraph.AddEdge(metroville, naboo, 26);
    myGraph.AddEdge(metroville, arendelle, 99);
    myGraph.AddEdge(metroville, monstropolis, 105);
    myGraph.AddEdge(arendelle, monstropolis, 42);
    myGraph.AddEdge(naboo, monstropolis, 73);

    expect(flightPlan(myGraph, ['metroville', 'pandora'])).toEqual('True, $82');
    expect(flightPlan(myGraph, ['arendelle', 'monstropolis', 'naboo'])).toEqual('True, $115');
  });
});


let myGraph = new Graph();
let pandora = myGraph.AddNode('pandora');
let metroville = myGraph.AddNode('metroville');
let narnia = myGraph.AddNode('narnia');
let naboo = myGraph.AddNode('naboo');
let arendelle = myGraph.AddNode('arendelle');
let monstropolis = myGraph.AddNode('monstropolis');


myGraph.AddEdge(pandora, metroville, 82);
myGraph.AddEdge(pandora, arendelle, 150);
myGraph.AddEdge(narnia, metroville, 37);
myGraph.AddEdge(metroville, naboo, 26);
myGraph.AddEdge(metroville, arendelle, 99);
myGraph.AddEdge(metroville, monstropolis, 105);
myGraph.AddEdge(arendelle, monstropolis, 42);
myGraph.AddEdge(naboo, monstropolis, 73);

// // True, $82
// console.log(flightPlan(myGraph, ['metroville', 'pandora']));
// // True, $115
// console.log(flightPlan(myGraph, ['arendelle', 'monstropolis', 'naboo']));
// // False, $0
// console.log(flightPlan(myGraph, ['naboo', 'pandora']));
// // False, $0
// console.log(flightPlan(myGraph, ['narnia', 'arendelle', 'pandora']));