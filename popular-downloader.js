const path = require("path");
const fs = require("fs");
const rp = require("request-promise");

const dataPath = path.join(__dirname, "./directory");

rp("https://reddit.com/r/popular.json", (err, res, body) => {
  if (err) console.log(err);

  const posts = JSON.parse(body).data.children;

  posts.forEach((item) => {
    if (
      path.extname(item.data.url) == ".jpg" ||
      path.extname(item.data.url) == ".gif" ||
      path.extname(item.data.url) == ".png"
    ) {
      rp(item.data.url, {encoding:'binary'}, (err, res, body) => {
        if (err) console.log(err);
        // const images = JSON.parse(item).data.url;

        fs.writeFile(dataPath + `/${item.data.id}${path.extname(item.data.url)}`, body, {encoding:'binary'}, (err) => {
          if (err) console.log(err);
        });
      });
    }
  });
});
