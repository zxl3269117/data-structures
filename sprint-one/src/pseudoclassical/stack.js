var Stack = function() {
  this.storage = {};
};


Stack.prototype.push = function(value) {
  this.storage[this.size()] = value;
};

Stack.prototype.pop = function() {
  var lastItem = this.storage[this.size() - 1];
  delete this.storage[this.size() - 1];
  return lastItem;
};

Stack.prototype.size = function() {
  var count = 0;
  while (this.storage[count]) {
    count ++;
  }
  return count;
};
