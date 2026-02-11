const users = [
  { name: "john doe", email: "john@example.com" },
  { name: "John Doe", email: "JOHN@example.com" },
  { name: "jane smith", email: "jane@example.com" },
];

const groupedUsers = Object.groupBy(users, (users) => [
  users.name.toLowerCase(),
  users.email.toLowerCase(),
]);

const duplicatedUsers = Object.values(groupedUsers).flatMap((user) =>
  user.length > 1 ? user : [],
);

console.log(JSON.stringify({ data: duplicatedUsers }, null, 2));
