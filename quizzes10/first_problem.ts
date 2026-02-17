export {};

const ALLOWED_DOMAINS: readonly string[] = ["gmail.com", "yahoo.com"];

type Domain = (typeof ALLOWED_DOMAINS)[number];

type User = {
  name: string;
  email: string;
};

type UsersByDomain = Partial<Record<Domain, User["name"][]>>;

const users: User[] = [
  { name: "Alice", email: "alice@gmail.com" },
  { name: "Bob", email: "bob@yahoo.com" },
  { name: "Carol", email: "carol@gmail.com" },
];

const usersByDomain: UsersByDomain = {};
for (const user of users) {
  const domain: Domain = user.email.split("@")[1];

  if (ALLOWED_DOMAINS.includes(domain)) {
    (usersByDomain[domain] ??= []).push(user.name);
  }
}

console.log(JSON.stringify({ usersByDomain }, null, 2));
