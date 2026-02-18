const customers = [
  { name: "john doe", email: "john@example.com" },
  { name: "John Doe", email: "JOHN@example.com" },
  { name: "jane smith", email: "jane@example.com" },
];

const findDuplicatesWithObj = () => {
  const groupedCustomers = Object.groupBy(customers, (cust) => [
    cust?.name.toLowerCase(),
    cust?.email.toLowerCase(),
  ]);

  return Object.values(groupedCustomers).flatMap((cust) =>
    cust.length > 1 ? cust : [],
  );
};

const findDuplicatesWithLoop = () => {
  const seen = new Map();
  const duplicateCustomers = [];

  for (let i = 0; i < customers.length; i++) {
    const cust = customers[i];
    const key = `${cust?.name.toLowerCase()}|${cust?.email.toLowerCase()}`;

    if (!seen.has(key)) {
      seen.set(key, { data: cust, addedToDup: false });
    } else {
      const entry = seen.get(key);

      if (!entry.addedToDup) {
        duplicateCustomers.push(entry.data);
        entry.addedToDup = true;
      }

      duplicateCustomers.push(cust);
    }
  }

  return duplicateCustomers;
};

console.log(JSON.stringify({ data: findDuplicatesWithObj() }, null, 2));
console.log(JSON.stringify({ data: findDuplicatesWithLoop() }, null, 2));
