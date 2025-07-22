//helper function
function mergeSortedArrays(arr1, arr2) {
  let m = arr1.length;
  let n = arr2.length;
  let ptr1 = 0;
  let ptr2 = 0;
  let newArr = [];
  for (let i = 0; i < m + n; i++) {
    if (arr1[ptr1] < arr2[ptr2] || ptr2 > n - 1) {
      newArr.push(arr1[ptr1]);
      ptr1++;
    }
    else{
        newArr.push(arr2[ptr2]);
        ptr2++;
    }
  }
  return newArr;
}
//main algorithm
function mergeSortAlgo(nums)
{
    if(nums.length<=1) return nums;
    let middle = Math.floor(nums.length/2);
    let left  = mergeSortAlgo(nums.slice(0,middle));
    let right = mergeSortAlgo(nums.slice(middle));
    return mergeSortedArrays(left,right);
}

let nums = [5,1,1,2,0,0];
let res = mergeSortAlgo(nums);
console.log(res);