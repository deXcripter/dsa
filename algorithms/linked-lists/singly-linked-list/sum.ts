class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let node = new ListNode();

  while (list1 && list2) {
    if (list1.val < list2.val) {
      if (!node) node = list1;
      else {
        node.next = list1;
        list1 = list1.next;
      }
    } else {
      if (!node) node = list2;
      else {
        node.next = list2;
        list2 = list2.next;
      }
    }

    if (list1) node.next = list1;
    if (list2) node.next = list2;

    return node;
  }

  return node;
}

const l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);
const l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(8);

console.log(mergeTwoLists(l1, l2));

// TODO - still not working
