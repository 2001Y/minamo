import { join, resolve, parse, basename } from "path";

import Link from "next/link";

import Layout from "components/Layout";
import Pager from "components/Pager";

const pageLength = 7; //1pageに表示するpost数
const categoryName = basename(__filename, ".js");

import { postFilenameList, postList } from "pages/news/api/load.js";

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
  // Pagenationのための変数準備
  if (context.query.p) {
    var pageNow = Number(context.query.p);
  } else {
    var pageNow = 1;
  }
  
  const pageTotal = Math.ceil(postFilenameList.length / pageLength);

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
