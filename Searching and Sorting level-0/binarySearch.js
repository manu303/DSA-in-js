//Binary search
const arr = [0, 1, 2, 5, 7, 8, 9];
const target = 9;
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (right >= left) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] === target) {
      return middle;
    } else if (target > arr[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1;
}

let res = binarySearch(arr,target);
console.log(res);
