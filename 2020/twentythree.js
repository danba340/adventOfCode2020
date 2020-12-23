const testInput = `389125467`;

const input = `467528193`;

const takeThree = (cups, current) => {
  let index = cups.indexOf(current);
  const taken = [];
  const indexes = [];
  index = (index + 1) % cups.length;
  taken.push(cups[index]);
  indexes.push(index);
  index = (index + 1) % cups.length;
  taken.push(cups[index]);
  indexes.push(index);
  index = (index + 1) % cups.length;
  taken.push(cups[index]);
  indexes.push(index);
  return [taken, indexes];
};

const getLargest = (cups) => {
  const copy = [...cups];
  return copy.sort((a, b) => b - a)[0];
};

const getPlacementIndex = (cups, current, taken) => {
  let destinationValue = current - 1;
  if (destinationValue < 1) {
    return cups.indexOf(getLargest(cups));
  }
  if (
    !cups.find((cup) => cup === destinationValue) &&
    !taken.find((cup) => cup === destinationValue)
  ) {
    return cups.indexOf(getLargest(cups));
  }
  if (!taken.find((cup) => cup === destinationValue)) {
    return cups.indexOf(destinationValue);
  }
  destinationValue -= 1;
  if (destinationValue < 1) {
    return cups.indexOf(getLargest(cups));
  }
  if (!taken.find((cup) => cup === destinationValue)) {
    return cups.indexOf(destinationValue);
  }
  destinationValue -= 1;
  if (destinationValue < 1) {
    return cups.indexOf(getLargest(cups));
  }
  if (!taken.find((cup) => cup === destinationValue)) {
    return cups.indexOf(destinationValue);
  }
  destinationValue -= 1;
  if (destinationValue < 1) {
    return cups.indexOf(getLargest(cups));
  }
  if (!taken.find((cup) => cup === destinationValue)) {
    return cups.indexOf(destinationValue);
  }
};

const simulate = (cups, rounds) => {
  let current = cups[0];
  for (let i = 0; i < rounds; i++) {
    const [taken, takenIndexes] = takeThree(cups, current);
    for (const takenIndex of takenIndexes.sort((a, b) => b - a)) {
      cups.splice(takenIndex, 1);
    }
    const placeIndex = getPlacementIndex(cups, current, taken) + 1;
    cups.splice(placeIndex, 0, ...taken);
    const currentIndex = cups.indexOf(current);
    current = currentIndex < cups.length - 1 ? cups[currentIndex + 1] : cups[0];
  }
};

const getAnswer = (cups) => {
  const indexOf1 = cups.indexOf(1);
  const after1 = cups.slice(indexOf1 + 1);
  const before1 = cups.slice(0, indexOf1);
  return [...after1, ...before1].join('');
};

const cups = input.split('').map((cup) => parseInt(cup));
const result = simulate(cups, 100);
console.log(getAnswer(cups));
console.log(getAnswer(cups));
