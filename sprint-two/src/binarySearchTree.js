var BinarySearchTree = function(value) {
  // using functional type
  var node = {};
  node.left = null;
  node.right = null;
  node.value = value;

  // accept a value and place it in the correct position in the tree
  node.insert = function(value) {
  // create a variable called checkNode which is a function expression with node as the parameter
  var checkNode = function(node) {
    // check if node.value is larger than value
    if (node.value > value) {
      // check if node.left is a falsy value
      if (!node.left) {
        // assign BinarySearchTree(value) to node.left
        node.left = BinarySearchTree(value);
      } else { // else
        // call the checkNode function with node.left
        checkNode(node.left);
      }
    } else if (node.value < value) {// else if node.value is less than value
      // check if node.right is a falsy value
      if (!node.right) {
        // assign BinarySearchTree(value) to node.right
        node.right = BinarySearchTree(value);
      } else { // else
        // call the checkNode function with node.right
        checkNode(node.right);
      }
    }
  };
  // call checkNode with argument node
  checkNode(node);
  };
  // accepts a value and find if the value is contained in the tree
  node.contains = function(value) {
    // use recursion
    // create a variable called traverseNode, which is a function expression with parameter as 'node'
    var traverseNode = function(node) {
      // check if node is a falsy value
      if (!node) {
        // return false
        return false;
      }
      // if node.value is value
      if (node.value === value) {
        // return true
        return true;
      }
      // else if value is larger than node.value
      if (value > node.value) {
        // return calling traverseNode with node.right as argument
        return traverseNode(node.right);
      }
      if (value < node.value) {
        // return calling traverseNode with node.left as argument
        return traverseNode(node.left);
      }
    };
    // return calling traverseNode with node as the argument
    return traverseNode(node);
  };

  // accepts a callback and executes it on every value contained in the tree.
  node.depthFirstLog = function(cb) {
    // create a variable called changeNode, which is a function expression with node as the parameter
    var changeNode = function(node) {
      // if node is a truthy value
      if (node) {
        // calling cb on node.value
        cb(node.value);
        // check if node.left is a truthy value
        if (node.left) {
          // call changeNode on node.left
          changeNode(node.left);
        }
        // check if node.right is a truthy value
        if (node.right) {
          // call changeNode on node.right
          changeNode(node.right);
        }
      }
    };
    // call changeNode with node as the argument
    changeNode(node);
  };

  return node;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
