export {};

type NestedTag = string | NestedTag[];

type Post = { tags: NestedTag[] };

type Posts = Record<string, Post>;

const posts: Posts = {
  post_1: { tags: ["js", ["cli", "json"], "parsing"] },
  post_2: { tags: ["js", ["api", ["cli"]]] },
};

const flattenArrayWithObj = (): string[] => {
  const tags = Object.values(posts).flatMap(
    (post) => post.tags.flat(5) as string[],
  );

  return [...new Set(tags)];
};

const flattenArrayWithLoop = (): string[] => {
  const uniqueTags: string[] = [];

  for (const item in posts) {
    const postTags: NestedTag[] = posts[item].tags;

    const flatten = (args) => {
      for (const tag of args) {
        if (Array.isArray(tag)) {
          flatten(tag);
        } else {
          let exists = false;

          for (const item of uniqueTags) {
            if (tag === item) {
              exists = true;
              break;
            }
          }

          if (!exists) uniqueTags.push(tag);
        }
      }
    };

    flatten(postTags);
  }

  return uniqueTags;
};

console.log(JSON.stringify({ data: flattenArrayWithObj() }, null, 2));
console.log(JSON.stringify({ data: flattenArrayWithLoop() }, null, 2));
