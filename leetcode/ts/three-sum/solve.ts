// needed some help with the 2nd nested while
function threeSum(nums: number[]): number[][] {
    const result: number[][] = [];

    const sorted = nums.sort((a, b) => a - b);

    for (let i = 0; i < sorted.length - 2; i++) {
        if (nums[i - 1] === sorted[i]) continue;

        let leftP = i + 1,
            rightP = sorted.length - 1;

        while (leftP < rightP) {
            const sum = sorted[i] + sorted[leftP] + sorted[rightP];

            if (sum < 0) {
                leftP++;
            } else if (sum > 0) {
                rightP--;
            } else {
                result.push([sorted[i], sorted[leftP], sorted[rightP]]);
                leftP++;
                rightP--;
                while (leftP < rightP && sorted[leftP] === sorted[leftP - 1]) {
                    leftP++;
                }
            }
        }
    }

    return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

//-4 -1 -1 0 1 2
