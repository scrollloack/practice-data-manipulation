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
  const charArray = str.split("");

  return charArray.filter(
    (char, index) =>
      str.indexOf(char) !== str.lastIndexOf(char) &&
      str.indexOf(char) === index,
  );
};

console.log(
  JSON.stringify({ data: findAllRepeatChar("programming") }, null, 2),
);
