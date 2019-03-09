class Node { // DLL is bidirectional
  constructor(val) {
    this.val = val; // val is created
    this.next = null; // create pointer to next node
    this.prev = null; // create pointer to previous node
  }
}


class DoublyLinkedList {
  constructor() {
    this.head = null; // pointer for head
    this.tail = null; // pointer for tail
    this.length = 0; // length may be needed for algorithms
  }

  push(val) { // add to tail of DLL
    var newNode = new Node(val); // create node
    if (this.length === 0) { // if DLL doesn't exist
      this.head = newNode; // head points to newNode
      this.tail = newNode; // tail points to newNode
    } else { // DLL exist
      this.tail.next = newNode; // tail node points to newNode
      newNode.prev = this.tail; // newNode points to node behind itself
      this.tail = newNode; // newNode is no the tail
    }
    this.length++; // length is increased
    return this; // return node created
  }

  pop() { // remove item from end, end of DLL is the right side
    if (!this.head) return undefined; // if DLL doesn't exist
    var poppedNode = this.tail; // stored to return
    if (this.length === 1) { // if one node is left
      this.head = null; // head is null
      this.tail = null; // tail is null
    } else { // more than one node exist in DLL
      this.tail = poppedNode.prev; // tail is now the previous node behind this node
      this.tail.next = null; // previous node cuts connection with current node
      poppedNode.prev = null; // to show that node has been disconnected from DLL when returned
    }
    this.length--; // decrease size
    return poppedNode; // node removed is returned
  }

  shift() {
    if (this.length === 0) return undefined;
    var oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    var count, current;
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode != null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    var newNode = new Node(val);
    var beforeNode = this.get(index - 1);
    var afterNode = beforeNode.next;

    beforeNode.next = newNode, newNode.prev = beforeNode;
    newNode.next = afterNode, afterNode.prev = newNode;
    this.length++;
    return true;
  }
}

var list = new DoublyLinkedList()
list.push("Harry")
list.push("Ron")
list.push("Hermione")
