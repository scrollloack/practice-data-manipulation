const posts = {
  post_1: { tags: ["js", ["cli", "json"], "parsing"] },
  post_2: { tags: ["js", ["api", ["cli"]]] },
};

const tags = Object.values(posts).flatMap((post) => post.tags.flat(5));

const uniqueTags = [...new Set(tags)];

console.log(JSON.stringify({ data: uniqueTags }, null, 2));
