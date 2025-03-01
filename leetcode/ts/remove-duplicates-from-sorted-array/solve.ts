function removeDuplicates(nums: number[]): number {
    let uniques = 1;

    for (let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[i - 1]) {
            nums[uniques] = nums[i]
            uniques++
        }
    }

    console.log(nums);

    return uniques;
}

console.log(removeDuplicates([1,2,2, 4, 6,6,7,10,10,123]));
