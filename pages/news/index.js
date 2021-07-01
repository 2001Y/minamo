import fs from "fs";

import Link from "next/link";

import Layout from "components/Layout";
import Pager from "components/Pager";

import { readContentFiles } from "lib/content-loader";

const COUNT_PER_PAGE = 7;

export default function Archive(props) {
  const { posts, pageNow, total, pageTotal, perPage } = props;
  return (
    <Layout title="アーカイブ">
      {posts.map((post) => (
        <div key={post.slug} className="post-teaser">
          <h2>
            <Link href={`/news/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </h2>
          <div>
            <span>{post.published}</span>
          </div>
        </div>
      ))}

      <Pager pageNow={pageNow} pageTotal={pageTotal} href="/news?p=" />

      <style jsx>{`
        .post-teaser {
          margin-bottom: 2em;
        }

        .post-teaser h2 a {
          text-decoration: none;
        }
      `}</style>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  if (context.query.p) {
    var pageNow = Number(context.query.p);
  } else {
    var pageNow = 1;
  }

  const end = COUNT_PER_PAGE * pageNow;
  const start = end - COUNT_PER_PAGE;
  const posts = await readContentFiles({ fs });

  const pageTotal = Math.ceil(posts.length / COUNT_PER_PAGE);

  return {
    props: {
      posts: posts.slice(start, end),
      pageNow,
      total: posts.length,
      pageTotal,
      perPage: COUNT_PER_PAGE,
    },
  };
}
