//approach 1-brute force checking each and every node with another.
function getIntersectionNode1(headA,headB)
{
    while(headA)
    {
        let ptr = headB;
        while(ptr)
        {
            if(headA===ptr) return headA;
            ptr = ptr.next;
        }
        headA = headA.next;
    }
    return null;
}   

//approach 2 - using hashmap
function getIntersectionNode2(headA,headB)
{
    //storing in set/hashmap
    let store = newSet();
    while(headB)
    {
        store.add(headB);
        headB = headB.next;
    }

    //checking in hashmap
    while(headA)
    {
        if(store.has(headA)) return headA;
        headA = headA.next;
    }
    return null;
}
