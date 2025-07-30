//remove nth node from end of linkedlist (given head and n)

//approach one -two passes
function removeNthFromEnd1(head, n) {
  //creating sentenel
  let sentenel = new ListNode();
  sentenel.next = head;
  let prev = sentenel;
  //calculating length
  let length = 0;
  let curr = head;
  while (curr) {
    curr = curr.next;
    length++;
  }
  //finding and reaching previous position
  let prevPos = length - n;

  for (let i = 0; i < prevPos; i++) {
    prev = prev.next;
  }
  //deleting required node
  prev.next = prev.next.next;
  //returning the head
  return sentenel.next;
}

//approach 2 - one pass,two pointers
function removeNthFromEnd2(head, n) {
  //creating sentenel
  let sentenel = new ListNode();
  sentenel.next = head;
  let second = sentenel;
  let first = sentenel;
  //maintaining a gap of n between first and second pointers
  for (let i = 0; i < n; i++) {
    first = first.next;
  }
  //until first pointer reaches last node keep moving first and second one step each
  while (first.next) {
    first = first.next;
    second = second.next;
  }
  second.next = second.next.next;
  return sentenel.next;
}
