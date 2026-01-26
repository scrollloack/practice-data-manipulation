const findFirstRepeatingChar = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) return str[i];

    return null;
  }
};

const findAllRepeatingChar = (str) => {
  const charArray = str.split("");

  return charArray.filter((char, index) => {
    return (
      str.indexOf(char) !== str.lastIndexOf(char) && str.indexOf(char) === index
    );
  });
};

console.log(JSON.stringify({ data: findFirstRepeatingChar("swiss") }, null, 2));
console.log(
  JSON.stringify({ data: findAllRepeatingChar("programming") }, null, 2),
);
