export {};

type NestedArray = number | NestedArray[];

const flattenArray = (arr: NestedArray[], newArr: number[] = []): number[] => {
  for (const el of arr) {
    if (Array.isArray(el)) {
      flattenArray(el, newArr);
    } else {
      newArr.push(el);
    }
  }

  return newArr;
};

const arr: NestedArray[] = [1, [2, 3, 4], [5, 6, [7, 8]], 9, 10];

console.log(JSON.stringify({ data: flattenArray(arr) }, null, 2));
