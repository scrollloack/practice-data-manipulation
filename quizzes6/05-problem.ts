export {};

type Entity = { id: number };

type User = Entity & { name: string };

type Post = Entity & {
  user_id: User["id"];
  title: string;
};

type PostData = {
  users: User[];
  posts: Post[];
};

type PostItem = Omit<Post, "user_id">;

type UserPosts = User & { posts: PostItem[] };

const data: PostData = {
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

const getUsersPostsWithObj = (): UserPosts[] => {
  const groupedPosts: Partial<Record<number, Post[]>> = Object.groupBy(
    posts,
    (post) => post.user_id,
  );

  return users.map((user) => {
    const userPosts: Post[] = groupedPosts[user.id] ?? [];

    return {
      ...user,
      posts: userPosts.map(({ id, title }) => ({ id, title })),
    };
  });
};

const getUsersPostsWithLoop = (): UserPosts[] => {
  const postsByUserId = new Map<User["id"], PostItem[]>();

  for (const { user_id, id, title } of posts) {
    const group = postsByUserId.get(user_id) ?? [];

    if (!postsByUserId.has(user_id)) {
      postsByUserId.set(user_id, group);
    }

    group.push({ id, title });
  }

  return users.map((user) => {
    return {
      ...user,
      posts: postsByUserId.get(user.id) ?? [],
    };
  });
};

console.log(JSON.stringify({ data: getUsersPostsWithObj() }, null, 2));
console.log(JSON.stringify({ data: getUsersPostsWithLoop() }, null, 2));
