var BinarySearchTree = function(value) {
  var node = {};
  node._left = null;
  node._right = null;
  node._value = value;

  // accept a value and place it in the correct position in the tree
  node.insert = function(value) {
    var checkNode = function(node) {
      if (node._value > value) {
        if (!node._left) {
          node._left = BinarySearchTree(value);
        } else {
          checkNode(node._left);
        }
      } else if (node._value < value) {
        if (!node._right) {
          node._right = BinarySearchTree(value);
        } else {
          checkNode(node._right);
        }
      }
    };
    checkNode(node);
  };

  // accepts a value and find if the value is contained in the tree
  node.contains = function(value) {
    var traverseNode = function(node) {

      if (!node) {
        return false;
      } else if (node._value === value) {
        return true;
      } else if (value > node._value) {
        return traverseNode(node._right);
      } else if (value < node._value) {
        return traverseNode(node._left);
      } else {
        return false;
      }
    };
    return traverseNode(node);
  };

  // accepts a callback and executes it on every value contained in the tree.
  node.depthFirstLog = function(cb) {
    var changeNode = function(node) {
      if (node) {
        cb(node._value);
        if (node._left) {
          changeNode(node._left);
        }
        if (node._right) {
          changeNode(node._right);
        }
      }
    };
    changeNode(node);
  };

  return node;
};


/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(log)
 * contains: O(log)
 * depthFirstLog: O(n^2)
 */
