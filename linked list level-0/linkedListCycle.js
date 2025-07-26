//detect linked list cycle - hash table approach
function linkedListCycle(head)
{
    let curr = head;
    let seenNodes = new Set();
    while(curr!==null)
    {
        if(seenNodes.has(curr)) return true;
        seenNodes.add(curr);
        curr = curr.next;
    }
    return false;
}