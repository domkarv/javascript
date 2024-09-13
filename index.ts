function binarySearch(nums: number[], target: number): number {
  let start = 0;
  let end = nums.length - 1;

  while (end >= start) {
    let mid = start + Math.floor((end - start) / 2);

    if (nums[mid] === target) return mid;

    if (nums[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
}

const nums = [2, 7, 11, 15, 34, 52, 56, 65, 74, 98];

console.log(binarySearch(nums, 34));
