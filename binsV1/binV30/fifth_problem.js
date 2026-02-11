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

const { users, posts } = data;

const getUsersPostsWithObj = () => {
  const groupedPosts = Object.groupBy(posts, (post) => post.user_id);

  const userPosts = users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      posts: (groupedPosts[user.id] || []).map((post) => {
        return {
          id: post.id,
          title: post.title,
        };
      }),
    };
  });

  return userPosts;
};

const getUsersPostsWithLoop = () => {
  const postsByUserId = new Map();

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];

    if (!postsByUserId.has(post.user_id)) {
      postsByUserId.set(post.user_id, []);
    }

    postsByUserId.get(post.user_id).push({
      id: post.id,
      title: post.title,
    });
  }

  const userPosts = [];
  for (let j = 0; j < users.length; j++) {
    const user = users[j];

    userPosts.push({
      id: user.id,
      name: user.name,
      posts: postsByUserId.get(user.id) || [],
    });
  }

  return userPosts;
};

console.log(JSON.stringify({ data: getUsersPostsWithObj() }, null, 2));
console.log(JSON.stringify({ data: getUsersPostsWithLoop() }, null, 2));
