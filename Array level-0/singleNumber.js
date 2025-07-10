//approach 1
/*
function singleNumber(nums)
{
    let hash = {}
    for(let i=0;i<nums.length;i++)
    {
        if(!hash[nums[i]])
        {
            hash[nums[i]] = 1;
        }
        else
        {
            hash[nums[i]]++;
        }
    }
    for(let i=0;i<nums.length;i++)
    {
        if(hash[nums[i]]===1)
        {
            return nums[i];
        }
    }
}
*/

//approach 2 - optimal
function singleNumber(nums)
{
    let xor = 0;
    for(let i=0;i<nums.length;i++)
    {
        xor = xor^nums[i];
    }
    return xor;
}

nums = [1,3,5,4,5,3,1];
let res = singleNumber(nums)
console.log((res));