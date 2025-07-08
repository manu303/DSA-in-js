nums1 = [1, 2, 3, 0, 0, 0];
nums2 = [2, 5, 6];
let m = 3;
let n = 3;
//brute force-approach 1 O(n log n)
/*
function merge(nums1, m, nums2, n) {
  let ptr = m;
  for (let i = 0; i < n; i++) {
    nums1[ptr] = nums2[i];
    ptr++;
  }
  nums1 = nums1.sort();
}
*/

//approach 2 - O(m+n) and space complexity O(m)
/*
function merge(nums1, m, nums2, n) {
  let nums1Copy = nums1.slice(0,m);
  let ptr1 = 0;
  let ptr2 = 0;
  for (i = 0; i < m + n; i++) {
    if ((nums1Copy[ptr1] < nums2[ptr2] && ptr1 < m) || ptr2 >= n) {
      nums1[i] = nums1Copy[ptr1];
      ptr1++;
    } else {
      nums1[i] = nums2[ptr2];
      ptr2++;
    }
  }
}
  */

//approach 3 most optimal O(m+n)
function merge(nums1, m, nums2, n) {
  let ptr1 = m - 1;
  let ptr2 = n - 1;
  for (let i = m + n - 1; i >= 0; i--) {
    if(ptr2<0)
    {
        break;
    }
    if((ptr1>=0)&&(nums1[ptr1]>nums2[ptr2]))
    {
        nums1[i] = nums1[ptr1];
        ptr1--
    }
    else{
        nums1[i] = nums2[ptr2];
        ptr2--;
    }
  }
}
//output
merge(nums1, m, nums2, n);
console.log(nums1);
