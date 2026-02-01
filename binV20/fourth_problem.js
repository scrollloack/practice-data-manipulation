const customers = [
  { name: "john doe", email: "john@example.com" },
  { name: "John Doe", email: "JOHN@example.com" },
  { name: "jane smith", email: "jane@example.com" },
];

const groupedCustomers = Object.groupBy(customers, (cust) => [
  cust.name.toLowerCase(),
  cust.email.toLowerCase(),
]);

const duplicateCustomers = Object.values(groupedCustomers).flatMap((cust) =>
  cust.length > 1 ? cust : [],
);

console.log(JSON.stringify({ duplicateCustomers }, null, 2));
