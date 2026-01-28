const fibLogger = (n) => {
  if (n === 0) return [];
  if (n === 1) return [0];
  let fib = [0, 1];
  if (n === 2) return fib;

  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
};

console.log(JSON.stringify({ data: fibLogger(3) }, null, 2));

const fibFinder = (n) => {
  if (n === 0) return [];
  if (n === 1) return 0;
  if (n === 2) return 1;

  let previousValue = 0;
  let nextValue = 1;

  for (let i = 2; i <= n; i++) {
    let fib = previousValue + nextValue;
    previousValue = nextValue;
    nextValue = fib;
  }

  return nextValue;
};

console.log(JSON.stringify({ data: fibFinder(3) }, null, 2));
