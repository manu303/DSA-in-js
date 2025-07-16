//sum of all odd elements present in array using recursion
const arr = [2, 1, 3, 4, 7, 4];
function sumOfArray(index) {
  if (index === 0) return arr[index] % 2 === 1 ? arr[0] : 0;
  return arr[index] % 2 === 1
    ? arr[index] + sumOfArray(--index)
    : 0 + sumOfArray(--index);
}

let index = arr.length - 1;
let res = sumOfArray(index);
console.log(res);
