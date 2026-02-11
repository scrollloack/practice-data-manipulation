const StringChallenge = (str1, str2) => {
  let counts = {};

  for (const char of str1) {
    counts[char] = (counts[char] ?? 0) + 1;
  }

  for (const char of str2) {
    if (!counts[char]) return "false";
    counts[char]--;
  }

  return "true";
};

console.log(StringChallenge("wwcdore", "coder")); // "true"
console.log(StringChallenge("h3llko", "hello")); // "false"
console.log(StringChallenge("rkqodlw", "world")); // "true"
