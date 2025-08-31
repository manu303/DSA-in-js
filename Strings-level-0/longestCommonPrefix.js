//my approach
var longestCommonPrefix = function (strs) {
  let minIndex = Infinity;
  for (let i = 0; i + 1 < strs.length; i++) {
    if (strs[i].length === 0) return "";
    let j = 0;
    let min = Math.min(strs[i].length, strs[i + 1].length);
    while (strs[i][j] === strs[i + 1][j] && j < min) {
      j++;
    }
    if (j === 0) return "";
    if (j < minIndex) {
      minIndex = j;
    }
  }
  return strs[0].substring(0, minIndex);
};

//intuitive approach
var longestCommonPrefix = function (strs) {
  let x = 0;
  while (x < strs[0].length) {
    let ch = strs[0][x];
    for (let i = 1; i < strs.length; i++) {
      if (strs[i][x] !== ch || strs[i].length === x) {
        return strs[0].substring(0, x);
      }
    }
    ++x;
  }
  return strs[0];
};
