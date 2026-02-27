export {};

const findFirstRepeatChar = (str: string): string | null => {
    const seen = new Set<string>();

    for (const char of str) {
        if (seen.has(char)) return char;
        seen.add(char);
    }

    return null;
};

const findAllRepeatChar = (str: string): string[] => {
    const counts = new Map<string, number>();
    const duplicates: string[] = [];

    for (const char of str) {
        counts.set(char, (counts.get(char) ?? 0) + 1);
    }

    for (const [char, count] of counts) {
        if (count > 1) duplicates.push(char);
    }

    return duplicates;
};

console.log(JSON.stringify({ data: findFirstRepeatChar('swiss') }, null, 2));
console.log(JSON.stringify({ data: findFirstRepeatChar('them') }, null, 2));
console.log(
    JSON.stringify({ data: findAllRepeatChar('programming') }, null, 2),
);
