var largestOddNumber = function(s) {
    let j = s.length-1;
    while(j>=0)
    {
        if(Number(s[j])%2===1)
        {
            return s.substring(0,j+1);
        }
        --j;
    }
    return "";
};

let res= largestOddNumber("239537672423884969653287101");
console.log(res);