/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  const copy = [...nums];
  copy.sort((a, b) => a - b);

  let start = nums.length;
  let end = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== copy[i]) {
      start = Math.min(start, i);
      end = Math.max(end, i);
    }
  }

  return end - start >= 0 ? end - start + 1 : 0;
};
