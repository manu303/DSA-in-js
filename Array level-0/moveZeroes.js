/*https://leetcode.com/problems/move-zeroes/description/ */
let arr = [0, 1, 0, 3, 12];
function moveZeroes(arr) {
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[index] = arr[i];
      index++;
    }
  }
  for (index; index < arr.length; index++) {
    arr[index] = 0;
  }
}
moveZeroes(arr);
console.log(arr);
