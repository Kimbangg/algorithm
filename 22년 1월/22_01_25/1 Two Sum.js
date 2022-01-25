// Hash Map
var twoSum = function (nums, target) {
  const prev = [];

  for (let i = 0; i < nums.length; i++) {
    const tmp = target - nums[i];

    if (tmp in prev) {
      return [prev[tmp], i];
    }

    prev[nums[i]] = i;
  }

  return null;
};

// not using Hash Map
var twoSum = function (nums, target) {
  let leftIdx = 0;
  let rightIdx = nums.length - 1;
  const numsWithIdx = [];

  nums.forEach((num, idx) => {
    numsWithIdx.push([nums[idx], idx]);
  });

  numsWithIdx.sort((a, b) => a[0] - b[0]);

  while (leftIdx < rightIdx) {
    const leftValue = numsWithIdx[leftIdx][0];
    const rightValue = numsWithIdx[rightIdx][0];

    if (leftValue + rightValue < target) {
      leftIdx += 1;
    } else if (leftValue + rightValue > target) {
      rightIdx -= 1;
    } else {
      return [numsWithIdx[leftIdx][1], numsWithIdx[rightIdx][1]];
    }
  }
};
