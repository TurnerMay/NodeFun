const path = require("path");
const fs = require("fs");
const rp = require("request-promise");

const dataPath = path.join(__dirname, "./data.json");

rp("https://reddit.com/r/popular.json", (err, res, body) => {
  if (err) console.log(err);

  const posts = JSON.parse(body).data.children;
  const objects = [];

  posts.forEach((item) => {
    const object = {
      title: item.data.title,
      url: item.data.url,
      author: item.data.author,
    };
    objects.push(object);
  });
  fs.writeFile(dataPath, JSON.stringify(objects), (err) => {
    if (err) console.log(err);
  });
});
