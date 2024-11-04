import { getBoxIndexes, getFlattenedIndex, isValidSudoku } from "./solve";

describe("Get box indexes util", () => {
  test("Returns correct row and column index", () => {
    expect(
      getBoxIndexes({
        boxSize: 3,
        i: 3,
        j: 2,
      }),
    ).toStrictEqual({ i: 1, j: 0 });

    expect(
      getBoxIndexes({
        boxSize: 3,
        i: 5,
        j: 3,
      }),
    ).toStrictEqual({ i: 1, j: 1 });

    expect(
      getBoxIndexes({
        boxSize: 3,
        i: 0,
        j: 0,
      }),
    ).toStrictEqual({ i: 0, j: 0 });
  });
});

describe("Get flattened index util", () => {
  test("Returns correct flattened index", () => {
    expect(
      getFlattenedIndex({
        boxSize: 3,
        i: 0,
        j: 0,
      }),
    ).toBe(0);
  });

  test("Returns correct flattened index", () => {
    expect(
      getFlattenedIndex({
        boxSize: 3,
        i: 2,
        j: 2,
      }),
    ).toBe(8);
  });

  test("Returns correct flattened index", () => {
    expect(
      getFlattenedIndex({
        boxSize: 4,
        i: 2,
        j: 1,
      }),
    ).toBe(9);
  });

  test("Returns correct flattened index", () => {
    expect(
      getFlattenedIndex({
        boxSize: 4,
        i: 1,
        j: 3,
      }),
    ).toBe(7);
  });
});

describe("Common edge cases", () => {
  test("Is valid with one number", () => {
    expect(isValidSudoku([["1"]])).toBe(true);
  });

  test("Is valid with no numbers", () => {
    expect(isValidSudoku([["1"]])).toBe(true);
  });
});

describe("Check lines", () => {
  test("Is valid with different numbers in the same line", () => {
    expect(
      isValidSudoku([
        ["1", "2", "3"],
        ["5", "6", "7"],
        ["8", "9", "10"],
      ]),
    ).toBe(true);
  });

  test("Is invalid with repeated numbers in the same line", () => {
    expect(
      isValidSudoku([
        ["1", "2", "1"],
        ["5", "6", "7"],
        ["8", "9", "10"],
      ]),
    ).toBe(false);
  });

  test("Is valid with repeated dots", () => {
    expect(
      isValidSudoku([
        [".", ".", "1"],
        ["5", "6", "7"],
        ["8", "9", "10"],
      ]),
    ).toBe(true);
  });
});

describe("Check columns", () => {
  test("Is valid with different numbers in the same column", () => {
    expect(
      isValidSudoku([
        ["1", "2", "3"],
        ["4", "5", "6"],
        ["7", "8", "9"],
      ]),
    ).toBe(true);
  });

  test("Is invalid with repeated numbers in the same column", () => {
    expect(
      isValidSudoku([
        ["1", "2", "3"],
        ["4", "2", "6"],
        ["7", "8", "9"],
      ]),
    ).toBe(false);
  });

  test("Is valid with repeated dots", () => {
    expect(
      isValidSudoku([
        ["1", ".", "3"],
        ["4", ".", "6"],
        ["7", ".", "9"],
      ]),
    ).toBe(true);
  });
});

describe("Solution", () => {
  test("Test with valid sudoku", () => {
    expect(
      isValidSudoku([
        ["5", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"],
      ]),
    ).toBe(true);
  });

  test("Test with invalid sudoku", () => {
    expect(
      isValidSudoku([
        ["8", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"],
      ]),
    ).toBe(false);
  });

  test("Test with case i've failed", () => {
    expect(
      isValidSudoku([
        [".", ".", "4", ".", ".", ".", "6", "3", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        ["5", ".", ".", ".", ".", ".", ".", "9", "."],
        [".", ".", ".", "5", "6", ".", ".", ".", "."],
        ["4", ".", "3", ".", ".", ".", ".", ".", "1"],
        [".", ".", ".", "7", ".", ".", ".", ".", "."],
        [".", ".", ".", "5", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
      ]),
    ).toBe(false);
  });
});
