class PriorityQueue {
  constructor() {
    this.values = []; // value to compare with hierarchy
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority); // create new node
    this.values.push(newNode); //put newNode into value
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1; // get the last index
    const element = this.values[idx]; // point the value of the element with the last index
    while (idx > 0) { // break if the value has the highest priority
      let parentIdx = Math.floor((idx - 1) / 2); // formula to get parent index
      let parent = this.values[parentIdx]; // point to parent element
      if (element.priority >= parent.priority) break; // if inserted value is higher than its parent and moved above parent
      this.values[parentIdx] = element; // make element the new parent
      this.values[idx] = parent; // switch parent with element and move it down
      idx = parentIdx; // parentIndex now turns into idx and becomes a child
    }
  }

  dequeue() {
    const min = this.values[0]; // point to the root of the tree
    const end = this.values.pop(); // take out the lowest leaf node
    if (this.values.length > 0) { // as long as the tree exist
      this.values[0] = end; // the lowest leaf node becomes root node
      this.sinkDown(); // sort out the priority queue and possible move the root node down
    }
    return min; // return extracted node
  }

  sinkDown() {
    let idx = 0; // point to head node
    const length = this.values.length; // get length of tree
    const element = this.values[0]; // point to root node
    while (true) {
      let leftChildIdx = 2 * idx + 1; // formula for left child of parent node
      let rightChildIdx = 2 * idx + 2; // formula for right child of parent node
      let leftChild, rightChild; // declare leftChild and rightChild
      let swap = null; // to make sure if a swap has happened or not

      if (leftChildIdx < length) { // as long as there is a parent node
        leftChild = this.values[leftChildIdx]; // point to the left child node of parent
        if (leftChild.priority < element.priority) { // min heap conditionals
          swap = leftChildIdx; // make the left child index eligible for swap
        }
      }
      if (rightChildIdx < length) { // as long as there is a parent node
        rightChild = this.values[rightChildIdx]; // point to the right child node of parent
        if ( // this code is different from the left node for edge cases
          (swap === null && rightChild.priority < element.priority) || // if no swap has taken place and right node is smaller than its parent node
          (swap !== null && rightChild.priority < leftChild.priority) // or a swap already has taken place and right node should swap instead of left node
        ) {
          swap = rightChildIdx; // make the right node eligible for swap
        }
      }
      if (swap === null) break; // if no swap has taken place, then the sorting is done
      this.values[idx] = this.values[swap]; // swap the smaller node with its parent to sort out heap
      this.values[swap] = element; // the nodes have been switched so point to new parent node
      idx = swap; // now look at this node to compare to its parent nodes
    }
  }
}
// create node class
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

let ER = new PriorityQueue();
ER.enqueue("common cold", 5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fever", 4);
ER.enqueue("broken arm", 2);
ER.enqueue("glass in foot", 3);






