import { resolve, basename } from "path";

export default function () {}

const categoryName = basename(resolve(__dirname, ".."));

export async function getStaticProps(context) {
  return {
    redirect: {
      permanent: true, // 永続的なリダイレクトかどうか
      destination: "/" + categoryName, // リダイレクト先
    },
  };
}
