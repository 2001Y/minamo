import Head from "next/head";
import Link from "next/link";

import css from "styles/recruit.module.scss";

import Radio from "components/form/radio";

export default function Home(props) {
  return (
    <>
      <header>
        <h1>Minamo</h1>
      </header>
      <main>
        <h3>送信完了</h3>
        <p>ありがとうございました。</p>
        <a href="/"></a>
      </main>
      <footer>©︎ Minamo</footer>
    </>
  );
}
