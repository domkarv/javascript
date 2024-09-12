function linearSearch(nums: number[], target: number): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) return i;
  }

  return -1;
}

const nums = [2, 7, 11, 15, 34, 56, 52, 74, 56, 3];

console.log(linearSearch(nums, 65));
