

// Instantiate a new graph
var Graph = function() {
  this.vertices = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // push node into this.vertices
  this.vertices.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // return this.vertices.includes(node);
  return this.vertices.includes(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // remove the node
  // if this.verticese[0] is node
    // unshift(this.vertices)
  // iterate through this.verticese
    // check if current item is node
      // assign this.verticese[0] to current item
      // unshift(this.vertices)
  // remove the edges
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var found = false;
  // iterate this.edges
  this.edges.forEach(function (item) {
    // check each item contains fromNode && toNode
      // return true

    if (item.includes(fromNode) && item.includes(toNode)) {
      found = true;
    }
  });
  // return false
  return found;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // push [fromNode, toNode] to this.edges
  this.edges.push([fromNode, toNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // check if this.edges at index zero contains fromNode and toNode
  if (this.edges[0].includes(fromNode) && this.edges[0].includes(toNode)) {
    // shift this.edges
    this.edges.shift();
    // return;
    return;
  }
  // iterate this.edges
  this.edges.forEach(function (item) {
    // check if current item contains fromNode and toNode
    if (item.includes(fromNode) && item.includes(toNode)) {
      // reassign current item to this.edges at index zero
      item = this.edges[0];
      // shift this.edges
      this.edges.shift();
    }
  });
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// target is [6, 3]
// [[3, 4], [1, 2], [7, 1]]