export {};

type Users = {
    name: string;
    email: string;
};

type UsersByDomain = Record<string, Users['name'][]>;

const users: Users[] = [
    { name: 'Alice', email: 'alice@gmail.com' },
    { name: 'Bob', email: 'bob@yahoo.com' },
    { name: 'Carol', email: 'carol@gmail.com' },
];

const usersByDomain: UsersByDomain = {};

for (const user of users) {
    const domain: string = user.email.split('@')[1];
    (usersByDomain[domain] ??= []).push(user.name);
}

console.log(JSON.stringify({ usersByDomain }, null, 2));
