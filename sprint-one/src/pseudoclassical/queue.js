var Queue = function() {
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.size()] = value;
},

Queue.prototype.dequeue = function() {
  var index = 1;
  var temp = {};
  var firstItem = this.storage[0];
  while (this.storage[index]) {
    temp[index - 1] = this.storage[index];
    index ++;
  }
  this.storage = temp;
  return firstItem;
};

Queue.prototype.size = function() {
  var count = 0;
  while (this.storage[count]) {
    count ++;
  }
  return count;
};
