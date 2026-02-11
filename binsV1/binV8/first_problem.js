const users = [
  { name: "Alice", email: "alice@gmail.com" },
  { name: "Bob", email: "bob@yahoo.com" },
  { name: "Carol", email: "carol@gmail.com" },
];

const groupedByDomain = Object.groupBy(
  users,
  (user) => user.email.split("@")[1]
);

const filteredUserNames = Object.fromEntries(
  Object.entries(groupedByDomain).map(([domain, users]) => [
    domain,
    users.map((user) => user.name),
  ])
);

console.log(JSON.stringify({ data: filteredUserNames }, null, 2));
