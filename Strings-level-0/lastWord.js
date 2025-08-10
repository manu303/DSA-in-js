/*https://leetcode.com/problems/length-of-last-word/description/ */

function lengthOfLastWord(s) {
  let end = s.length - 1; //last character index
  //ignoring all the trailing spaces from end and finding the index of first non-space character.
  while (end >= 0) {
    if (s[end] !== " ") break;
    --end;
  }
  let count = 0; //to count no of characters
  while (end >= 0) {
    if (s[end] === " ") break;
    count++;
    end--;
  }
  return count;
}

/*
let res1 = lengthOfLastWord("Hello World");
let res2 = lengthOfLastWord("   fly me   to   the moon  ");
let res3 = lengthOfLastWord("luffy is still joyboy");
console.log(res1,res2,res3);
*/
