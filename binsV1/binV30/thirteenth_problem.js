const arr = [1, [2, 3, 4], [5, 6, [7, 8]], 9, 10];

const arrayParser = (arr, newArr = []) => {
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];

    if (Array.isArray(el)) {
      arrayParser(arr[i], newArr);
    } else {
      newArr.push(el);
    }
  }

  return newArr;
};

console.log(JSON.stringify({ data: arrayParser(arr) }, null, 2));
