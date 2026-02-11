const customers = [
  { name: "john doe", email: "john@example.com" },
  { name: "John Doe", email: "JOHN@example.com" },
  { name: "jane smith", email: "jane@example.com" },
  { name: "jane smith", email: "jane@example.com" },
  { name: "qwe smith", email: "qwe@example.com" },
];

const groupedCustomers = Object.groupBy(customers, (customer) => [
  customer?.name.toLowerCase(),
  customer?.email.toLowerCase(),
]);

const duplicatedCustomer = Object.values(groupedCustomers).flatMap(
  (customer) => (customer.length > 1 ? customer : []),
);

console.log(JSON.stringify({ duplicatedCustomer }, null, 2));
