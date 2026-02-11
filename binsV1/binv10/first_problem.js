const users = [
  { name: "Alice", email: "alice@gmail.com" },
  { name: "Bob", email: "bob@yahoo.com" },
  { name: "Carol", email: "carol@gmail.com" },
];

for (const user of users) {
  const domain = user?.email.split("@")[1];
  if (!groupedUsersName[domain]) {
    console.log(domain);
    groupedUsersName[domain] = [];
  }

  groupedUsersName[domain].push(user.name);
}

console.log(JSON.stringify({ data: groupedUsersName }, null, 2));
