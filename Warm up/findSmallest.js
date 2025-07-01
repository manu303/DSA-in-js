/*
Write a function that returns smallest number in an array
*/
let arr = [-9,-19,-3];
function findSmallest(arr)
{
    let smallest=Infinity;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]<smallest)
        {
            smallest = arr[i];
        }
    }
    return smallest;
}

console.log(findSmallest(arr));