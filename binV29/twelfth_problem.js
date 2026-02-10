const mathChallenge = (num) => {
  if (num <= 1) return "false";
  if (num === 2) return "true";
  if (num % 2 === 0) return "false";

  const limit = Math.sqrt(num);

  for (let i = 3; i <= limit; i += 2) {
    if (num % i === 0) return "false";
  }

  return "true";
};

console.log(mathChallenge(19)); // "true"
console.log(mathChallenge(65521)); // "true" (Largest prime below 2^16)
console.log(mathChallenge(1)); // "false"
