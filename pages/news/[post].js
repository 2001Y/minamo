import { join, resolve, basename } from "path";

import fs from "fs";
import Image from "next/image";
import Link from "next/link";

import Markdown from "react-markdown";
import grayMatter from "gray-matter";
import remarkGfm from "remark-gfm";
import unwrapImages from "remark-unwrap-images";

//タイトルタグにジャンプリンクを
import remarkSlug from "remark-slug";
import remarkAutolinkHeadings from "remark-autolink-headings";

import Layout from "components/Layout";
import { formatDate } from "lib/date";

const categoryName = "news";

const renderers = {
  image: (image) => {
    return <Image src={image.src} alt={image.alt} height="200" width="355" />;
  },
};

export default function Post({ title, data, content }) {
  return (
    <Layout title={title}>
      <time>{data}</time>
      <Markdown
        children={content}
        remarkPlugins={[
          remarkGfm,
          unwrapImages,
          remarkSlug,
          [remarkAutolinkHeadings, { behavior: "wrap" }],
        ]}
        skipHtml={true} //HTMLはそのまま反映されるように
        components={{
          img: (e) => {
            return <Image src={e.src} alt={e.alt} height="200" width="355" />;
          },
          link: (e) => {
            if (e.href.match("http")) {
              return (
                <a href={e.href} target="_blank" rel="noopener noreferrer">
                  {children}
                </a>
              );
            }
            if (e.href.slice(0, 1) == "#") {
              return <a href={e.href}>{e.children}</a>;
            }
            return (
              <Link href={e.href}>
                <a>{e.child}</a>
              </Link>
            );
          },
        }} //rendererからcomponentsに変わった
      />
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
