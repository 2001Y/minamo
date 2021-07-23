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
        <h2>募集登録フォーム</h2>
        <form
          name="contact-form"
          action="https://script.google.com/macros/s/AKfycbxSRMLqALn0ZrbVfaih9vLBBbPBs_12ejz5vyBom9a0_cfU4mZAcoN_feNvaj4LAysx/exec"
          method="get"
          className={css.form}
        >
          <h3>法人名</h3>
          <input name="法人名" type="text" placeholder="株式会社 EXAMPLE" />
          <h3>メールアドレス</h3>
          <input name="メルアド" type="email" placeholder="email@example.com" />
          <h3>担当者さまのお名前</h3>
          <input name="name" type="text" placeholder="水面 太郎" />
          <h3>サービス導入についての立場</h3>
          <div className={css.radio}>
            <Radio name="サービス導入についての立場" value="最終決定権がある" />
            <Radio
              name="サービス導入についての立場"
              value="選定のメンバーである"
            />
            <Radio name="サービス導入についての立場" value="提案できる" />
            <Radio name="サービス導入についての立場" value="特に権利がない" />
          </div>
          <h3>YouTubeを利用したPR経験</h3>
          <div className={css.radio}>
            <Radio name="YouTubeを利用したPR経験" value="ある" />
            <Radio name="YouTubeを利用したPR経験" value="ない" />
          </div>
          <h3>どのようなモノ/コトを紹介したいですか？</h3>
          <div className={css.flex}>
            <h4>説明</h4>
            <textarea name="企画内容" placeholder="本文" />
          </div>
          <div className={css.flex}>
            <h4>URL</h4>
            <input
              name="企画URL"
              type="url"
              placeholder="https://example.com"
            />
          </div>
          <h3>ご予算</h3>
          <div className={css.flex}>
            <span>10万</span>
            <input type="range" name="予算" min="10" max="100" />
            <span>100万</span>
          </div>
          <h3>その他ご不明な点があればご記入ください。</h3>
          <textarea name="メッセージ" placeholder="本文" />
          <input type="submit" value="送信" className={css.submit} />
        </form>
      </main>
      <footer>©︎ Minamo</footer>
    </>
  );
}
