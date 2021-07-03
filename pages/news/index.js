import { join, resolve, parse, basename } from "path";

import Link from "next/link";

import Layout from "components/Layout";
import Pager from "components/Pager";

const pageLength = 7; //1pageに表示するpost数
const categoryName = basename(__filename, ".js");

import grayMatter from "gray-matter";

export default function Archive(props) {
  const { postList, pageNow, pageTotal } = props;
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

      <Pager
        pageNow={pageNow}
        pageTotal={pageTotal}
        categoryName={categoryName}
      />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  // 記事jsonの作成
  const fs = require("fs");
  const postFilenameList = fs
    .readdirSync(resolve("content", categoryName), "utf-8")
    .filter((file) => file.endsWith("md")); // ["first.md","second.md"]

  // const DIR = join(process.cwd(), "content", categoryName);
  // const postFilenameList = fs
  //   .readdirSync(DIR)
  //   .filter((filename) => parse(filename).ext === ".md");

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

  // Pagenationのための変数準備
  if (context.query.p) {
    var pageNow = Number(context.query.p);
  } else {
    var pageNow = 1;
  }
  const postTotal = postFilenameList.length;
  const pageTotal = Math.ceil(postTotal / pageLength);

  let start = (pageNow - 1) * pageLength + 1;
  let end = pageNow * pageLength;

  return {
    props: {
      postList: postList.slice(start, end),
      pageNow,
      pageTotal,
    },
  };
}
