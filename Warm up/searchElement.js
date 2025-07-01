/*
Write a function that searches for an element in an array and returns the index,if the element is not present then just return -1
*/


function searchElement(arr,element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) return i;
  }
  return -1;
}

console.log(searchElement([4,2,0,10,8,30],4));
