const rotate = (nums, k) => {
  const n = nums.length;
  k = k % n;

  function reverse(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }

  reverse(nums, 0, n - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, n - 1);

  return nums;
};

const array = [1, 2, 3, 4, 5, 6, 7];
console.log(rotate(array, 3)); // Output: [5, 6, 7, 1, 2, 3, 4]
