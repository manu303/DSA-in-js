function reverse(num) {
  let numCopy = num;
  num = Math.abs(num);
  let rev = 0;
  while (num > 0) {
    rev = rev * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  let limit = Math.pow(2, 31);
  if (rev < -limit || rev > limit - 1) return 0;
  return numCopy < 0 ? -rev : rev;
}

let num = -123;
console.log(reverse(num));
