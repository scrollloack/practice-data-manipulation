const arr = [1, [2, 3, 4], [5, 6, [7, 8]], 9, 10];

const flattenArray = (arr, newArr = []) => {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (Array.isArray(element)) {
      flattenArray(element, newArr);
    } else {
      newArr.push(element);
    }
  }

  return newArr;
};

console.log(JSON.stringify({ data: flattenArray(arr) }, null, 2));
