const threeSum = nums => {
  if (nums.length === 0 || nums.length <= 2) return [];

  const result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum > 0) {
        right -= 1;
      } else if (sum < 0) {
        left += 1;
      } else {
        result.push([nums[i], nums[left], nums[right]]);

        while (nums[left] === nums[left + 1]) {
          left += 1;
        }

        while (nums[right] === nums[right - 1]) {
          right -= 1;
        }

        left += 1;
        right -= 1;
      }
    }
  }

  return result;
};
