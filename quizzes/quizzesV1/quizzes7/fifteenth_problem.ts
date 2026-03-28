export {};

const rotate = (nums: number[], k: number): number[] => {
  const n = nums.length;
  if (n <= 1) return nums;

  k = k % n;
  if (k === 0) return nums;

  const reverse = (arr: number[], start: number, end: number): void => {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  };

  reverse(nums, 0, n - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, n - 1);

  return nums;
};

const array: number[] = [1, 2, 3, 4, 5, 6, 7];
console.log(rotate(array, 3)); // Output: [5, 6, 7, 1, 2, 3, 4]
