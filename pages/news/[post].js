import { join, resolve, basename } from "path";

import fs from "fs";
import grayMatter from "gray-matter";

import Layout from "components/Layout";
import { formatDate } from "lib/date";

const categoryName = "news";

export default function Post({ title, data, content }) {
  return (
    <Layout title={title}>
      <time>{data}</time>
      <main>{content}</main>
    </Layout>
  );
}

/**
 * ページコンポーネントで使用する値を用意する
 */
export async function getStaticProps(e) {
  const filename = e.params.post;
  const raw = fs.readFileSync(
    join(process.cwd(), "content", categoryName, filename + ".md"),
    "utf8"
  );
  const frontMatter = grayMatter(raw);

  return {
    props: {
      title: frontMatter.data.title,
      data: formatDate(frontMatter.data.data),
      content: frontMatter.content,
    },
  };
}

export async function getStaticPaths() {
  let postNameList = fs
    .readdirSync(join(process.cwd(), "content", categoryName), "utf-8")
    .filter((file) => file.endsWith("md"));

  let pathList = postNameList.map((e, i) => {
    return { params: { post: e.slice(0, -3) } };
  });

  return {
    paths: pathList,
    fallback: false,
  };
}
