# Graphs

# Author Lena Eivy

## Challenge
The challenge was to make a graph that created new nodes, added edges to connect those nodes, kept track of how many nodes were in the graph, retrieved all of the nodes and retrieved all of the neighbors of any given node.

## Approach & Efficiency
AddNode: creates a node, addes it to the _adjacencyList along with an empty array to store the values of it's edges, and increments the size of the graph. Efficiency is O(1).
AddEdge: creates an edge with an optional weight between a starting node and an ending node. Efficiency is O(1)
GetNodes: returns an array of all the nodes. Efficiency is O(n).
GetNeighbors: returns all of the neighbors of a given node. Efficiency is O(n)
Size: returns the number of nodes in the graph. Efficiency is O(1)

## API
AddNode: adds a node to the graph
AddEdge: adds an edge between two nodes
GetNodes: returns an array of all the nodes
GetNeighbors: return an array of all the neighbors of a given node
Size: returns the number of nodes that exist in the Graph