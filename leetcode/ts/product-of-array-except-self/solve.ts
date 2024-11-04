//alone solution
//used hint 1 from leetcode and read what is prefix and suffics product
// O(n) time and O(1) space babyy
function productExceptSelf(nums: number[]): number[] {
    const result = []

    let prefixAcc = 1
    for(let i = 0; i < nums.length; i++){
        result[i] = prefixAcc
        prefixAcc *= nums[i]
    }

    let suffixAcc = 1
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= suffixAcc
        suffixAcc *= nums[i]
    }

    return result
};

console.log(productExceptSelf([1,2,3,4]))


//1,2,3,4
