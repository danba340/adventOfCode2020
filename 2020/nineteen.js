const inputStringTest = `0: 1 2
1: "a"
2: 1 3 | 3 1
3: "b"`;

const lines = inputStringTest.split('\n');
const parseLines = (lines) => {
  return lines.map((line) => {
    const [index, ruleString] = line.split(': ');
    const rule = { index };
    if (ruleString.includes('|')) {
      const [firstPair, secondPair] = ruleString.split('|');
      const vals = [firstPair.trim().split(' '), secondPair.trim().split(' ')];
      rule.refs = vals;
      rule.doubleRef = true;
    } else if (ruleString.includes('"')) {
      const value = ruleString[ruleString.indexOf('"') + 1];
      rule.value = value;
    } else {
      const values = ruleString.trim().split(' ');
      rule.refs = values;
    }
    return rule;
  });
};

const getVariants = (allRules, ruleList) => {
  return ruleList.map((rule) => {
    if (rule.length) {
      return getVariants(allRules, rule);
    }
    if (rule.doubleRef) {
      const newRules = [];
      for (const refPair of rule.refs) {
        newRules.push(
          refPair.map((ref) => allRules.find((rule) => rule.index === ref)),
        );
      }
      return getVariants(allRules, newRules);
    } else if (rule.refs) {
      const newRules = rule.refs.map((ref) =>
        allRules.find((rule) => rule.index === ref),
      );
      return getVariants(allRules, newRules);
    } else if (rule.value) {
      return rule.value;
    }
  });
};

const parseVariants = (variants, results) => {
  for (const result of results) {
    for (const variant of variants) {
      if (typeof variant === 'string') {
        result.push(variant);
      } else {
        results = [
          parseVariants(variant[0], result),
          parseVariants(variant[1], result),
        ];
      }
    }
  }
  return results;
};

const parsedLines = parseLines(lines);

const entry = parsedLines.find((rule) => rule.index == 0);
const variants = getVariants(parsedLines, [entry]);
const result = parseVariants(variants[0], []);

console.log(variants);
