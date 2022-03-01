var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.size()] = value;
  },

  pop: function() {
    var lastItem = this.storage[this.size() - 1];
    delete this.storage[this.size() - 1];
    return lastItem;
  },

  size: function() {
    var count = 0;
    while (this.storage[count]) {
      count ++;
    }
    return count;
  }
};