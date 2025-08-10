/*https://leetcode.com/problems/find-words-containing-character/description/ */

//approach 1-inbuit function
function findWordsContaining(words, x) {
  let res = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      res.push(i);
    }
  }
  return res;
}

//approach2 - without inbuilt function
function findWordsContaining1(words, x) {
  let res = [];
  for (let i = 0; i < words.length; i++) {
    for (j = 0; j < words[i].length; j++) {
        if(words[i][j]===x)
        {
            res.push(i);
            break;
        }
    }
  }
  return res;
}

/*
let ans1 = findWordsContaining1(["leet","code"],"e");
let ans2 = findWordsContaining1(["abc","bcd","aaaa","cbc"],"a");
let ans3 = findWordsContaining1(["abc","bcd","aaaa","cbc"],"z");

console.log(ans1,ans2,ans3)
*/

