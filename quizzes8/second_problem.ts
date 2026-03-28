export {};

type NestedTag = string | NestedTag[];

type Post = {
  tags: NestedTag[];
};

type Posts = Record<string, Post>;

const posts: Posts = {
  post_1: { tags: ["js", ["cli", "json"], "parsing"] },
  post_2: { tags: ["js", ["api", ["cli"]]] },
};

const flattenArrayWithObj = (): NestedTag[] => {
  const tags = Object.values(posts).flatMap((post) => post.tags.flat(5));

  return [...new Set(tags)];
};

const flattenArrayWithLoop = (): NestedTag[] => {
  const uniqueTags: NestedTag[] = [];

  for (const key in posts) {
    const postTags: NestedTag[] = posts[key].tags;

    function flatten(arr: NestedTag[]) {
      for (const tag of arr) {
        if (Array.isArray(tag)) {
          flatten(tag);
        } else {
          let exists = false;

          for (const el of uniqueTags) {
            if (tag === el) {
              exists = true;
              break;
            }
          }

          if (!exists) uniqueTags.push(tag);
        }
      }
    }

    flatten(postTags);
  }

  return uniqueTags;
};

console.log(JSON.stringify({ data: flattenArrayWithObj() }, null, 2));
console.log(JSON.stringify({ data: flattenArrayWithLoop() }, null, 2));
