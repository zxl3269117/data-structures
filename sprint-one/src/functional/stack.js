var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[someInstance.size()] = value;
  };

  someInstance.pop = function() {
    var k = 0;
    var temp = {};
    var lastItem = storage[someInstance.size(storage) - 1];
    while (k < someInstance.size(storage) - 1) {
      temp[k] = storage[k];
      k ++;
    }
    storage = temp;
    return lastItem;
  };

  someInstance.size = function() {
    var count = 0;
    while (storage[count]) {
      count ++;
    }
    return count;
  };

  return someInstance;
};
