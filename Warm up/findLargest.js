/*
Write a function that returns largest number in an array
*/

let arr = [-9,-19,-3];
function findLargest(arr)
{
    let largest=-Infinity;
    for(let i=2;i<arr.length;i++)
    {
        if(arr[i]>largest)
        {
            largest = arr[i];
        }
    }
    return largest;
}

console.log(findLargest(arr));