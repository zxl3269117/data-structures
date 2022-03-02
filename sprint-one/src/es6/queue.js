class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  enqueue(value) {
    this.storage[this.size()] = value;
  }
  dequeue() {
    var firstItem = this.storage[0];
    var index = 1;
    while (this.storage[index]) {
      this.storage[index - 1] = this.storage[index];
      index ++;
    }
    delete this.storage[index - 1];
    return firstItem;
  }
  size() {
    var count = 0;
    while (this.storage[count]) {
      count ++;
    }
    return count;
  }
}
