var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // adding the inputting value to the storage with numeric keys
    storage[someInstance.size(storage)] = value;
  };

  someInstance.dequeue = function() {
    var k = 0;
    var firstItem = storage[0];
    var temp = {};
    while (storage[k + 1]) {
      temp[0] = storage[k + 1];
      k ++;
    }
    storage = temp;
    return firstItem;
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
