// solution alone
function topKFrequent(nums: number[], k: number): number[] {
    const map = new Map()

    for(let i = 0; i < nums.length; ++i) {
        const curr = nums[i]

        if(map.has(curr)) {
            map.set(curr, map.get(curr) + 1)
        } else {
            map.set(curr, 1)
        }
    }

    const sorted = [...map.entries()].sort((a, b) => b[1] - a[1])

    const result = sorted.map(x => x[0])

    return result.slice(0, k)
};

console.log(topKFrequent([3,0,1,0], 1))


// with modified bucket sort
const topKFrequent2 = (xs: number[], k: number) => {
    const map = new Map()

    for(let i = 0; i < xs.length; ++i) {
        const curr = xs[i]

        if(map.has(curr)) {
            map.set(curr, map.get(curr) + 1)
        } else {
            map.set(curr, 1)
        }
    }

    const bucket: number[][] = Array.from({length: xs.length}, () => [])

    for(const [x, freq] of map.entries()) {
        bucket[freq-1].push(x)
    }

    const result: number[] = []

    for(let i = bucket.length - 1; i >= 0; i--){
        if(result.length === k) return result

        result.push(...bucket[i])
    }

    return result
}

console.log(topKFrequent2([1], 1))

//note there is a slight approach with that take
//if at index i of bucket we have 3 elements, but k < 3
//we'll get an invalid answer
