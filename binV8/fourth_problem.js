const customers = [
  { name: "john doe", email: "john@example.com" },
  { name: "John Doe", email: "JOHN@example.com" },
  { name: "jane smith", email: "jane@example.com" },
];

const groupedCustomers = Object.groupBy(customers, (customer) => [
  customer.name.toLowerCase(),
  customer.email.toLowerCase(),
]);

const duplicatedCustomers = Object.entries(groupedCustomers)
  .filter(([k, v]) => v.length > 1)
  .flatMap(([k, v]) => v);

console.log(JSON.stringify({ data: duplicatedCustomers }, null, 2));
