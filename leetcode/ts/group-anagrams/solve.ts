function groupAnagrams(strs: string[]): string[][] {
    const map = new Map()

    for (let i = 0; i < strs.length; i++) {
        const curr = strs[i]
        const key = genCharMapKey(curr)

        if(map.has(key)) {
            map.set(key, [...map.get(key), curr])
        } else {
            map.set(key, [curr])
        }
    }

    return map
};

const genCharMapKey = (str: string) => {
    const map = new Map()

    for (let i = 0; i < str.length; i++) {
        const char = str[i]

        if(map.has(char)) {
            map.set(char, map.get(char) + 1)
        } else {
            map.set(char, 1)
        }
    }

    return [...map.entries()].map(x => x.join('')).join('')
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
