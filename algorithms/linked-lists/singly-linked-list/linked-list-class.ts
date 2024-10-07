type strnum = string | number;

class _Node {
  value: strnum;
  next: _Node | null;

  constructor(value: strnum) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  head: _Node | null;
  tail: _Node | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val: strnum) {
    let node = new _Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail!.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }
}

const hi = new SinglyLinkedList();
hi.push("Hi there");
hi.push("Who are you");
hi.push("Im no one man");
hi.push("Im not so certain");

console.log(hi);
