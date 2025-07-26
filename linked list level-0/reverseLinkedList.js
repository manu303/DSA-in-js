//reverse a linked list
/*https://leetcode.com/problems/reverse-linked-list/description/ */

function reverseLinkedList(head)
{
    let prev = null;
    let curr = head;
    while(curr)
    {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr =temp;
    }
    return temp;
}