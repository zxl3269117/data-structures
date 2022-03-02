class Stack {
  constructor() {
    this.storage = {};
  }

  push(value) {
    this.storage[this.size()] = value;
  }

  pop() {
    var poppedItem = this.storage[this.size() - 1];
    delete this.storage[this.size() - 1];
    return poppedItem;
  }

  size() {
    var count = 0;
    while (this.storage[count]) {
      count ++;
    }
    return count;
  }
}