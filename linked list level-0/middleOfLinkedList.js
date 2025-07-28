//to find middle node of linked list
/*https://leetcode.com/problems/middle-of-the-linked-list/description/ */
function middleOfLinkedList(head)
{
    let fast = head;
    let slow = head;
    while(fast!==null && fast.next!==null)
    {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}