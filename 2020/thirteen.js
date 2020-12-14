const input = `1002618
19,x,x,x,x,x,x,x,x,41,x,x,x,37,x,x,x,x,x,367,x,x,x,x,x,x,x,x,x,x,x,x,13,x,x,x,17,x,x,x,x,x,x,x,x,x,x,x,29,x,373,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,23`;

const input2 = `939
7,13,x,x,59,x,31,19`;

const parseInputWithoutX = (input) => {
  const [departTime, buses] = input.split('\n');
  return [parseInt(departTime), buses.split(',').filter((id) => id !== 'x')];
};

const getEarliestDepartTime = (busesIds, departTime) => {
  return busesIds
    .map((busId) => {
      const leavesIn = Math.abs(
        departTime % busId === 0 ? 0 : (departTime % busId) - busId,
      );
      return { leavesIn, id: busId };
    })
    .sort((a, b) => {
      return a.leavesIn - b.leavesIn;
    });
};

const parseInput = (input) => {
  const [departTime, buses] = input.split('\n');
  return [
    departTime,
    buses
      .split(',')
      .map((bus, index) => {
        if (bus === 'x') {
          return bus;
        }
        return {
          id: parseInt(bus),
          tOffset: index,
        };
      })
      .filter((bus) => bus !== 'x'),
  ];
};

const findEarliestTimestamp = (buses, startT) => {
  let t = startT;
  let done = false;
  while (!done) {
    t += buses[0].id; //3883403141; //1545656080; //27260873751
    let matches = 0;
    for (const bus of buses) {
      const validDepart = (t + bus.tOffset) % bus.id === 0;
      if (validDepart) {
        matches++;
      } else {
        break;
      }
    }
    if (matches >= buses.length - 2) {
      console.log(matches);
    }
    if (matches === buses.length) {
      done = true;
    }
  }
  return t;
};

// const [departTime, buses] = parseInputWithoutX(input2);
// const departures = getEarliestDepartTime(buses, departTime);
// console.log(departures[0].leavesIn * departures[0].id);
// console.log(departures[0].leavesIn * departures[0].id);
const input3 = `123
1789,37,47,1889`;
const input4 = `123
67,7,x,59,61`;
const input5 = `123
1789,37,47,1889`;
const [departTime, buses] = parseInput(input);
const withoutLast = buses.slice(0, buses.length - 1); //

const t = findEarliestTimestamp(withoutLast, 100000000000003); //99999311407760); //100000000000003);
console.log(t);
// 100000000385544 is too low
