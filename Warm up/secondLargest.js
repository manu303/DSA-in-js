let arr = [4, 9, 0, 2, 8, 7, 1, 9, 9];
function secondLargest(arr) {
  if (arr.length < 2) {
    //will handle empty array case
    return null;
  }
  let firstlargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstlargest) {
      secondLargest = firstlargest;
      firstlargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] != firstlargest) {
      //will handle duplicate elements case
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

let result = secondLargest(arr);
console.log(result);
