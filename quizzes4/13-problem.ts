export {};

type NestedArray = number | NestedArray[];

const flattenArray = (args: NestedArray[], newArr: number[] = []) => {
  for (const element of args) {
    if (Array.isArray(element)) {
      flattenArray(element, newArr);
    } else {
      newArr.push(element);
    }
  }

  return newArr;
};

const arr: NestedArray[] = [1, [2, 3, 4], [5, 6, [7, 8]], 9, 10];

console.log(JSON.stringify({ data: flattenArray(arr) }, null, 2));
