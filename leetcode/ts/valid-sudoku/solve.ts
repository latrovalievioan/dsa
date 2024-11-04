// Alone solution --- 0(N ** 2)
type GetBoxIndexArgs = {
  boxSize: number;
  i: number;
  j: number;
};

export const getBoxIndexes = ({ boxSize, i, j }: GetBoxIndexArgs) => {
  return { i: Math.floor(i / boxSize), j: Math.floor(j / boxSize) };
};

type GetFlattenedIndexArgs = {
  boxSize: number;
  i: number;
  j: number;
};

export const getFlattenedIndex = ({ boxSize, i, j }: GetFlattenedIndexArgs) => {
  return i * boxSize + j;
};

export const isValidSudoku = (board: string[][]): boolean => {
  const columnSets = Array.from({ length: board.length }, () => new Set());

  const boxSets = Array.from({ length: board.length }, () => new Set());

  for (let i = 0; i < board.length; i++) {
    const lineSet = new Set();
    const line = board[i];

    for (let j = 0; j < line.length; j++) {

      const curr = line[j];

      if (curr === ".") {
        continue;
      }

      const { i: boxI, j: boxJ } = getBoxIndexes({ boxSize: 3, i, j });

      const boxIndex = getFlattenedIndex({
        boxSize: 3,
        i: boxI,
        j: boxJ,
      });

      if (
        lineSet.has(curr) ||
        columnSets[j].has(curr) ||
        boxSets[boxIndex].has(curr)
      ) {
        return false;
      }

      lineSet.add(curr);

      columnSets[j].add(curr);

      boxSets[boxIndex].add(curr);
    }
  }

  return true;
};
