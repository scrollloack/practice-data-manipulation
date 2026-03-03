export {};

type NestedArray = number | NestedArray[];

const flattenArray = (args: NestedArray[], newArr: number[] = []) => {
    for (const item of args) {
        if (Array.isArray(item)) {
            flattenArray(item, newArr);
        } else {
            newArr.push(item);
        }
    }

    return newArr;
};

const arr: NestedArray[] = [1, [2, 3, 4], [5, 6, [7, 8]], 9, 10];

console.log(JSON.stringify({ data: flattenArray(arr) }, null, 2));
