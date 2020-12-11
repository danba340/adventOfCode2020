const seats = [
  'LLLLL.L.LLLLLLL.LL.LLLLL.LLLLLLL..LLLLL.LLLLL.L..LLLLL..LLLLLLLL.LLLL.LLL.LLLLLLL.LLLLLLLLLL',
  'LLLLLLL.LLLLL..LLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLL.LLLLLL.LL.LLLLLLLLL.LLLLLL.LLLLLLLLLL',
  'LLLL.LLLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLLL.LLLLLL.LLLL.LLLLL',
  'LLLLLL.LLLLLLLLLLLLLLLL.LLLLLL.LLLLLLLL.L.LLL.LLLLLLLL.LLLLLL.LLLLLLLLLLLL.LLLLLL.LLLL.LLLLL',
  'LLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLL.LLL.L.LLLLLLLL.LLLLLLLLL.LLLLLLLL..LLLLLLLLLLLLL.LLL',
  'LLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLL.LLLLLL.LLLLL.LL.LLLLLL.LLLLL.LL.LLLLLLLLL..LLLLLLLLLLLLLLLL',
  'L.....L.....LL.LL.L.L..L............L.L.L.........L...L...LLLL..L.....L.L.L.....L.LLLL.....L',
  'LLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLL..LLLLL.LLLLLLLL.LLLLL.LLL.LLLLL.LLLLLLLLL.LLLLLLLLLL.LLLLLL',
  '.LLLLLLLLLLLL.LLLLLLLLLLLLLLLLLL.LLLL.LLLLLLLLL.LLLLLL.LLL.LLLLL.LLLLLLLLL.LLLLLL.LLLLL.L.LL',
  'LLLL.LL.LLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLL',
  'LL.LLL..LLLLL.LLLLLLL.L.LLLLLLLL.LLLLLL.LLLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLLL',
  'LLLLLLLLLLLLL..LLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLL..LLLLLLL..LLLLLLLLL.LLLLLL.LLLLLLLLLL',
  'LLLLLL..LLLLLLLLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLLLLL',
  'LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLL.LLLLLL.LLL.LLLL.LLL.LLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLL',
  'LLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLL.LL.LLLLLLLLLLLLLLLLL.LLL.LLLLLLLLL.L.LLLL.LLLL.LLLLL',
  'LLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLL.LLLLLL.LLLLL.LLLLLLLL.L.LLLLLLLLLLLLLLLL..LLLLLL.LLLLLLLLLL',
  'L..L..L.L.LLL.....L......LL.L.LL.L.LL....L.....LL..LL..LL...L....L.L.L......L..L.L.LL..LLLLL',
  'LLLLLLL.LLLLL.LLLLLLL.L.LLLL.LLLLLLLLLL.LLLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLL',
  'LLLLLLLLLLLLL.LLLLLLLLL.LLLLLLL..LLLLLLLL.LLLLLL..LLLLLLLLLLLLLL.L.LLLLLLLLLLLLLL.LLLLLLLLLL',
  'LLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLL.L.LLLLLL.LLLLLLLL.L',
  'LLLLLLL.LLLLL.LLLLLLLLLLLLL.LLLL.LLLLLL.LLLLLLL.LLLLL.LLLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLL.',
  'LLLLL.LLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLL..LLLLLLLL.LLL.L.LLLLLL.LLL.LLLLLLLL.LLLLLL..LLLLLLLLL',
  'LLLLL.LLLLL.L.LLLLL.LLL.LLLLLLLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLLL.LLL.LLLLLLLLLLLL.LLLLLLLLLL',
  'LLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLL.LLL.LL.LLLLLLLLLL',
  '..LL..L.L..LL..L..LL...LLL.L.L.L.......L........L........L.L......L.L..LL...L..LLLLL..L.....',
  'LLLLLLL.LLLLL.LLLLLL.L..L.LLLLLL.LLLLLL.LLLLL.LLLLLLLL.LLLLLLLLL.LLLLLLLLL.LLLLLL.LLLLLLLLLL',
  'LLLLLLLLLL.LL.LLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLL.L.LLLLLLL.LLLLLLL.LLL.LLLL.LLLLLLL.LL',
  'LL.LLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLL.LL.L',
  'LLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLLLL.LLLL.LLLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLL',
  'LLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLL.LLLLL.LLLL.LLLLL.LLLLLLLLLLLL.LLLLLL.LLLLLL.LLLLLLLLLL',
  'LLLLLLL.LLL.LLLLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLLLLL.LLLLLL.LLLLLLLL',
  '..LLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLL.LLLLL.LLLLL.LLL.LLLLLLLLL.LLL.LL.LLLLLLLLLL',
  'LLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLL.LLLLLL.LLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLLL',
  '....L...L.....L.....LLLL......L.L......L........LL...L....LLLL....LL......LL...........L.L.L',
  'LLLLLLL.LLLLLLLLLLLL.LL.L.LL.LLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLL.LL.LL..LLLLLLLLLL',
  'LLLL.LL.L.LLL.LLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLLL.L.LLL.LLLLLLLLL.LLLLLLLLL.LLLLLL.LLLLL.LLLL',
  'LLLLLLL.LLLLL..LLLLLLLL.LLLLLLLL.LLLLL..LLLLL.LLL.LLLLLLLLLLLLLL.LLLLLLLLL.LLLL.LLLLLLLLLLLL',
  'LLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLL.LLLLL...LLLLLLLLLL.LL.LLLLLLLLLLLLLLLLL.L..LLLLL.LLLLLLLLLL',
  'LLLLLLL.LLLLLLLLLLLLLLL..LLL.LL..LLL....LLLLLLLL.LLLLL.LLLLLLLLLLLLL.LLLLL.LLLLLL.LLLLL.LLLL',
  'LLLLLLL.LLLLLLLL.LLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLLLL..LLLLLLL.LLLLLL.LLLLLLLLLL',
  'LL.LLLLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLL.LLLLLLLL.LLLLL.LLLLLLL.L.LLLLLLLLLLLLLLLLLLLLLLLLLLL',
  'L.LLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLLLLL.LLL.LLLLL.LLLL.LLLL.LLLLLLLLL.LL.LL..LLLLLLLLLL',
  'LL......L.....LL....L.L..L.L.L..L..L......LL...L.L.L.LL..LLLL.LLL....L..L...L...L..L.LLL..L.',
  'LLLLLL.LL.LLLLLLLLLLLLL.LLLLLLLL.LLLLLL.LLLLLLLL.LLL.LLLLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLLL',
  'LLLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLLL.LLL.LLLLLLLLLLLLLLLLLLLLLLL',
  'LLLLLLL.LLLLL.LLLLLLLL..LLLLLLLL.LLLLLLLLLLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLL',
  'LLLL.LL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.L.LLLLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLL',
  'LLLLLLL.LLL.LLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLLL..LLLL.LLLLLLLLLL.LLLLLL.LLL.LL.L.LLLLLLLL.L',
  'LLLLLLL.LLLLL.LLLL.LLLLLLLLLLLLL.LL..LLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.L',
  'LLLLL.LLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLL.LLLLLLLLLL',
  'LLL..LLLLLLLL.LLLLLLLLLLLLLL.LLL.LLLL.LLLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLL',
  '.....L....L.......L...L..LL.LL.LL.L.L.L..L..L..LLL..L.......LL.LL..LL......LL.L..L....L.....',
  'LL.LLLL.LLLLL.LLLLLLLLL.LLLLL..LLLLLLLL..LLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLLL.LLLLLL.LLLL..LLLL',
  'LLLLL.L.LLLLL.LLLLLLLLL.LLLLLLLL.LLLLLL.LLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLL.LLLLLL.LLLLLLLLLL',
  'LLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLL.LLLLLL.LLLLLLLL.LLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLL.LLLLLLL',
  'LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLL.LLLLL..LLLLLLLLLLLLLL.LLLLLLLLL.L.LLLLLLLLLLLLLL.LLLLLLLLLL',
  'LLLLLLL.LLLLL.LLLLLLLLL.L.LLL.LL.LLLLLL.LLLLLLLL.LL..LLLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLLLLL',
  '.....LL.....L.L...............L..........LLL................LLLL.....L.L............L..L..LL',
  'LLLLLL..LLL.L.LLLLLLLLLLLLLL.LLL.LL.LLL.LLLLLLLLLLL.LL.LLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLL',
  'LLL.LLL.LLLLL.LLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLL.LLL.LLLL.LLLLL.LLLLLLLLLL..LLLLL.LLLLLLLL.L',
  'LLLLLL..LLLLL.LLLL.LLLL.LLLLLLLL.LLLL.L.LLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLL',
  'LLLLLLL.LLLLLLLLL.LLLLL.LLLLLLLL.LLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLL..LLLLLLLLLLLL.LLLLLLLLLL',
  'LLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLLLLLLLLL.L.LLLLLL.LLLLL.LLLLLLLLL..LLL.LLLLLLLLLLLLLLLLLLLLLL',
  '.L.L.L.......L...LL....LLL.L.....LL..L.L..LLLL......L.LL......L.L.L.....LL...L....L..L.LL..L',
  'LLLLLLL.L.LLL.LLLLLL.LL.LLLL.LLL.LLLLLL.LLLLLLLL.L..L.L.LLLLLLLL.LLLLLLLLL.LLL..LLLLL.LLLLLL',
  'LLLLLL..LLLLL.LLLLLLLLL.L.LLLLLL.LLLLLL.LLLLLLLL.LLLLL.LLLLLLLLLL..LLLLLLL.LLLLLL.LLLLLLLLLL',
  'LLLLLLLLLLLL..LLLLLLLLL.L.LLLLLLL.LLLLL.LLLL.LLL.LLLLL.LLLLLLLLL.LLLLLLLLL.LLLLLL.LLLLLLLLLL',
  'LLLLLLL.LLLLL.LLLLLLL.L.LLLLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLLL.LLLLLL.LLLLLLLLLL',
  'LLLL.LL.LLLLL.LLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLL.LLLLL.LLL.LLLLLLLLLLLLLLLL.LLLLLLLLLL',
  'LLLLL.L.LLLLL.LLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLL.LLL.',
  'L.......LL.....L..L....LLL..L..LL....LL....L.LL.......LLL.....LL.L...LLLLL..L..LL.LL.LL..LL.',
  'LLL.LLLLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLLL.LLLLLL.L.LLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLL',
  'LLLLLLL.LL.LL.LLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLL...LLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL',
  'LLLLLLL.LLL.L.L.LLLLLLLLLLLLL.LLLLLLLL..LLLLLLL..LL.LLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLL.LLLLLLL',
  'LLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLL..LLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLL.LLLLLLLLLL',
  'LLLLLLL.LLLLL.LLLL.LLLL.LLLLLLLL.LL..LL.LLLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLL.LLLL.LLLLL',
  'L.LLLLL.LLLLLLLLLLLLLLL.LLLLLL.L.LLLLLL.LLLLLLLL.LLLLL.LLLLLLLLL.LLL.LLLLLLLLLLLLLLLLLL.L.LL',
  'LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.L.LLLL.LLLLLLLLL.L.L..LLLL.LLLL.LLLLL.LLLLLLLLLL.LL.LLLLLLL',
  'LLLLLLLLLLLLLLLLLLL.LLL.LLLLLLLL.LLLLL..LLLLLLLL.LLL.L.LLLL.LLL..LLLLLLLLLLLLLLLLLLLL.LLLLLL',
  '.L..LL...LL...L..LL......L.LLLL.L...L.LL..LLL............LL....LL.LL..L..L...L...L...L...LL.',
  'LL.LLLL.LLLLLL.LLLLLL.L.LLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLLLL.LLLLLLLLLLLLLLL.L',
  'LLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLL.',
  'LLLLLLL.LLLLL.LLLLLLLLL.LLLLL.L..LLLLLLL.LLLLLL..LLLLL.LLLLLLLLL.LL.LLLLLL.LL.LL.LLLLLLLLLLL',
  'LLL.LLL.LLLLL.LLL.LLLLL.LLLLLLL.LLLLLLL.L.LLLLLL.LLLLLLLLLL.LLLL.LLLLLLLLLL.LLLLLLLLLLLLLLLL',
  'LLLLLLL.LLLLL..L.LLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLL.LLLLL..LLLLLLLLLL',
  'LLLLLLL.LLLLLLLLLLLLLLL..L.LLL.L.LLLLLL.LLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLL.LLLLLL.LLLLLLLLLL',
  'LLLLLLL.LLLLLLLLLLLLLLLLLL.LLLLL.LLLLLL.LLL.L.LLLLLLLL.LLLLLLL.L..LLLLLLLL.LLLL.L.LLLLLLLLLL',
  'LLLLLLLLLLLLL.L.LLLLLL.LLLLLLLLL.LLLLLL.LLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLLL.LLLLLL.LLLL.LLLL.',
  'LLLLLLLLLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLL.LLLLLLLLLLLLL.LLLLL.LLLLLL..LLLLLLLLL',
  'LLLLLLL.LL.LL.LLLLLLLLL.LLLLLLLLLLLLLLL.L.LLLLLL.LLLLL.LLLLLLLLL.LLLLLLL.L.LLLLLLLLLLLLLLLLL',
];

