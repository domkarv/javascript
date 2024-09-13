function binarySearch(
  nums: number[],
  target: number,
  start: number,
  end: number
): number {
  if (end < start) return -1;

  let mid = start + Math.floor((end - start) / 2);

  if (nums[mid] === target) return mid;

  if (nums[mid] > target) return binarySearch(nums, target, start, mid - 1);

  return binarySearch(nums, target, mid + 1, end);
}

const nums = [2, 7, 11, 15, 34, 52, 56, 65, 74, 98];

console.log(binarySearch(nums, 34, 0, nums.length - 1));
