var BinarySearchTree = function(value) {
  var node = {};
  node.left = null;
  node.right = null;
  node.value = value;

  // accept a value and place it in the correct position in the tree
  node.insert = function(value) {
    var checkNode = function(node) {
      if (node.value > value) {
        if (!node.left) {
          node.left = BinarySearchTree(value);
        } else {
          checkNode(node.left);
        }
      } else if (node.value < value) {
        if (!node.right) {
          node.right = BinarySearchTree(value);
        } else {
          checkNode(node.right);
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
      }
      if (node.value === value) {
        return true;
      }
      if (value > node.value) {
        return traverseNode(node.right);
      }
      if (value < node.value) {
        return traverseNode(node.left);
      }
    };
    return traverseNode(node);
  };

  // accepts a callback and executes it on every value contained in the tree.
  node.depthFirstLog = function(cb) {
    var changeNode = function(node) {
      if (node) {
        cb(node.value);
        if (node.left) {
          changeNode(node.left);
        }
        if (node.right) {
          changeNode(node.right);
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
