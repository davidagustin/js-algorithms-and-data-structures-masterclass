class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx]; // element at last position, start from the end
    while (idx > 0) { // move until the very left of the array
      let parentIdx = Math.floor((idx - 1) / 2); // formula for parent element
      let parent = this.values[parentIdx]; // access the parent element
      if (element <= parent) break; // Max binary heap requires all values to be greater than its children
      this.values[parentIdx] = element; // element becomes new parent
      this.values[idx] = parent; // parent becomes child
      idx = parentIdx; // index moves to the left and node inserted gets compared until parent has higher value or at highest value
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

console.log(heap);

