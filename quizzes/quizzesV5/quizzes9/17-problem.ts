export {};

const findSecondLargest = (args: number[]): number | null => {
  if (args.length < 2) return null;

  let largest: number = -Infinity;
  let secondLargest: number = -Infinity;

  for (const num of args) {
    if (num > largest) {
      [largest, secondLargest] = [num, largest];
    } else if (num > secondLargest && num < largest) {
      secondLargest = num;
    }
  }

  return secondLargest === -Infinity ? null : secondLargest;
};

console.log({ data: findSecondLargest([3, 1, 4, 1, 5, 9, 2, 6]) }); // Output: 6
console.log({ data: findSecondLargest([3]) }); // Output: null
