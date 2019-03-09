class Node {
    constructor(value){
        this.value = value; // value is made with node
        this.next = null; // made to check for first insertion and to connect other nodes
    }
}

class Stack {
    constructor(){
        this.first = null; // stack is empty
        this.last = null; // stack is empty
        this.size = 0; // size is zero
    }
    push(val){
        var newNode = new Node(val); // create node
        if(!this.first){ // stack is empty
            this.first = newNode; // first points to newNode
            this.last = newNode; // last points to newNode
        } else { // stack exist
            var temp = this.first; // store data so newNode can be head
            this.first = newNode; // newNode is pushed on top of stack
            this.first.next = temp; // nodes are pushed down in stack, newNode points to the node below
        }
        return ++this.size; // prefix operator needed
    }
    pop(){
        if(!this.first) return null; // empty stack
        var temp = this.first; // used to store data to return
        if(this.first === this.last){ // if there is one last item in stack
            this.last = null; // last points to null
        }
        this.first = this.first.next; // node below becomes the first item in stack
        this.size--; // size decreases
        return temp.value; // item removed from stack is now returned
    }
}
