/*https://leetcode.com/problems/jewels-and-stones/description/ */

//approach 1-brute force
function newJewelsInStones(jewels, stones) {
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    for (j = 0; j < jewels.length; j++) {
      if (jewels[j] === stones[i]) {
        count++;
        break;
      }
    }
  }
  return count;
}

//approach 2-hashmap
function newJewelsInStones2(jewels, stones) {
  let count = 0;
  let jewelSet = new Set();
  for (let i = 0; i < jewels.length; i++) {
    jewelSet.add(jewels[i]);
  }
  for (let i = 0; i < stones.length; i++) {
    if(jewelSet.has(stones[i])) count++;
  }
  return count;

}


let res1 = newJewelsInStones2("aA", "aAAbbbb");
let res2 = newJewelsInStones2("z", "ZZ");
console.log(res1, res2);