const seats2 = [
  'L.LL.LL.LL',
  'LLLLLLL.LL',
  'L.L.L..L..',
  'LLLL.LL.LL',
  'L.LL.LL.LL',
  'L.LLLLL.LL',
  '..L.L.....',
  'LLLLLLLLLL',
  'L.LLLLLL.L',
  'L.LLLLL.LL',
];

const seats3 = [
  'L.LL.LL.LL',
  'LLLLLLL.LL',
  'L.L.L..L..',
  'LLLL.LL.LL',
  'L.LL.LL.LL',
  'L.LLLLL.LL',
  '..L.L.....',
  'LLLLLLLLLL',
  'L.LLLLLL.L',
  'L.LLLLL.LL',
];

const getAdjacentFreeMap = (seats) => {
  return seats.map((row, y) => {
    let adjacentsRow = '';
    for (const [x, seat] of [...row].entries()) {
      if (seats[y][x] === '.') {
        adjacentsRow += '.';
        continue;
      }
      let adjacent = 0;
      // can check to the left
      if (x > 0) {
        if (seats[y][x - 1] === 'L') {
          adjacent++;
        }
        // can check top left
        if (y > 0) {
          if (seats[y - 1][x - 1] === 'L') {
            adjacent++;
          }
        }
        // can check bottom left
        if (y < seats.length - 1) {
          if (seats[y + 1][x - 1] === 'L') {
            adjacent++;
          }
        }
      }
      // can check to the right
      if (x < row.length - 1) {
        if (seats[y][x + 1] === 'L') {
          adjacent++;
        }
        // can check top right
        if (y > 0) {
          if (seats[y - 1][x + 1] === 'L') {
            adjacent++;
          }
        }
        // can check bottom right
        if (y < seats.length - 1) {
          if (seats[y + 1][x + 1] === 'L') {
            adjacent++;
          }
        }
      }
      // can check above
      if (y > 0) {
        if (seats[y - 1][x] === 'L') {
          adjacent++;
        }
      }
      // can check below
      if (y < seats.length - 1) {
        if (seats[y + 1][x] === 'L') {
          adjacent++;
        }
      }
      adjacentsRow += adjacent;
    }
    return adjacentsRow;
  });
};

