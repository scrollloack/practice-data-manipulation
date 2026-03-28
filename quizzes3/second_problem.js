const posts = {
  post_1: { tags: ["js", ["cli", "json"], "parsing"] },
  post_2: { tags: ["js", ["api", ["cli"]]] },
};

const flattenArrayWithObj = () => {
  const tags = Object.values(posts).flatMap((post) => post.tags.flat(5));

  return [...new Set(tags)];
};

const flattenArrayWithLoop = () => {
  let uniqueTags = [];

  for (const key in posts) {
    const postTags = posts[key].tags;

    function flatten(args) {
      for (let i = 0; i < args.length; i++) {
        const el = args[i];

        if (Array.isArray(el)) {
          flatten(el);
        } else {
          let exists = false;

          for (let j = 0; j < uniqueTags.length; j++) {
            if (uniqueTags[j] === el) {
              exists = true;
              break;
            }
          }

          if (!exists) uniqueTags.push(el);
        }
      }
    }

    flatten(postTags);
  }

  return uniqueTags;
};

console.log(JSON.stringify({ data: flattenArrayWithObj() }, null, 2));
console.log(JSON.stringify({ data: flattenArrayWithLoop() }, null, 2));
