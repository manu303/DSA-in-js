//linear search
let arr = [4, 9, 1, 0, 2];
let target = 0;
function linearSearch(arr, target) {
  for (let i=0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch(arr, target));