const getAdjacentOccupiedMap = (seats) => {
  return seats.map((row, y) => {
    let adjacentsRow = '';
    for (const [x, seat] of [...row].entries()) {
      if (seats[y][x] === '.') {
        adjacentsRow += '.';
        continue;
      }
      let adjacent = 0;
      // can check to the left
      if (x > 0) {
        if (seats[y][x - 1] === '#') {
          adjacent++;
        }
        // can check top left
        if (y > 0) {
          if (seats[y - 1][x - 1] === '#') {
            adjacent++;
          }
        }
        // can check bottom left
        if (y < seats.length - 1) {
          if (seats[y + 1][x - 1] === '#') {
            adjacent++;
          }
        }
      }
      // can check to the right
      if (x < row.length - 1) {
        if (seats[y][x + 1] === '#') {
          adjacent++;
        }
        // can check top right
        if (y > 0) {
          if (seats[y - 1][x + 1] === '#') {
            adjacent++;
          }
        }
        // can check bottom right
        if (y < seats.length - 1) {
          if (seats[y + 1][x + 1] === '#') {
            adjacent++;
          }
        }
      }
      // can check above
      if (y > 0) {
        if (seats[y - 1][x] === '#') {
          adjacent++;
        }
      }
      // can check below
      if (y < seats.length - 1) {
        if (seats[y + 1][x] === '#') {
          adjacent++;
        }
      }
      adjacentsRow += adjacent;
    }
    return adjacentsRow;
  });
};

