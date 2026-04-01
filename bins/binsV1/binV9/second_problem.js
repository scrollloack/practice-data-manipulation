const posts = {
  post_1: { tags: ["ruby", ["cli", "json"], "parsing"] },
  post_2: { tags: ["ruby", ["api", ["cli"]]] },
};

const tags = Object.values(posts).flatMap((post) => {
  return post.tags.flat(Infinity);
});

const uniqTags = [...new Set(tags)];

console.log(JSON.stringify({ data: uniqTags }, null, 2));
