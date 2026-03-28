const users = [
  { name: "Alice", email: "alice@gmail.com" },
  { name: "Bob", email: "bob@yahoo.com" },
  { name: "Carol", email: "carol@gmail.com" },
];

const findAllNamesUnderDomains = (users) => {
  const groupedUsers = {};

  for (const user of users) {
    let domain = user?.email.split("@")[1];
    (groupedUsers[domain] ??= []).push(user?.name);
  }

  return groupedUsers;
};

console.log(JSON.stringify({ data: findAllNamesUnderDomains(users) }, null, 2));
