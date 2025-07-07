/*https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/ */
let prices = [2, 1, 2, 0, 1];
function maxProfit(prices) {
  let min = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }
    if (prices[i] - min > maxProfit) {
      maxProfit = prices[i] - min;
    }
  }
  return maxProfit;
}

let res = maxProfit(prices);
console.log(res);
