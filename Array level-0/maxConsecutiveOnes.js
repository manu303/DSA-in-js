/*https://leetcode.com/problems/max-consecutive-ones/description/ */
let arr = [1,1,0,1,1,1];
function findMaxConsecutiveOnes(arr)
{
    let currCount =0;
    let maxCount = 0;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]===1)
        {
            currCount++;
        }
        else
        {
            maxCount = Math.max(currCount,maxCount);
            currCount = 0;
        }
    }
    return Math.max(currCount,maxCount);
}

let res = findMaxConsecutiveOnes(arr);
console.log(res);