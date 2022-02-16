const solution = (n, priceOfCard) => {
  const dp = Array(n).fill(0);

  dp[0] = priceOfCard[0];
  dp[1] = Math.max(priceOfCard[0] * 2, priceOfCard[1]);

  for (let i = 0; i < n; i++) {
    dp[i] = priceOfCard[i];

    for (let j = 0; j < i / 2; j++) {
      dp[i] = Math.max(dp[i], dp[j] + dp[i - j - 1]);
    }
  }

  console.log(dp);
};

const n = 10;
const priceOfCard = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

solution(n, priceOfCard);
