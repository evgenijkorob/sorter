class Sorter {
  constructor() {
    this.elements = [];
  }

  add(element) {
    this.elements.push(element);
  }

  at(index) {
    return this.elements[index];
  }

  get length() {
    return this.elements.length;
  }

  toArray() {
    return this.elements;
  }

  _comparator(a, b) {
     return a - b;
  }

  _swap(first, second) {
    var buf = this[first];
    this[first] = this[second];
    this[second] = buf;
  }

  sort(indices) {
    if (indices.length < 2)
      return this.elements;
    indices.sort((a, b) => a - b);
    for (var i = 0; i < indices.length - 1; i++) {
      for (var j = i + 1; j < indices.length; j++) {
        if (this._comparator(this.elements[indices[i]], this.elements[indices[j]]) > 0) {
          this._swap.call(this.elements, indices[i], indices[j]);
        }
      }
    }
    return this.elements;
  }

  setComparator(compareFunction) {
    this._comparator = compareFunction;
  }
}

module.exports = Sorter;