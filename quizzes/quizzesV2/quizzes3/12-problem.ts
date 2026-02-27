export {};

const isPrimaryNumber = (num: number): boolean => {
  if (!Number.isInteger(num) || num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  const limit = Math.sqrt(num);

  for (let i = 3; i <= limit; i += 2) {
    if (num % i === 0) return false;
  }

  return true;
};

console.log(isPrimaryNumber(9)); // "false"
console.log(isPrimaryNumber(25)); // "false"
console.log(isPrimaryNumber(65521)); // "true" (Largest prime below 2^16)
console.log(isPrimaryNumber(19)); // "true"
console.log(isPrimaryNumber(1)); // "false"
console.log(isPrimaryNumber(17.5)); // "false"
