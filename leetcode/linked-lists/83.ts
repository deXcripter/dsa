/**
 * Given the head of a sorted linked list,
 * delete all duplicates such that each element appears only once.
 * Return the linked list sorted as well.
 */

// Class Definition
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 *
 * @param head ListNode | null
 * @returns LintNode | null
 */

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return null;
  let currentNode = head;

  while (currentNode.next) {
    console.log("cn", currentNode, "hd", head);
    if (currentNode.val == currentNode.next.val) {
      currentNode.next = currentNode.next.next || null;
    } else currentNode = currentNode.next;
  }

  return head;
}

const node = new ListNode(1);
node.next = new ListNode(2);
node.next.next = new ListNode(2);
node.next.next.next = new ListNode(3);
node.next.next.next.next = new ListNode(3);

const res = deleteDuplicates(node);
console.log(res);
