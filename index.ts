function linearSearch(nums: number[], target: number): number {
  return nums.findIndex((val) => val === target);
}

const nums = [2, 7, 11, 15, 34, 56, 52, 74, 56, 3];

console.log(linearSearch(nums, 65));
