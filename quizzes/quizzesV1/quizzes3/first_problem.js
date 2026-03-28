const users = [
  { name: "Alice", email: "alice@gmail.com" },
  { name: "Bob", email: "bob@yahoo.com" },
  { name: "Carol", email: "carol@gmail.com" },
];

let usersByDomain = {};
for (let i = 0; i < users.length; i++) {
  const user = users[i];
  const domain = user?.email.split("@")[1];

  (usersByDomain[domain] ??= []).push(user?.name);
}

console.log(JSON.stringify({ usersByDomain }, null, 2));
