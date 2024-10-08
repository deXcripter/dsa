type strint = string | number;

/**
 * This is the class responsible for creating nodes
 */
class _Node {
  value: strint;
  next: _Node | null;

  constructor(value: strint) {
    this.value = value;
    this.next = null;
  }
}

//  * This class is responsible for manging and organizing nodes.
class SinglyLinkedList {
  head: _Node | null;
  tail: _Node | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  /**
   * PUSH LOGIC
   * When a new node is created, it sets the new node as the head and tail of the linked list.
   * If another node is added via a push method, it first makes the head point at the new node,
   * then set the new node as the current tail in the list
   */
  push(val: strint) {
    const node = new _Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail!.next = node;
      this.tail = node;
    }
  }

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current);
      current = current.next;
    }
  }
}

const node = new SinglyLinkedList();
node.push("Hi");
node.push("There");
node.push("Chiamaka");
node.traverse();

//console.log(node);
