export const checkLine = (xs: string[]) => {
    const valuesSet = new Set()

    let isValid = true;

    for (let i = 0; i < xs.length; i++) {
        const curr = xs[i]

        if(curr === '.') {
            continue
        }

        if(valuesSet.has(curr)) {
            isValid = false
            break
        }

        valuesSet.add(curr)
    }
}

function isValidSudoku(board: string[][]): boolean {
    
};

console.log(isValidSudoku([
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
]))
