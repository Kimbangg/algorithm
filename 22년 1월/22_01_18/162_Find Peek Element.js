/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  if (nums.length <= 1) return 0;

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const pivot = Math.floor((left + right) / 2);
    const num = nums[pivot];
    const nextNum = nums[pivot + 1];

    if (num < nextNum) {
      left = pivot + 1;
    } else {
      right = pivot;
    }
  }

  return left;
};
