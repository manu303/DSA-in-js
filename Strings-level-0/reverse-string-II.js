/*https://leetcode.com/problems/reverse-string-ii/description/ */
function reverseString2(s,k)
{
    s = s.split('');
    let n = k;
    let mid = Math.floor(n/2);
    for(let i=0;i<s.length;i=i+(2*k))
    {
        for(j=0;j<mid;j++)
        {
            let temp = s[j+i];
            s[j+i] = s[k-1-j+i];
            s[k-1-j+i] = temp;
        }
    }
    return s.join('');
}
/*
let res1 = reverseString2("abcdefg",2);
let res2 = reverseString2("abcd",2);
let res3 = reverseString2("abcd",4);

console.log(res1,res2,res3);
*/