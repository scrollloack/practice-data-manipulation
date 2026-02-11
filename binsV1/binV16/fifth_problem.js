const data = {
  users: [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ],
  posts: [
    { id: 101, user_id: 1, title: "Hello" },
    { id: 102, user_id: 1, title: "World" },
    { id: 103, user_id: 2, title: "JS Rocks" },
  ],
};

const users = data.users;
const posts = Object.groupBy(data.posts, (post) => post.user_id);

const userPosts = users.map((user) => {
  return {
    id: user.id,
    name: user.name,
    posts: (posts[user.id] || []).map((post) => {
      return {
        id: post.id,
        title: post.title,
      };
    }),
  };
});

console.log(JSON.stringify({ userPosts }, null, 2));
