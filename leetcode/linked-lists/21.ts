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
): ListNode | null | string {
  if (typeof list1?.val !== "number" && typeof list2?.val !== "number")
    return null;
  let newList = new ListNode();
  let current = newList;

  while (list1?.val !== undefined && list2?.val !== undefined) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  if (list1) current.next = list1;
  else if (list2) current.next = list2;

  return newList.next;
}

const list1 = new ListNode(-10);
list1.next = new ListNode(-9);
list1.next.next = new ListNode(-8);
list1.next.next.next = new ListNode(-6);
list1.next.next.next.next = new ListNode(-4);
list1.next.next.next.next.next = new ListNode(1);
list1.next.next.next.next.next.next = new ListNode(9);
list1.next.next.next.next.next.next.next = new ListNode(9);

const list2 = new ListNode(-5);
list2.next = new ListNode(-3);
list2.next.next = new ListNode(0);
list2.next.next.next = new ListNode(7);
list2.next.next.next.next = new ListNode(8);
list2.next.next.next.next.next = new ListNode(8);

const response = mergeTwoLists(list1, list2);
console.log(JSON.stringify(response));
