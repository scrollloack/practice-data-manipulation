const customers = [
  { name: "john doe", email: "john@example.com" },
  { name: "John Doe", email: "JOHN@example.com" },
  { name: "jane smith", email: "jane@example.com" },
];

const groupedCustomers = Object.groupBy(customers, (customer) => [
  customer.name.toLowerCase(),
  customer.email.toLowerCase(),
]);

const duplicatedCustomers = Object.values(groupedCustomers).flatMap(
  (customer) => (customer.length > 1 ? customer : []),
);

console.log(JSON.stringify({ duplicatedCustomers }, null, 2));
