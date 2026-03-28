const strRevWithLoop = (str) => {
  let newString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }

  return newString;
};

const strRevWithChained = (str) => {
  return str.split("").reverse().join("");
};

const strRevWithSpread = (str) => {
  return [...str].reverse().join("");
};

console.log(JSON.stringify({ data: strRevWithLoop("hello") }, null, 2));
console.log(JSON.stringify({ data: strRevWithChained("world") }, null, 2));
console.log(JSON.stringify({ data: strRevWithSpread("programmer") }, null, 2));
