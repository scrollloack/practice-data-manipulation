export {};

type NestedNumber = number | NestedNumber[];

const arr: NestedNumber[] = [1, [2, 3, 4], [5, 6, [7, 8]], 9, 10];

const flattenArray = (arr: NestedNumber[], newArr: number[] = []): number[] => {
  for (const el of arr) {
    if (Array.isArray(el)) {
      flattenArray(el, newArr);
    } else {
      newArr.push(el);
    }
  }

  return newArr;
};

console.log(JSON.stringify({ data: flattenArray(arr) }, null, 2));
