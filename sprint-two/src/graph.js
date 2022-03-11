// Instantiate a new graph
var Graph = function() {
  this.vertices = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.vertices.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.vertices.includes(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.vertices[0] === node) {
    this.vertices.shift();
  }
  for (var i = 0; i < this.vertices.length; i ++) {
    if (this.vertices[i] === node) {
      this.vertices[i] = this.vertices[0];
      this.vertices.shift();
    }
  }

  if (this.hasEdge(node, node)) {
    this.removeEdge(node, node);
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var found = false;
  this.edges.forEach(function (item) {
    if (item.includes(fromNode) && item.includes(toNode)) {
      found = true;
    }
  });
  return found;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges.push([fromNode, toNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.edges[0].includes(fromNode) && this.edges[0].includes(toNode)) {
    this.edges.shift();
  }
  for (var i = 0; i < this.edges.length; i++) {
    if (this.edges[i].includes(fromNode) && this.edges[i].includes(toNode)) {
      this.edges[i] = this.edges[0];
      this.edges.shift();
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.vertices.forEach(function(item) {
    cb(item);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// addNote: O(1)
// contains: O(n)
// removeNode: O(n)
// hasEdges: O(n)
// addEdges: O(1)
// removeEdges: O(n)
// forEachNode: O(n)

// target is [6, 3]
// edges = [[1, 2], [3, 4], [6, 3], [7, 1]]