// needs to be solved again
function trap(heights: number[]): number {
    let l = 0,
        r = heights.length - 1,
        maxL = heights[l],
        maxR = heights[r];

    let result = 0

    while (l < r) {
        if(maxL <= maxR) {
            l++

            if(maxL - heights[l] > 0) {
                result += maxL - heights[l]
            }

            if(heights[l] > maxL) {
                maxL = heights[l]
            }

        } else {
            r--

            if(maxR - heights[r] > 0) {
                result += maxR - heights[r]
            }

            if(heights[r] > maxR) {
                maxR = heights[r]
            }

        }
    }

    return result
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
