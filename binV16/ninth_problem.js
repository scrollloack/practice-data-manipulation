const reverseStringWithLoop = (str) => {
  let newString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }

  return newString;
};

const reverseStringWithChained = (str) => {
  return str.split("").reverse().join("");
};

const reverseStringWithSpread = (str) => {
  return [...str].reverse().join("");
};

console.log(JSON.stringify({ data: reverseStringWithLoop("world") }, null, 2));
console.log(
  JSON.stringify({ data: reverseStringWithChained("hello") }, null, 2),
);
console.log(
  JSON.stringify({ data: reverseStringWithSpread("programmer") }, null, 2),
);