const seatMapEquality = (map1, map2) => {
  return map1.every((row, index) => {
    return row === map2[index];
  });
};

const createNextSeatMap = (seats, adjacentOccupiedMap) => {
  const newSeats = seats.map((row) => {
    return [...row];
  });
  for (const [y, row] of newSeats.entries()) {
    for (const [x, seat] of row.entries()) {
      if (seat === 'L' && parseInt(adjacentOccupiedMap[y][x]) === 0) {
        newSeats[y][x] = '#';
      } else if (seat === '#' && parseInt(adjacentOccupiedMap[y][x]) >= 4) {
        newSeats[y][x] = 'L';
      }
    }
  }
  return newSeats.map((row) => {
    return row.join('');
  });
};

const getResolvedSeatMap = (seats) => {
  let currentSeats = [...seats];
  let adjacentOccupiedMap = getAdjacentOccupiedMap(seats);
  let nextSeatMap = createNextSeatMap(seats, adjacentOccupiedMap);
  while (!seatMapEquality(currentSeats, nextSeatMap)) {
    adjacentOccupiedMap = getAdjacentOccupiedMap(nextSeatMap);
    currentSeats = [...nextSeatMap];
    nextSeatMap = createNextSeatMap(nextSeatMap, adjacentOccupiedMap);
  }
  return nextSeatMap;
};

