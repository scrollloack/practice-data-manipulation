export {};

const strRevWithLoop = (str: string): string => {
    let newString = '';

    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }

    return newString;
};

const strRevWithLoopEfficient = (str: string): string => {
    const result = new Array<string>();

    for (let i = 0, j = str.length - 1; j >= 0; i++, j--) {
        result[i] = str[j];
    }

    return result.join('');
};

const strRevWithChained = (str: string): string => {
    return str.split('').reverse().join('');
};

const strRevWithSpread = (str: string): string => {
    return [...str].reverse().join('');
};

console.log(JSON.stringify({ data: strRevWithLoop('hello') }, null, 2));
console.log(
    JSON.stringify({ data: strRevWithLoopEfficient('hello') }, null, 2),
);
console.log(JSON.stringify({ data: strRevWithChained('world') }, null, 2));
console.log(JSON.stringify({ data: strRevWithSpread('programmer') }, null, 2));
