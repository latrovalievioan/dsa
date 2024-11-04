// https://leetcode.com/problems/contains-duplicate/description/

function containsDuplicate(nums: number[]): boolean {
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    const sizeBefore = set.size;
    set.add(nums[i]);

    if (sizeBefore === set.size) return true;
  }

  return false;
}
