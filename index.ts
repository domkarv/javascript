function twoSum(nums: number[], target: number): number[] {
  const mapp = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const needed = target - nums[i];

    const num = mapp.get(needed);

    if (num !== undefined) {
      return [num, i];
    }

    mapp.set(nums[i], i);
  }

  return [];
}

const nums = [2, 7, 11, 15];

console.log(twoSum(nums, 9));
