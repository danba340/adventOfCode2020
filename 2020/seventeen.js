const testInput = `.#.
..#
###`;

const input = `##...#.#
#..##..#
..#.####
.#..#...
########
######.#
.####..#
.###.#..`;

const emptyInitialSlice = [
  ['.', '.', '.'],
  ['.', '.', '.'],
  ['.', '.', '.'],
];

let state = [
  emptyInitialSlice,
  input.split('\n').map((row) => {
    return row.split('');
  }),
  emptyInitialSlice,
];

const countAdjacentActive = (state, checkX, checkY, checkZ) => {
  if (checkX === 1 && checkY === 1 && checkZ === 1) {
    console.log('test');
  }
  let adjacentCount = 0;
  for (const [z, slice] of state.entries()) {
    for (const [y, row] of slice.entries()) {
      for (const [x, position] of row.entries()) {
        if (x === checkX && y === checkY && z === checkZ) {
          continue;
        }
        if (
          Math.abs(x - checkX) <= 1 &&
          Math.abs(y - checkY) <= 1 &&
          Math.abs(z - checkZ) <= 1 &&
          position === '#'
        ) {
          adjacentCount++;
        }
      }
    }
  }
  return adjacentCount;
};

const countActive = (state) => {
  let activeCount = 0;
  for (const slice of state) {
    for (const row of slice) {
      for (const position of row) {
        if (position === '#') {
          activeCount++;
        }
      }
    }
  }
  return activeCount;
};

const getNextState = (state) => {
  const newState = [...state];
  for (const [z, slice] of state.entries()) {
    for (const [y, row] of slice.entries()) {
      for (const [x, position] of row.entries()) {
        const adjacentActive = countAdjacentActive(state, x, y, z);
        if (x === 1 && y === 1 && z === 1) {
          console.log('test');
        }
        if (position === '.' && adjacentActive === 3) {
          newState[z][y][x] = '#';
        } else if (
          position === '#' &&
          adjacentActive !== 2 &&
          adjacentActive !== 3
        ) {
          newState[z][y][x] = '.';
        }
      }
    }
  }
  return newState;
};

const newRow = (size) => {
  return [...new Array(size).fill('.')];
};

const wrapStateInEmptyFields = (state, turn) => {
  const size = state.length;
  let newSlice = [...new Array(size + 2).fill(newRow(size + 2))];

  return [
    newSlice,
    ...[
      //   newRow(size + 2),
      ...state.map((slice) => [
        newRow(size + 2),
        ...slice.map((row) => ['.', ...row, '.']),
        newRow(size + 2),
      ]),
      //   newRow(size + 2),
    ],
    newSlice,
  ];
};

for (let i = 0; i < 6; i++) {
  state = wrapStateInEmptyFields(state);
  state = getNextState(state);
}

console.log(countActive(state));
console.log(countActive(state));
