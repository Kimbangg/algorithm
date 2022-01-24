// 순서정렬 중복
var findDuplicate = function (nums) {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) return nums[i];
  }
};

// 객체 ( 시간: O(n), 공간: O(n) )
var findDuplicate = function (nums) {
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = obj[nums[i]] ? obj[nums[i]] + 1 : 1;
  }

  for (const key in obj) {
    if (obj[key] >= 2) return Number(key);
  }
};

// 배열 { 시간 : O(n), 공간: O(1) }
var findDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const cur = Math.abs(nums[i]);

    if (nums[cur] >= 0) {
      nums[cur] = nums[cur] * -1;
    } else {
      return cur;
    }
  }
};
