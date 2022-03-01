var Queue = function() {
  var someInstance = {storage: {}};
  _.extend(someInstance, queueMethods);
  return someInstance;
};


var queueMethods = {
  enqueue: function(value) {
    this.storage[this.size()] = value;
  },

  dequeue: function() {
    var index = 1;
    var temp = {};
    var firstItem = this.storage[0];
    while (this.storage[index]) {
      temp[index - 1] = this.storage[index];
      index ++;
    }
    this.storage = temp;
    return firstItem;
  },

  size: function() {
    var count = 0;
    while (this.storage[count]) {
      count ++;
    }
    return count;
  }
};