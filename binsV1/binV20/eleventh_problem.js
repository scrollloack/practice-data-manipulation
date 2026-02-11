const stringChallenge = (str1, str2) => {
  const counts = {};

  for (const char of str1) {
    counts[char] = (counts[char] ?? 0) + 1;
  }

  for (const char of str2) {
    if (!counts[char]) return "false";

    counts[char]--;
  }

  return "true";
};

console.log(stringChallenge("wwcdore", "coder")); // "true"
console.log(stringChallenge("h3llko", "hello")); // "false"
console.log(stringChallenge("rkqodlw", "world")); // "true"
