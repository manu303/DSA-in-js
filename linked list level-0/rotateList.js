/*https://leetcode.com/problems/rotate-list/description/*/
function rotateList(head, k) {
  if (!head || !head.next) return head;
  let slow = head;
  let fast = head;
  let curr = head;
  let length = 0;
  while (curr) {
    length++;
    curr = curr.next;
  }
  for (let i = 0; i < k % length; i++) {
    fast = fast.next;
  }
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  fast.next = head;
  let newHead = slow.next;
  slow.next = null;
  return newHead;
}
