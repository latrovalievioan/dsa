// https://leetcode.com/problems/concatenation-of-array/solutions/
function getConcatenation(nums: number[]): number[] {
    const newArr = Array.from<number>({ length: nums.length * 2 });

    for (let i = 0; i < newArr.length; i++) {
        newArr[i] = nums[i % nums.length];
    }

    console.log(newArr);

    return newArr;
}

getConcatenation([1, 2, 3]);
