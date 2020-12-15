const inputs = [
  [[1, 3, 2], 1],
  [[2, 1, 3], 10],
  [[1, 2, 3], 27],
  [[2, 3, 1], 78],
  [[3, 2, 1], 438],
  [[3, 1, 2], 1836],
  [[5, 1, 9, 18, 13, 8, 0], '?'],
];

const inputs2 = [
  [[0, 3, 6], 175594],
  [[1, 3, 2], 2578],
  [[2, 1, 3], 3544142],
  [[1, 2, 3], 261214],
  [[2, 3, 1], 6895259],
  [[3, 2, 1], 18],
  [[3, 1, 2], 362],
  [[5, 1, 9, 18, 13, 8, 0], '?'],
];

const countOccurrences = (arr, val) =>
  arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

const run = (starting, end) => {
  const spoken = [...starting];
  while (spoken.length < end) {
    const lastSpoken = spoken[spoken.length - 1];

    if (countOccurrences(spoken, lastSpoken) === 1) {
      spoken.push(0);
    } else if (countOccurrences(spoken, lastSpoken) > 1) {
      const lastIndexOfSpoken = spoken
        .slice(0, spoken.length - 1)
        .lastIndexOf(lastSpoken);
      spoken.push(spoken.length - lastIndexOfSpoken - 1);
    }
  }
  return spoken[spoken.length - 1];
};

const run2 = (starting, end) => {
  const spoken = {};
  let count = 0;
  for (const [index, number] of starting.entries()) {
    spoken[number] = [count];
    count++;
  }
  let lastSpoken = starting[starting.length - 1];
  while (count < end) {
    if (spoken[lastSpoken].length === 1) {
      if (spoken[0]) {
        spoken[0].push(count);
      } else {
        spoken[0] = [count];
      }
      lastSpoken = 0;
    } else if (spoken[lastSpoken].length > 1) {
      const last = spoken[lastSpoken][spoken[lastSpoken].length - 1] + 1;
      const lastlast = spoken[lastSpoken][spoken[lastSpoken].length - 2] + 1;
      const newSpoken = last - lastlast;
      if (spoken[newSpoken]) {
        spoken[newSpoken].push(count);
      } else {
        spoken[newSpoken] = [count];
      }
      lastSpoken = newSpoken;
    }
    if (count % 3000000 === 0) {
      console.log(count / 3000000, '%');
    }
    count++;
  }
  return lastSpoken;
};

// P1
for (const input of inputs) {
  console.log(input[0], 'expected:', input[1], 'result:', run2(input[0], 2020));
}
// P2
console.log(
  inputs2[7][0],
  'expected:',
  inputs2[7][1],
  'result:',
  run2(inputs2[7][0], 30000000),
);
console.log('done');
