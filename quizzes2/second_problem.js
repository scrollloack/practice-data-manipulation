const posts = {
  post_1: { tags: ["js", ["cli", "json"], "parsing"] },
  post_2: { tags: ["js", ["api", ["cli"]]] },
};

const flattenArrayWithObj = (posts) => {
  const tags = Object.values(posts).flatMap((post) => post.tags.flat(5));

  const uniqueTags = [...new Set(tags)];

  return uniqueTags;
};

const flattenArrayWithLoop = (posts) => {
  const uniqueTags = [];

  for (const key in posts) {
    const postTags = posts[key].tags;

    function flatten(arr) {
      for (let i = 0; i < arr.length; i++) {
        const el = arr[i];

        if (Array.isArray(el)) {
          flatten(el);
        } else {
          let exists = false;

          for (let j = 0; j < uniqueTags.length; j++) {
            if (uniqueTags[j] === arr[i]) {
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

console.log(JSON.stringify({ data: flattenArrayWithObj(posts) }, null, 2));
console.log(JSON.stringify({ data: flattenArrayWithLoop(posts) }, null, 2));
