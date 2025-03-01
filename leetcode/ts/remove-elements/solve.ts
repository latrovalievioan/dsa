// https://leetcode.com/problems/remove-element/
function removeElement(nums: number[], val: number): number {
    let occurences = 0;

    for (let i = 0; i < nums.length; i++) {
        if(nums[i] !== val) {
            nums[occurences] = nums[i]
            occurences++
        }
    }

    console.log(nums, occurences)

    return occurences;
}


removeElement([3,2,2,3], 3)
