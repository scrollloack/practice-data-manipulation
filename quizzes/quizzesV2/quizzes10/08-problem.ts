export {};

const fibLogger = (num: number): number[] => {
    if (!Number.isInteger(num) || num < 2) return [];
    const fib: number[] = [0, 1];
    if (num === 2) return fib;

    for (let i = 2; i < num; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }

    return fib;
};

const fibFinder = (num: number): number => {
    let a: number = 0;
    if (!Number.isInteger(num) || num < 2) return a;
    let b: number = 1;
    if (num === 2) return b;

    for (let i = 2; i < num; i++) {
        [a, b] = [b, a + b];
    }

    return b;
};

console.log(JSON.stringify({ data: fibLogger(10) }, null, 2));
console.log(JSON.stringify({ data: fibFinder(10) }, null, 2));
