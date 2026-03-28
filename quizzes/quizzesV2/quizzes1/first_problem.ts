export {};

type User = {
  name: string;
  email: string;
};

const ALLOWED_DOMAINS: readonly string[] = ["gmail.com", "yahoo.com"];

type Domain = (typeof ALLOWED_DOMAINS)[number];

type UsersByDomain = Partial<Record<Domain, User["name"][]>>;

const users: User[] = [
  { name: "Alice", email: "alice@gmail.com" },
  { name: "Bob", email: "bob@yahoo.com" },
  { name: "Carol", email: "carol@gmail.com" },
];

const usersByDomain: UsersByDomain = {};

for (let i = 0; i < users.length; i++) {
  const user: User = users[i];
  const domain: Domain = user.email.split("@")[1];
  (usersByDomain[domain] ??= []).push(user.name);
}

console.log(JSON.stringify({ usersByDomain }, null, 2));
