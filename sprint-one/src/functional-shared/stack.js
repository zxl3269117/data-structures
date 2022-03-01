var Stack = function() {
  var someInstance = {storage: {}};
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.size()] = value;
  },

  pop: function() {
    var popped = this.storage[this.size() - 1];
    delete this.storage[this.size() - 1];
    return popped;
  },

  size: function() {
    var count = 0;
    while (this.storage[count]) {
      count ++;
    }
    return count;
  }
};