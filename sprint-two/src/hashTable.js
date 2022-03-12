var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var basket = this._storage.get(index);

  if (basket) {
    for (var i = 0; i < basket.length; i++) {
      var tuple = basket[i];
      if (tuple[0] === k) {
        tuple[1] = v;
        break;
      }
    }

    if (i === basket.length) {
      basket.push([k, v]);
    }
  }

  if (!basket) {
    basket = [[k, v]];
  }
  this._storage.set(index, basket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var basket = this._storage.get(index);

  if (basket) {
    for (var i = 0; i < basket.length; i++) {
      if (basket[i][0] === k) {
        return basket[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var basket = this._storage.get(index);
  if (basket) {
    for (var i = 0; i < basket.length; i++) {
      if (basket[i][0] === k) {
        basket.splice(i, 1);
      }
    }
  }
};



/* Complexity: What is the time complexity of the above functions?
  insert - O(1)
  retrieve - O(1)
  remove - O(1)
 */

// storage = [basket1, basket2, ..., basketn]
// basket1 = [tuple1, tuple2, ..., tuplen]
// tuple1 = [k1, v1]
// tuple2 = [k2, v2]

// storage = [[[k1, v1], [k2, v2]... tuplen], basket2, ... basketn]
