const findFirstRepeatChar = (str) => {
  const seen = new Set();

  for (const char of str) {
    if (seen.has(char)) {
      return char;
    }
    seen.add(char);
  }

  return null;
};

console.log(JSON.stringify({ data: findFirstRepeatChar("swiss") }, null, 2));

const findAllRepeatChar = (str) => {
  const counts = new Map();
  const duplicates = [];

  for (const char of str) {
    counts.set(char, (counts.get(char) || 0) + 1);
  }

  for (const [char, count] of counts) {
    if (count > 1) duplicates.push(char);
  }

  return duplicates;
};

console.log(
  JSON.stringify({ data: findAllRepeatChar("programming") }, null, 2),
);
