/*https://leetcode.com/problems/reverse-string/description/*/
let arr = ["h", "e", "l", "l", "o"];
function reverseString(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - 1 - i] = temp;
  }
}
reverseString(arr);
console.log(arr);
