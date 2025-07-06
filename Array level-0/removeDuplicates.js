/*
https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
*/
function removeDuplicates(arr) {
    let unqElePtr = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[unqElePtr]) {
            unqElePtr++;
            arr[unqElePtr] = arr[i];
        }
    }
    return unqElePtr + 1;
}
let arr = [0, 0, 1, 1, 2, 2, 3, 3, 3, 4];
let res = removeDuplicates(arr);
console.log(res);
console.log(arr);

