import { join, resolve, basename } from "path";

import fs from "fs";
import Link from "next/link";
import grayMatter from "gray-matter";

import Layout from "components/Layout";
import Pager from "components/Pager";
import { formatDate } from "lib/date";

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
    const frontMatter = grayMatter(raw);
    return {
      url: join("/", categoryName, postFilename.slice(0, -3)),
      title: frontMatter.data.title,
      data: formatDate(frontMatter.data.data),
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
