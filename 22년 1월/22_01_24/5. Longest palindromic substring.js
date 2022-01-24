/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (str) {
  if (str.length < 1 || str === null) return '';

  let longest = '';

  const expandFromCenter = (left, right) => {
    while (left >= 0 && right < str.length) {
      if (str[left] !== str[right]) break;

      left -= 1;
      right += 1;
    }

    return str.slice(left + 1, right);
  };

  for (let i = 0; i < str.length; i++) {
    // 삽입하는 인덱스를 어떻게 잡을지도 고민해볼 것.
    let oddPalindrome = expandFromCenter(i, i);
    let evenPalindrome = expandFromCenter(i - 1, i);

    if (oddPalindrome.length > longest.length) {
      longest = oddPalindrome;
    }

    if (evenPalindrome.length > longest.length) {
      longest = evenPalindrome;
    }
  }

  return longest;
};
