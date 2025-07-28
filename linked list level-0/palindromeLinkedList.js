/*Approach one-coverting linked list into array */

function isPalindrome1(head)
{
    if(head===null||head.next===null) return true; //for readability even though code covers this case
    //coverting linked list into an array
    let curr = head;
    let arr = [];
    while(curr!==null)
    {
        arr.push(curr.val);
        curr = curr.next;
    }
    //array is palindrome or not.
    if(arr.length<1) return false;
    for(let i=0;i<Math.floor(arr.length/2);i++)
    {
        if(arr[i]===arr[arr.length-1-i])
        {
            continue;
        }
        else
        {
            return false;
        }
    }
    return true;
}

//approach 2

function isPalindrome2(head)
{
    //middle node
    let slow = head;
    let fast = head;
    while(fast&&fast.next)
    {
        slow = slow.next;
        fast = fast.next.next;
    }

    //reversing
    let prev = null;
    let curr = slow;
    while(curr)
    {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    //palindrome or not
    let start =head;
    let end = prev;
    while(end)
    {
        if(start.val!==end.val)
        {
            return false;
        }
        start = start.next;
        end = end.next;
    }
    return true;
}