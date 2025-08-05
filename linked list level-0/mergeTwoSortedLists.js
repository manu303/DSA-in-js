//brute force approach using extra linked list.
function mergeTwoLists1(list1, list2) {
    let curr1 = list1;
    let curr2 = list2;
    let newList = new ListNode();
    let head = newList;
    while (curr1 || curr2) {
        if ((!curr1 ? Infinity : curr1.val) < (!curr2 ? Infinity : curr2.val)) {
            newList.next = new ListNode(curr1.val);
            newList = newList.next;
            curr1 = curr1 && curr1.next;
        }
        else {
            newList.next = new ListNode(curr2.val);
            newList = newList.next;
            curr2 = curr2 && curr2.next;
        }
    }
    return head.next;
};

//optimal approach without extra linked list
function mergeTwoLists2(list1, list2) {
    let curr1 = list1;
    let curr2 = list2;
    let ptr = new ListNode();
    let head = ptr;
    while (curr1 && curr2) {

        if (curr1.val < curr2.val) {
            ptr.next = curr1;
            ptr = ptr.next;
            curr1 = curr1.next;
        }
        else {
            ptr.next = curr2;
            ptr = ptr.next;
            curr2 = curr2.next;
        }
    }
    (!curr1) ? ptr.next = curr2 : ptr.next = curr1;
    return head.next;
};