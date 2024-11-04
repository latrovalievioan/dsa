// https://leetcode.com/problems/majority-element/description/

function majorityElement(nums: number[]): number {
    const map = new Map()
    
    for (let i = 0; i < nums.length; i++) {
        if(map.has(nums[i])) map.set(nums[i], map.get(nums[i]) + 1)
        else map.set(nums[i], 1)

        if(map.get(nums[i]) >= nums.length / 2) return nums[i]
    }

    return -1
};

// 0(1) space solution (boyer-moore majority algorithm):

const majorityElement_(nums: number[]): number => {
    let result = nums[0]
    let count = 1

    for (let i = 1; i < nums.length; i++) {
        const curr = nums[i]

        if(curr === result) {
            count++
        } else if (curr !== result && count > 0) {
            count--
        } else {
            result = curr
            count = 1
        }
    }

    return result
}
