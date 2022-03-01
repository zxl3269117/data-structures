var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Stack.prototype.stackMethods = {
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
