/*
Write a program to print all even numbers from an array.
Input: [10, 3, 5, 2, 7, 6, 9]
Output: 10 2 6
*/

let arr = [10, 3, 5, 2, 7, 6, 9];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log(arr[i]);
  }
}
