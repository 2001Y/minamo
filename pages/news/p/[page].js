import { join, resolve, basename } from "path";

import fs from "fs";
import Link from "next/link";
import grayMatter from "gray-matter";

import Layout from "components/Layout";
import Pager from "components/Pager";

const pageLength = 7; //1pageに表示するpost数
const categoryName = basename(resolve(__dirname, ".."));

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
      />
    </Layout>
  );
}

export async function getStaticProps(e) {
  let pageNow = e.params.page;

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
      pageNow,
      pageTotal,
    },
  };
}

//生成するurlを確定させる
export async function getStaticPaths() {
  let postTotal = fs
    .readdirSync(join(process.cwd(), "content", categoryName), "utf-8")
    .filter((file) => file.endsWith("md")).length;
  let pageTotal = Math.ceil(postTotal / pageLength);

  let pathList = [...Array(pageTotal)].map((_, i) => {
    return { params: { page: String(i) } };
  });

  return {
    paths: pathList,
    fallback: false,
  };
}
