export {};

const stringChallenge = (str1: string, str2: string): string => {
  const counts = new Map<string, number>();

  for (const char of str1) {
    counts.set(char, (counts.get(char) ?? 0) + 1);
  }

  for (const char of str2) {
    const currentCount: number = counts.get(char) ?? 0;
    if (currentCount <= 0) return "false";
    counts.set(char, currentCount - 1);
  }

  return "true";
};

console.log(stringChallenge("wwcdore", "coder")); // "true"
console.log(stringChallenge("h3llko", "hello")); // "false"
console.log(stringChallenge("rkqodlw", "world")); // "true"
