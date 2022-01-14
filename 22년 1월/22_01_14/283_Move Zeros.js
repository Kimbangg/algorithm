var moveZeroes = function (nums) {
  let wIdx = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[wIdx], nums[i]] = [nums[i], nums[wIdx]];
      wIdx += 1;
    }
  }

  return nums;
};

var moveZeroes = function (nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.push(...nums.splice(i, 1));
    }
  }
  return nums;
};
