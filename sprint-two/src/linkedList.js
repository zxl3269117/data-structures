var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (!list.head) {
      var node = Node(value);
      list.head = node;
      list.tail = node;
    }

    if (list.head) {
      var pointer = list.tail;
      var newNode = Node(value);
      pointer.next = newNode;
      list.tail = newNode;
    }

  };

  list.removeHead = function() {
    var firstNode = list.head.next;
    var secondNode = firstNode.next;
    list.head = secondNode;
    return firstNode.value;
  };

  list.contains = function(target) {
    var pointer = list.head.next;
    while (pointer) {
      if (pointer.value === target) {
        return true;
      }
      pointer = pointer.next;
    }
    return false;
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
// .addToTail - O(1)
// .removeHead - O(1)
// .contains - O(n)



// list = {
//         head: {'value': value, 'next': {'value': value, 'next': {'value': value, 'next': null}}},
//         tail: {'value': value, 'next': null}
//        }



