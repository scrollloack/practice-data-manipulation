const users = [
  { name: "Alice", email: "alice@gmail.com" },
  { name: "Bob", email: "bob@yahoo.com" },
  { name: "Carol", email: "carol@gmail.com" },
];

let groupedUsers = {};

for (const user of users) {
  const domain = user?.email.split("@")[1];

  // if (!groupedUsers[domain]) {
  //   groupedUsers[domain] = [];
  // }

  // groupedUsers[domain].push(user.name);

  // or use nullish coalescing ??=
  (groupedUsers[domain] ??= []).push(user.name);
}

console.log(JSON.stringify({ data: groupedUsers }, null, 2));
