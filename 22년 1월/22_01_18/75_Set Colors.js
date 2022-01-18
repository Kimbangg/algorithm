/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let i = 0;
  let zeroIdx = 0;
  let twoIdx = nums.length - 1;

  while (i <= twoIdx) {
    if (nums[i] === 0) {
      [nums[zeroIdx], nums[i]] = [nums[i], nums[zeroIdx]];
      i += 1;
      zeroIdx += 1;
    } else if (nums[i] === 2) {
      [nums[i], nums[twoIdx]] = [nums[twoIdx], nums[i]];
      twoIdx -= 1;
    } else {
      i += 1;
    }
  }

  return nums;
};
