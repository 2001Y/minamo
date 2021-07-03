import { join, resolve, basename } from "path";

import fs from "fs";
import Link from "next/link";
import grayMatter from "gray-matter";

import Layout from "components/Layout";
import Pager from "components/Pager";

const pageLength = 7; //1pageに表示するpost数
const categoryName = basename(__filename, ".js").toString();
const pageNow = 1;

export default function Archive(props) {
  const { postList, pageTotal } = props;
  return (
    <Layout title="アーカイブ">
      {postList.map((e, i) => (
        <div className="post-teaser" key={i}>
          <Link href={e.url}>
            <a>
              <h2>{e.title}</h2>
            </a>
          </Link>
          <div>
            <time>{e.data}</time>
          </div>
        </div>
      ))}

      <Pager pageNow={pageNow} pageTotal={pageTotal} prevPath="news/p/" />
    </Layout>
  );
}

export async function getStaticProps() {
  let postFilenameList = fs
    .readdirSync(join(process.cwd(), "content", categoryName), "utf-8")
    .filter((file) => file.endsWith("md")); // ["first.md","second.md"];

  let postList = postFilenameList.map((postFilename) => {
    let raw = fs.readFileSync(
      join(process.cwd(), "content", categoryName, postFilename),
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

  let pageTotal = Math.ceil(postList.length / pageLength);

  let start = (pageNow - 1) * pageLength + 1;
  let end = pageNow * pageLength;

  return {
    props: {
      postList: postList.slice(start, end),
      pageTotal,
    },
  };
}
