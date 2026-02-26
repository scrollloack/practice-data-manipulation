export {};

type Customer = {
    name: string;
    email: string;
};

type CustomerMap = {
    data: Customer;
    addedToDup: boolean;
};

const customers: Customer[] = [
    { name: 'john doe', email: 'john@example.com' },
    { name: 'John Doe', email: 'JOHN@example.com' },
    { name: 'jane smith', email: 'jane@example.com' },
];

const findDuplicatesWithLoop = (): Customer[] => {
    const seen = new Map<string, CustomerMap>();
    const duplicateCustomers: Customer[] = [];

    for (const customer of customers) {
        const key: string = `${customer.name.toLowerCase()}|${customer.email.toLowerCase()}`;
        const entry = seen.get(key);

        if (!entry) {
            seen.set(key, { data: customer, addedToDup: false });
            continue;
        }

        if (!entry.addedToDup) {
            duplicateCustomers.push(entry.data);
            entry.addedToDup = true;
        }

        duplicateCustomers.push(customer);
    }

    return duplicateCustomers;
};

console.log(JSON.stringify({ data: findDuplicatesWithLoop() }, null, 2));
