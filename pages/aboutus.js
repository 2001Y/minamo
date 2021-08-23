import Head from "next/head";
import Link from "next/link";

import css from "styles/recruit.module.scss";
import header from "styles/header.module.scss";

import Radio from "components/form/radio";

import cssIndex from "styles/index.module.scss";

function checkText() {
  alert("document.myform.mytext.value");
  return false;
}

export default function Home(props) {
  function checkText() {
    alert("document.myform.mytext.value");
    return false;
  }
  return (
    <>
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
      <main className={cssIndex.aboutus}>
        <h2 className="noAnime">
          <span>私たちについて</span>
        </h2>
        <article>
            <p>
              インフルエンサーマーケティングは、他の媒体に比べて安価に、
              <br />
              かつ高い宣伝効果を見込める広告手段です。
            </p>
            <p>
              その一方で、
              <br />
              「知らない人とお金のやり取りをするのは不安」
              <br />
              「企業案件はお金でやらされているようなイメージがある」など
            </p>
            <p>
              クリアしなければならない障壁も多く、まだあまり浸透しているとは言えません。
            </p>
            <p>
              しかし、
              <br />
              世の中には「認知」の機会を必要としている物やサービスが
              まだまだたくさんあります。
            </p>
            <p>
              コロナ禍で客足が伸び悩み、閉店に追いやられてしまう飲食店や、ユーザー数がなかなか増えないまま自然消滅してしまうサービスの数々。
            </p>
            <p>
              「何とかして彼らの力になることはできないか？」と考えた私たちの答えの一つが、
              <br />
              「手軽に自分の存在を発信してもらえるプラットフォーム」でした。
            </p>
          </article>
          <ul className={`${cssIndex.flex} ${cssIndex.mvvFlex}`}>
            <li>
              <h4>Mission</h4>
              <p>
                すべての人が自分の「熱意」を
                <br />
                発信できる社会を創造する。
              </p>
            </li>
            <li>
              <h4>Vision</h4>
              <p>
                広めたいサービスを持つ人と、
                <br />
                それを応援したいクリエイターとのコラボレーションによって、
                <br />
                新しい認知のあり方を創出する。
              </p>
            </li>
            <li>
              <h4>Values</h4>
              <p>
                ・「広めたいサービスを持つ人」に寄り添ったサービスを提供する
                <br />
                ・「熱意」の発信を「やさしさ」で応援する、想いがめぐるつながりを実現する
              </p>
            </li>
          </ul>
          <h3>メンバー</h3>
          <ul>
            <li>板垣壮真（東京大学文科二類2年）</li>
            <li>津金希美（東京大学文科一類2年）</li>
            <li>田村義希（武蔵野美術大学2年）</li>
          </ul>
      </main>
      <footer>©︎ Minamo</footer>
    </>
  );
}
