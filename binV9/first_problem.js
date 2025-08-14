const users = [
  { name: "Alice", email: "alice@gmail.com" },
  { name: "Bob", email: "bob@yahoo.com" },
  { name: "Carol", email: "carol@gmail.com" },
];

const groupedUsers = Object.groupBy(users, (user) => {
  return user.email.split("@")[1];
});

const filteredUsers = Object.fromEntries(
  Object.entries(groupedUsers).map(([domain, users]) => {
    return [domain, users.map((user) => user.name)];
  })
);

console.log(JSON.stringify({ data: filteredUsers }, null, 2));
