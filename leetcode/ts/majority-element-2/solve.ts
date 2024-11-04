// https://leetcode.com/problems/majority-element-ii/

const majorityElement = (nums: number[]): number[] => {
    if(nums.length < 4 && nums.length % 2 !== 0) {
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

        return [result]
    }

  let result1 = nums[0];
  let result2;
  let count1 = 1;
  let count2 = 0;

  for (let i = 1; i < nums.length; i++) {
    const curr = nums[i];

    if (curr === result1) {
      count1++;
    } else if (curr === result2) {
      count2++;
    } else if (!result2) {
      result2 = curr;
      count2++;
    } else if (count1 < count2 && count1 > 0) {
      count1--;
    } else if (count1 < count2 && count1 <= 0) {
      count1 = 1;
      result1 = curr;
    } else if (count1 > count2 && count2 > 0) {
      count2--;
    } else if (count1 > count2 && count2 <= 0) {
      count2 = 1;
      result2 = curr;
    }
  }

  return [result1, result2 || 0];
};

//[3, 2]
//c 2

// 3 2 2 3 3 2
