/*https://leetcode.com/problems/length-of-last-word/description/ */

//approach-2(single loop 1)
function lengthOfLastWord(s) {
  let end = s.length - 1;
  let count = 0;
  while (end >= 0) {
    if (s[end] !== " " && s[end - 1] === " ") {
      ++count;
      break;
    } else if (s[end] === " ") {
      --end;
    } else {
      ++count;
      --end;
    }
  }
  return count;
}

//approach-3(single loop-2)
function lengthOfLastWord2(s)
{
    let end = s.length-1;
    let count =0;
    while(end>=0)
    {
        if(s[end]!=" ")
        {
            count++;
        }
        else if(count>0) break;
        end--;
    }
    return count;
}

//inbuilt function approach
function lengthOfLastWord3(s)
{
    s = s.trim();
    s = s.split(" ");
    return s[s.length-1].length;
}



/*
let res1 = lengthOfLastWord("Hello World");
let res2 = lengthOfLastWord("   fly me   to   the moon  ");
let res3 = lengthOfLastWord("luffy is still joyboy");
console.log("approach 2 - one");
console.log(res1, res2, res3);

let res4 = lengthOfLastWord2("Hello World");
let res5 = lengthOfLastWord2("   fly me   to   the moon  ");
let res6 = lengthOfLastWord2("luffy is still joyboy");
console.log("approach 2 - two");
console.log(res4, res5, res6);

let res7 = lengthOfLastWord3("Hello World");
let res8 = lengthOfLastWord3("   fly me   to   the moon  ");
let res9 = lengthOfLastWord3("luffy is still joyboy");
console.log("approach 3 - inbuilt functions");
console.log(res7, res8, res9);
*/
