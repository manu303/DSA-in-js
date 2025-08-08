/*https://leetcode.com/problems/swap-nodes-in-pairs/description/ */

//iterative approach
function swapPairs1(head) {
  if (!head || !head.next) return head;
  let dummy = new ListNode();
  let prev = dummy;
  let curr = head;
  let nxt = head.next;
  while (curr && nxt) {
    prev.next = nxt;
    curr.next = nxt.next;
    nxt.next = curr;

    prev = curr;
    curr = prev.next;
    nxt = curr && curr.next;
  }
  return dummy.next;
}

//recursive approach
function swapPairs2(head) {
  if (!head || !head.next) return head;
  let left = head;
  let right = head.next;
  left.next = swapPairs2(right.next);
  right.next = left;
  return right;
}