const countOccupiedSeats = (seats) => {
  return seats.reduce((acc, row) => {
    return (
      acc +
      [...row].reduce((acc, seat) => {
        return acc + (seat === '#' ? 1 : 0);
      }, 0)
    );
  }, 0);
};

const occupiedInDirection = (seats, startX, startY, dir) => {
  let x = startX;
  let y = startY;
  if (dir === 'up') {
    while (y - 1 >= 0) {
      if (seats[y - 1][x] === '#') {
        return true;
      } else if (seats[y - 1][x] === 'L') {
        return false;
      }
      y--;
    }
    return false;
  } else if (dir === 'upright') {
    while (y - 1 >= 0 && x + 1 <= seats[0].length - 1) {
      if (seats[y - 1][x + 1] === '#') {
        return true;
      } else if (seats[y - 1][x + 1] === 'L') {
        return false;
      }
      y--, x++;
    }
    return false;
  } else if (dir === 'right') {
    while (x + 1 <= seats[0].length - 1) {
      if (seats[y][x + 1] === '#') {
        return true;
      } else if (seats[y][x + 1] === 'L') {
        return false;
      }
      x++;
    }
    return false;
  } else if (dir === 'downright') {
    while (y + 1 <= seats.length - 1 && x + 1 <= seats[0].length - 1) {
      if (seats[y + 1][x + 1] === '#') {
        return true;
      } else if (seats[y + 1][x + 1] === 'L') {
        return false;
      }
      y++, x++;
    }
    return false;
  } else if (dir === 'down') {
    while (y + 1 <= seats.length - 1) {
      if (seats[y + 1][x] === '#') {
        return true;
      } else if (seats[y + 1][x] === 'L') {
        return false;
      }
      y++;
    }
    return false;
  } else if (dir === 'downleft') {
    while (y + 1 <= seats.length - 1 && x - 1 >= 0) {
      if (seats[y + 1][x - 1] === '#') {
        return true;
      } else if (seats[y + 1][x - 1] === 'L') {
        return false;
      }
      y++, x--;
    }
    return false;
  } else if (dir === 'left') {
    while (x - 1 >= 0) {
      if (seats[y][x - 1] === '#') {
        return true;
      } else if (seats[y][x - 1] === 'L') {
        return false;
      }
      x--;
    }
    return false;
  } else if (dir === 'upleft') {
    while (y - 1 >= 0 && x - 1 >= 0) {
      if (seats[y - 1][x - 1] === '#') {
        return true;
      } else if (seats[y - 1][x - 1] === 'L') {
        return false;
      }
      y--, x--;
    }
    return false;
  } else {
    console.log('Warning');
  }
};

