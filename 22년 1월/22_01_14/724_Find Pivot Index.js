/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const sum = nums.reduce((a, b) => a + b, 0);
  let leftSum = 0;
  let rightSum = sum;
  let pastPivotNum = 0;

  for (let i = 0; i < nums.length; i++) {
    rightSum -= nums[i];
    leftSum += pastPivotNum;

    if (leftSum === rightSum) {
      return i;
    }

    pastPivotNum = nums[i];
  }

  return -1;
};
