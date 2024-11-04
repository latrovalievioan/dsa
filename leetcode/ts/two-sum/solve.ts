// https://leetcode.com/problems/two-sum/description/

function twoSum(nums: number[], target: number): number[] {
    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i]
        const lookingFor = target - curr

        if(map.has(lookingFor)) {
            return [map.get(lookingFor), i]
        }

        map.set(curr, i)
    }

    return []
};
