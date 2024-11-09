// didn't solve it alone O(N), i need to redo this again...
function longestConsecutive(nums: number[]): number {
  const set = new Set(nums);

  let longest = 0;

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];

    if (set.has(curr - 1)) {
      continue;
    }

    let currentLength = 1;

    while (set.has(curr + currentLength)) {
      currentLength++;
    }

    if (currentLength > longest) longest = currentLength;
  }

  return longest;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
