const users = [
  { name: "Alice", email: "alice@gmail.com" },
  { name: "Bob", email: "bob@yahoo.com" },
  { name: "Carol", email: "carol@gmail.com" },
];

let groupedUsersByDomain = {};
for (const user of users) {
  const domain = user?.email.split("@")[1];
  (groupedUsersByDomain[domain] ??= []).push(user?.name);
}

console.log(JSON.stringify({ groupedUsersByDomain }, null, 2));
