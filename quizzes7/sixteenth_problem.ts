export {};

const isPalindrome = (str: string): string => {
  const chars = [...str.toLowerCase().replace(/[^a-z0-9]/g, "")];

  let left = 0;
  let right = chars.length - 1;

  while (left < right) {
    if (chars[left] !== chars[right]) return "false";
    left++;
    right--;
  }

  return "true";
};

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("🚀 racecar 🚀")); // true (Unicode safe!)
