function twoSum(numbers: number[], target: number): number[] {
    let leftP = 0, rightP = numbers.length - 1   

    while(leftP !== rightP) {
        const sum = numbers[leftP] + numbers[rightP]
    
        if(sum === target) return [leftP + 1, rightP + 1]

        if(sum < target) leftP++

        if(sum > target) rightP--
    }

    return []
};

console.log(twoSum([2,7,11,15], 9))
