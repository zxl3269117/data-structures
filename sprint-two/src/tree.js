var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  newTree.children = [];
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var node = Tree(value);
  this.children.push(node);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }

  var childrenArr = this.children;
  var foundTarget = false;

  var search = function(children) {
    children.forEach(function(item) {
      if (item.value === target) {
        foundTarget = true;
        return foundTarget;
      }
      if (item.children.length) {
        search(item.children);
      }
    });
    return foundTarget;
  };

  search(childrenArr);
  return foundTarget;
};



/*
 * Complexity: What is the time complexity of the above functions?
addChild - O(1)
contains - O(n^2)
 */

// var newTree = {
  // value: 1,
  // children: [{
    // value: 2,
    // children: [{
      // value: 3,
      // children: []
    //}]
  //}]
//}

