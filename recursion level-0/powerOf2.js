//find whether a number is power of 2.
function powerOf2(num) {
  if (num === 1) return true;
  else if (num < 1 || num % 2 === 1) return false;
  return powerOf2(num / 2);
}

console.log(powerOf2(6));
