/*https://leetcode.com/problems/find-most-frequent-vowel-and-consonant/description/ */

function maxFreqSum(s) {
  //string string characters and frequencies in a hashmap/object
  let map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = !map[s[i]] ? 1 : ++map[s[i]];
  }

  let vowels = ['a','e','i','o','u'];
  let maxVowel = 0;
  let maxConsonant = 0;
  let mapKeys = Object.keys(map);
  //iterate through map and find maxVowel and maxConsonant
  for(let i=0;i<mapKeys.length;i++)
  {
    let j;
    for(j=0;j<vowels.length;j++)
    {
      if(mapKeys[i] === vowels[j])
      {
        maxVowel = Math.max(map[mapKeys[i]],maxVowel);
        break;
      }
    }
    if(j===vowels.length)
    {
      maxConsonant = Math.max(map[mapKeys[i]],maxConsonant);
    }
  }
  return maxVowel+maxConsonant;
}

let res = maxFreqSum("successes");
console.log(res);
