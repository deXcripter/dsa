// singly linked list is a chain of nodes pointing to the next node (one way)

class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

// var first = new Node("hello")
// first.next = new Node("there")
// first.next.next = new Node("whats")
// first.next.next.next = new Node("cooking")

class SinglyLinkedList{
  constructor(val){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push (val) {
    const newNode = new Node(val)
    if (!this.head){
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode
    }
    this.length++;
    return this;
  }
}

const list = new SinglyLinkedList();
list.push("hello")