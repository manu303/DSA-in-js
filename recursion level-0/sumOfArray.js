//sum of all elements present in array using recursion
const arr = [1,10,14,6];
function sumOfArray(index)
{
    if(index === 0) return arr[0];
    return arr[index] + sumOfArray(--index);
}

let index = arr.length - 1;
let res = sumOfArray(index);
console.log(res);