const getSeenOccupiedMap = (seats) => {
  const directions = [
    'up',
    'upright',
    'right',
    'downright',
    'down',
    'downleft',
    'left',
    'upleft',
  ];
  return seats.map((row, y) => {
    let countsRow = '';
    for (const [x, seat] of [...row].entries()) {
      if (seats[y][x] === '.') {
        countsRow += '.';
        continue;
      }
      const occupiedDirections = directions.filter((dir) =>
        occupiedInDirection(seats, x, y, dir),
      ).length;
      countsRow += occupiedDirections;
    }
    return countsRow;
  });
};

const createNextSeatMapSeen = (seats, adjacentOccupiedMap) => {
  const newSeats = seats.map((row) => {
    return [...row];
  });
  for (const [y, row] of newSeats.entries()) {
    for (const [x, seat] of row.entries()) {
      if (seat === 'L' && parseInt(adjacentOccupiedMap[y][x]) === 0) {
        newSeats[y][x] = '#';
      } else if (seat === '#' && parseInt(adjacentOccupiedMap[y][x]) >= 5) {
        newSeats[y][x] = 'L';
      }
    }
  }
  return newSeats.map((row) => {
    return row.join('');
  });
};

const getResolvedSeatMapSeen = (seats) => {
  let currentSeats = [...seats];
  let adjacentOccupiedMap = getSeenOccupiedMap(seats);
  let nextSeatMap = createNextSeatMapSeen(seats, adjacentOccupiedMap);
  while (!seatMapEquality(currentSeats, nextSeatMap)) {
    adjacentOccupiedMap = getSeenOccupiedMap(nextSeatMap);
    currentSeats = [...nextSeatMap];
    nextSeatMap = createNextSeatMapSeen(nextSeatMap, adjacentOccupiedMap);
  }
  return nextSeatMap;
};

const resolvedSeatMap = getResolvedSeatMap(seats);
console.log(resolvedSeatMap);
const occupiedCount = countOccupiedSeats(resolvedSeatMap);
console.log(occupiedCount);

const resolvedSeatMapSeenOccupied = getResolvedSeatMapSeen(seats);
console.log(resolvedSeatMapSeenOccupied);
const occupiedSeenCount = countOccupiedSeats(resolvedSeatMapSeenOccupied);
console.log(occupiedSeenCount);
