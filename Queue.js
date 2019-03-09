class Node { // create node in queue
  constructor(value) {
    this.value = value; // value is made
    this.next = null; // next is null in case no nodes were previously enqueued
  }
}

class Queue {
  constructor() {
    this.first = null; // no nodes in beginning, this is for O(1) insertion
    this.last = null; // no nodes in beginning, this is for O(1) deletion
    this.size = 0; // size is needed to report size of queue
  }

  enqueue(val) {
    var newNode = new Node(val); // create new node
    if (!this.first) { // if no queue exist
      this.first = newNode; // first points to new node
      this.last = newNode; // last points to new node
    } else { // if queue exist
      this.last.next = newNode; // a memory location of the last node is created and pointing to new node
      this.last = newNode; // last node is now the new node
    }
    return ++this.size; // prefix operator has to be used for the return or size without increment returns
  }

  dequeue() {
    if (!this.first) return null; // no items in queue

    var temp = this.first; // temporary storage
    if (this.first === this.last) { // if there is one node left in queue
      this.last = null; // setting pointer to null for memory efficiency
    }
    this.first = this.first.next; // this deletes the connection with the first element and reassigns first to the element behind, if next is null, then queue is empty
    this.size--; // size is needed to report size of queue
    return temp.value; // the node is detached from queue an returned
  }
}
