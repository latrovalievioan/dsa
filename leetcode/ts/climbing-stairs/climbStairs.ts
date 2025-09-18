// Solve with recursion (top down)
function climbStairsRec(n: number, memo: Record<number, number> = {}): number {
    if (n in memo) {
        return memo[n];
    }

    if (n <= 1) {
        return 1;
    }

    memo[n] = climbStairsRec(n - 1, memo) + climbStairsRec(n - 2, memo);

    return memo[n];
}

console.log(climbStairsRec(40));

// Solve with tabulation (bottom up)
function climbStairsTab(n: number): number {
    if(n <= 1) {
        return 1
    }

    const dp = new Array(n + 1).fill(0)

    dp[0] = 1
    dp[1] = 1
    
    for(let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }

    return dp[n]
}

console.log(climbStairsTab(40));

