//my brute force approach
var isPalindrome = function (s) {
    s = s.split('');
    //remove non-alphanumeric characters
    for (let i = 0; i < s.length; i++) {
        let ascii = s[i].charCodeAt(0);
        if (!((ascii >= 48 && ascii <= 57) || (ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122))) {
            s.splice(i, 1);
            i--;
        }
    }
    //convert uppercase letters into lowercase
    for(let i=0;i<s.length;i++)
    {
        let ascii = s[i].charCodeAt(0);
        if(ascii>=65 && ascii<=90)
        {
            ascii = ascii + 32;
            s[i] = String.fromCharCode(ascii);
        }
    }
    let convertedStr = s.join('');
    //reverse the char and array and finally check valid palindrome or not
    for(let i=0;i<Math.floor(s.length/2);i++)
    {
        let temp = s[i];
        s[i] = s[s.length-1-i];
        s[s.length-1-i] = temp;
    }
    return convertedStr === s.join('');
};

let res = isPalindrome("A man, a plan, a canal: Panama");
console.log(res);

//approach-1(extra space)
var isPalindrome1 = function (s) {
    s = s.toLowerCase();
    let filteredStr = "";
    let reversedStr = "";
    for(let i =0;i<s.length;i++)
    {
        if(s[i].match(/[a-z0-9]/i))
        {
            filteredStr = filteredStr + s[i];
            reversedStr = s[i] + reversedStr;
        }
    }
    return reversedStr === filteredStr;
}

let res1 = isPalindrome1("A man, a plan, a canal: Panama");
console.log(res1);

//approach-2 (no extra space)
var isPalindrome2 = function (s) {
    s = s.toLowerCase();
    let i = 0;
    let j = s.length-1;
    while(i<j)
    {
        if(!s[i].match(/[a-z0-9]/i))
        {
            ++i;
        }
        else if(!s[j].match(/[a-z0-9]/i))
        {
            --j;
        }
        else if(s[i] === s[j])
        {
            ++i;--j;
        }
        else{
            return false;
        }
    }
    return true;
}

let res2 = isPalindrome2("A man, a plan, a canal: Panama");
console.log(res2);