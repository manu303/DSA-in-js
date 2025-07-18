
//iterative approach
let n = 5;
let j = 0,
  k = 1;
let fibres = 0;

function fibonacci(n) {
  for (let i = 2; i <= n; i++) {
    fibres = j + k;
    j = k;
    k = fibres;
  }
  return fibres;
}

console.log(fibonacci(n));


//recursive approach
function fib(n)
{
    if(n<=1) return n;
    return fib(n-1) + fib(n-2);
}

console.log(fib(n));