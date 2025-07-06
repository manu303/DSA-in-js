/*
https://leetcode.com/problems/remove-element/description/ 
*/
let arr = [0,1,2,2,3,0,4,2];
let val = 2;

function removeElement(arr,val)
{
    let track = 0;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]!==val)
        {
            arr[track] = arr[i];
            track++;
        }
    }
    return track;
}

let res = removeElement(arr,val);
console.log(res);
console.log(arr);
