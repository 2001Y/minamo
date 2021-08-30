import Head from "next/head";
import Link from "next/link";

import header from "styles/header.module.scss";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>送信完了｜Minamo</title>
      </Head>
      <header className={header.header}>
        <Link href="/">
          <a>
            <img src="/headerLogo.svg" alt="" className={header.logo} />
          </a>
        </Link>
        <Link href="/">
          <a>
            <h1>Minamo</h1>
          </a>
        </Link>
      </header>
      <main>
        <h2 className="noAnime">
          <span>送信完了</span>
        </h2>
        <p>ありがとうございました。</p>
        <p>
          <Link href="/">
            <a>＞トップへ戻る</a>
          </Link>
        </p>
      </main>
      <footer>©︎ Minamo</footer>
    </>
  );
}
