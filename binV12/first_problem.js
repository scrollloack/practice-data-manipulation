const users = [
  { name: "Alice", email: "alice@gmail.com" },
  { name: "Bob", email: "bob@yahoo.com" },
  { name: "Carol", email: "carol@gmail.com" },
];

let groupedUsers = {};

for (const user of users) {
  const domain = user?.email.split("@")[1];
  // console.log("🚀 ~ domain:", domain);
  if (!groupedUsers[domain]) {
    groupedUsers[domain] = [];
  }

  groupedUsers[domain].push(user?.name);

  // (groupedUsers[domain] ??= []).push(user?.name);
}

console.log(JSON.stringify({ data: groupedUsers }, null, 2));
