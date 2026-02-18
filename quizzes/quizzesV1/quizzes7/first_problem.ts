export {};

type User = {
  name: string;
  email: string;
};

type UsersByDomain = Record<string, string[]>;

const users: User[] = [
  { name: "Alice", email: "alice@gmail.com" },
  { name: "Bob", email: "bob@yahoo.com" },
  { name: "Carol", email: "carol@gmail.com" },
];

const usersByDomain: UsersByDomain = {};

for (const user of users) {
  const domain = user.email.split("@")[1];
  (usersByDomain[domain] ??= []).push(user.name);
}

console.log(JSON.stringify({ usersByDomain }, null, 2));
