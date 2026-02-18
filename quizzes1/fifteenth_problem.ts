export {};

const rotate = (args: number[], k: number): number[] => {
  const n = args.length;
  if (n <= 1) return args;

  k = k % n;
  if (k === 0) return args;

  const reverse = (arr: number[], start: number, end: number) => {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  };

  reverse(args, 0, n - 1);
  reverse(args, 0, k - 1);
  reverse(args, k, n - 1);

  return args;
};

const array: number[] = [1, 2, 3, 4, 5, 6, 7];
console.log(JSON.stringify({ data: rotate(array, 3) }, null, 2));
// Output: [5, 6, 7, 1, 2, 3, 4]
