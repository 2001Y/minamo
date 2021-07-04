import { resolve, basename } from "path";
const categoryName = basename(resolve(__dirname, ".."));

export default function HomePage() {
  return <h1>Hello World</h1>;
}

export async function getServerSideProps() {
  return {
    redirect: {
      statusCode: 301,
      destination: "/" + categoryName, // リダイレクト先
    },
  };
}
