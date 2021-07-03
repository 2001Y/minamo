import { join, resolve, parse, basename } from "path";
import grayMatter from "gray-matter";
const fs = require("fs");

const categoryName = basename(__filename, ".js");

const postFilenameList = fs
  .readdirSync(resolve(process.cwd(), "content", categoryName), "utf-8")
  .filter((file) => file.endsWith("md")); // ["first.md","second.md"]

const postList = postFilenameList.map((postFilename) => {
  let raw = fs.readFileSync(
    resolve(process.cwd(), "content", categoryName, postFilename),
    "utf8"
  );
  let frontMatter = grayMatter(raw); // { content:"本文", data: { title:"タイトル", published: 2020-07-13T00:00:00.000Z } }
  return {
    url: join("content", categoryName, postFilename.slice(0, -3)),
    title: String(frontMatter.data.title),
    data: String(frontMatter.data.published),
    content: frontMatter.content,
  };
});

export { postFilenameList, postList };
