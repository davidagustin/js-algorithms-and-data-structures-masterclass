class Node {
  // A binary tree has a node and up to two children
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  // The binary tree starts at the root
  constructor() {
    this.root = null; // Empty until node is inserted
  }

  insert(value) {
    var newNode = new Node(value); // create node
    if (this.root === null) { // if there are no node in the tree
      this.root = newNode; // add the node as the root
      return this; // break out
    }
    var current = this.root; // if there exist a tree, point at root node
    while (true) {
      if (value === current.value) return undefined; // if the value already exist return undefined
      if (value < current.value) { // if the value that is being searched is less than the current value
        if (current.left === null) { //if there is no node in left child
          current.left = newNode; // put the node as the left child
          return this; // break out of while loop
        }
        current = current.left; // point to the left node if there exist a value and repeat loop
      } else {
        if (current.right === null) { // if there is no node in right child
          current.right = newNode; // put the node as the right child
          return this; // break out of while loop
        }
        current = current.right; // point to the right node if there exist a value and repeat loop
      }
    }
  }

  // find returns searches for a node and returns a node if found otherwise undefined or false
  find(value) {
    if (this.root === null) return false; // return if there is no tree
    var current = this.root, // point to top of tree
      found = false; // initialize flag to false
    while (current && !found) { // while the exist a node and value has not been found
      if (value < current.value) { // if the value is less than current value
        current = current.left; // point to left value
      } else if (value > current.value) { // if the value being searched is higher than current value
        current = current.right; // point to the right child
      } else {
        found = true; // if all cases before were not met, the value has been found and flag set to true
      }
    }
    if (!found) return undefined; // after breaking the loop and if flag is false, return undefined
    return current; // else return the node of found value
  }

  // contains returns a boolean if a value in tree exist
  contains(value) {
    if (this.root === null) return false; // return false if no tree exist
    var current = this.root, // point to root node, start from the top
      found = false; // create flag and set to false
    while (current && !found) { // while there is a node that exist and value is not found keep iterating, current can point to null and break
      if (value < current.value) { // value searched for is less then the current value
        current = current.left; // point to the left node, go left and repeat loop
      } else if (value > current.value) { // if value being searched for is more than the current value
        current = current.right; // point to the right node, go right and repeat loop
      } else {
        return true; // return true when value is found, there is no value greater or lesser than so value is equal
      }
    }
    return false; // return false when while loop breaks because value hasn't been found
  }

  // the is pre order traversal
  BFS() {
    var node = this.root, // point to the top of the tree
      data = [], // values added to data
      queue = []; // breadth first search iterates through levels, so therefore a queue is utilized
    queue.push(node); // root node is added to the queue

    while (queue.length) { // [] is a truthy value so length is utilized so when length is 0, it is falsy and breaks
      node = queue.shift(); // take out the left most value and make the node point to it, this mutates the queue
      data.push(node.value); // start from the top node
      if (node.left) queue.push(node.left); // add to the queue if there exist a left node
      if (node.right) queue.push(node.right); // add to the queue if there exist a right node
    }
    return data; // return the data of the finish BFS pre order traversal
  }
}


var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.BFS());

// Pre-order traversal for a BST can be useful for cloning itself or making a copy.
