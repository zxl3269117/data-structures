var LinkedList = function() {
  var list = {};
  list.head = null; // should be an object
  list.tail = null; // should be an object

  list.addToTail = function(value) {
    // CASE 1
    // for the first time adding, there will be nothing in the
    // head and tail
      // add a node to invoke the Node with inputting value
      // then we add this node to both list.head and list.tail

    // CASE 2
    // if there's already value in list.head
      // create a variable (previous tail) to store list.tail to this variable
      // change list.head.next to list.tail
      // store the value of the list.tail.value to list.next.value
      // assigning list.tail to list.head.next.next add a node by instantiating Node using the inputting value and assign it to list.tail
  };

  list.removeHead = function() {
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// list = {
//         head: {'value': value, 'next': null},
//         tail: {'value': value, 'next': null}
//        }

// list = {
//         head: {'value': value, 'next': {'value': value, 'next': {'value': value, 'next': null}}},
//         tail: {'value': value, 'next': null}
//        }

/* LinkedList =
{head: {value: value, next: theNextNode},
theNextNode: {value: value, next: the2NextNode},
the2NextNode:{value: value, next: ..},
theNthNode: {value: value, next: tail},
tail: {value: value, next: null}};
*/

// {node:1, next: {node: 2, next: null}}

