//sum of first n numbers using recursion
function sum(num)
{
    if(num==0) return 0;
    return num + sum(num-1);
}

let res = sum(10);
console.log(res);