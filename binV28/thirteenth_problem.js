const arr = [1, [2, 3, 4], [5, 6, [7, 8]], 9, 10];

let parsedArray = [];

const arrayParser = (arr) => {
  for (const el of arr) {
    if (Array.isArray(el)) {
      arrayParser(el);
    } else {
      parsedArray.push(el);
    }
  }

  return parsedArray;
};

console.log(JSON.stringify({ data: arrayParser(arr) }, null, 2));
