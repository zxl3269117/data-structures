class Queue {
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
