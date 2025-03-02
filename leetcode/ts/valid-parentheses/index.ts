//https://leetcode.com/problems/valid-parentheses/

const OPPOSITES = {
    ")": "(",
    "]": "[",
    "}": "{",
};

const isOpening = (c: string) => {
    return Object.values(OPPOSITES).includes(c);
};

function isValid(s: string): boolean {
    if (s.length % 2 !== 0) return false;

    const stack = [];

    for (const c of s) {
        if (isOpening(c)) {
            stack.push(c);
        } else {
            const popped = stack.pop();

            if (popped !== OPPOSITES[c as ")" | "}" | "]"]) return false;
        }
    }

    return !Boolean(stack.length);
}

console.log(isValid("()[]{}"));
