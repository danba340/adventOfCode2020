const adapters = [
  8,
  40,
  45,
  93,
  147,
  64,
  90,
  125,
  149,
  145,
  111,
  126,
  9,
  146,
  38,
  97,
  103,
  6,
  122,
  34,
  18,
  35,
  96,
  86,
  116,
  29,
  59,
  118,
  102,
  26,
  66,
  17,
  74,
  94,
  5,
  114,
  128,
  1,
  75,
  47,
  141,
  58,
  65,
  100,
  63,
  12,
  53,
  25,
  106,
  136,
  15,
  82,
  22,
  117,
  2,
  80,
  79,
  139,
  7,
  81,
  129,
  19,
  52,
  87,
  115,
  132,
  140,
  88,
  109,
  62,
  73,
  46,
  24,
  69,
  101,
  110,
  16,
  95,
  148,
  76,
  135,
  142,
  89,
  50,
  72,
  41,
  39,
  42,
  56,
  51,
  57,
  127,
  83,
  121,
  33,
  32,
  23,
];

const adaptersBySize = adapters.sort((a, b) => {
  return a - b;
});

const countDiffs = (adaptersBySize) => {
  let oneDiffs = 0;
  let threeDiffs = 0;
  for (const [index, adapter] of adaptersBySize.entries()) {
    if (index === adaptersBySize.length - 1) {
      break;
    }
    if (adaptersBySize[index + 1] - adapter === 1) {
      oneDiffs++;
    } else if (adaptersBySize[index + 1] - adapter === 3) {
      threeDiffs++;
    } else {
      console.log('Warning');
    }
  }
  return [oneDiffs, threeDiffs];
};

const [oneDiffs, threeDiffs] = countDiffs([0, ...adaptersBySize]);
console.log(oneDiffs * (threeDiffs + 1));

const countAdapterArrangements = (adaptersBySize) => {
  const adapters = [0, ...adaptersBySize];
  const adapterCount = adapters.length;
  const diffsToNext = [];
  for (let index = 0; index < adapterCount; index++) {
    if (index < adapterCount - 1) {
      const adapter = adapters[index];
      const nextAdapter = adapters[index + 1];
      diffsToNext.push(nextAdapter - adapter);
    }
  }
  const canBeRemoved = [];
  for (let index = 0; index < diffsToNext.length; index++) {
    if (index < diffsToNext.length - 1) {
      const diff = diffsToNext[index];
      const nextDiff = diffsToNext[index + 1];
      canBeRemoved.push(diff !== 3 && nextDiff !== 3);
    }
  }
  const canRemoveGroups = [];
  let canRemoveGroupsCount = 0;
  for (let index = 0; index < canBeRemoved.length; index++) {
    if (canBeRemoved[index]) {
      canRemoveGroupsCount++;
    } else {
      if (canRemoveGroupsCount) {
        canRemoveGroups.push(canRemoveGroupsCount);
        canRemoveGroupsCount = 0;
      }
    }
  }
  canRemoveGroups.push(canRemoveGroupsCount);
  const multiples = canRemoveGroups.map((group) => {
    return group === 3 ? 7 : group * 2;
  });
  return multiples.reduce((acc, multiple) => {
    return acc * multiple;
  }, 1);
};

const waysToArrangeAdapters = countAdapterArrangements(adaptersBySize);
console.log(waysToArrangeAdapters); //71964166575759560000
