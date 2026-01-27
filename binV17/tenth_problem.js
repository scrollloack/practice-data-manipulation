const findFirstRepeatChar = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) return str[i];

    return null;
  }
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
