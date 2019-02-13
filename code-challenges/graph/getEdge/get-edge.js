'use strict';

const Graph = require('../graph');

function flightPlan(graph, cityArr){
  if(arguments.length !== 2){return 'input error'}

  console.log('finding path for trip:', cityArr)
  let nodesArr = graph.GetNodes(); // full node info

  let totalWeight = 0;
  let currentCityNode;
  let currentCityIndex = 0;
  let currentCityName = cityArr[currentCityIndex];
  console.log('departure city:', currentCityName);
  while(currentCityName!==cityArr[cityArr.length-1]){
    // find the node for the current City (currentCityNode)
    for(let i=0; i<nodesArr.length; i++) {
      if(nodesArr[i][0].value=== currentCityName){
        currentCityNode = nodesArr[i][0]
      }
    }
    // find the adjacency node and weight to that node for the next city
    let connections = graph.GetNeighbors(currentCityNode);
    // console.log(currentCityName, connections)
    let nextCityName = cityArr[currentCityIndex+1]
    console.log('traveling to: ', nextCityName)
    let nextCityNode;
    for(let i=0;i<connections.length;i++){
      if(connections[i].node.value===nextCityName){
        console.log('found path to next city for $' +connections[i].weight);
        nextCityNode = connections[i].node
        totalWeight += connections[i].weight
      }
    }
    if(!nextCityNode){ // didn't find one (can't make this trip)
      return `False, $0`
    }
    currentCityName = nextCityName;
    currentCityIndex++;
    currentCityNode = nextCityNode;
  }
  console.log('trip complete: ', `$${totalWeight}`);
  return `True, $${totalWeight}`;
}

module.exports = flightPlan;

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

// True, $82
console.log(flightPlan(myGraph, ['metroville', 'pandora']));
// True, $115
console.log(flightPlan(myGraph, ['arendelle', 'monstropolis', 'naboo']));
// False, $0
console.log(flightPlan(myGraph, ['naboo', 'pandora']));
// False, $0
console.log(flightPlan(myGraph, ['narnia', 'arendelle', 'pandora']));