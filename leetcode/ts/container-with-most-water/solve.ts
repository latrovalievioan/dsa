//alone solution (with leetcode hints)
function maxArea(heights: number[]) {
    let l = 0,
        r = heights.length - 1;
    let max = 0;

    while (l < r) {
        const length = r - l;
        const height = Math.min(heights[r], heights[l]);
        const currentArea = length * height;

        if (currentArea > max) max = currentArea;

        if (heights[l] < heights[r]) l++;
        else r--;
    }

    return max;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
