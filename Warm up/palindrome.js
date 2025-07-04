function palindrome(num) {
  if (num < 0) return false;
  let numCopy = num;
  let reversedNum = 0;
  while (num > 0) {
    reversedNum = reversedNum * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return reversedNum === numCopy;
}

let num = 121;
if (palindrome(num)) {
  console.log("Palindrome");
} else {
  console.log("Not palindrome");
}
