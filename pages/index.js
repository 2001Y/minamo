import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

import { join, resolve, basename } from "path";
import fs from "fs";
import grayMatter from "gray-matter";
import { formatDate } from "lib/date";

import cssIndex from "styles/index.module.scss";

export default function Home(props) {
  const { postList } = props;
  useEffect(() => {
    let target = document.querySelectorAll(".observer"),
      options = { threshold: 0.5 },
      observer = new IntersectionObserver(function (e) {
        e.forEach(function (e) {
          if (e.isIntersecting) {
            document.body.id = e.target.id + "-body";
          }
        });
      }, options);
    target.forEach(function (e) {
      observer.observe(e);
    });
  }, []);
  return (
    <>
      <header className={cssIndex.header}>
        <section>
          <div>
            <h1>Minamo</h1>
            <p>
              やさしさでつながる
              <br />
              新しい広告のカタチ。
            </p>
          </div>
          <div className={cssIndex.headerFooter}>
            <div>
              <Link href="/youtuber">
                <a className={cssIndex.youtuber}>Youtuberの方はこちら</a>
              </Link>
              <Link href="/obo">
                <a className={cssIndex.boshu}>
                  無料で
                  <br />
                  募集を出してみる
                </a>
              </Link>
            </div>
            <div className={cssIndex.news}>
              <Link href="/news">ニュース</Link>
              <ul>
                {postList.map((e, i) => (
                  <Link href={e.url} key={i} passHref>
                    <a>
                      <li>
                        {e.title} - <time>{e.data}</time>
                      </li>
                    </a>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
          <img src="/big-logo.svg" alt="" />　
        </section>
      </header>
      <main classNames={cssIndex.main}>
        <ul id="toc" className={cssIndex.sticky}>
          <li>
            <a href="#intro">導入</a>
          </li>
          <li>
            <a href="#about">Minamoとは</a>
          </li>
          <li>
            <a href="#whyyoutube">なぜYoutuber？</a>
          </li>
          <li>
            <a href="#point">3つの特徴</a>
          </li>
          <li>
            <a href="#process">利用方法</a>
          </li>
          <li>
            <a href="#plan">プラン</a>
          </li>
        </ul>
        <section id="intro" className={`${cssIndex.intro} Observer`}>
          <div>
            <h2 className={cssIndex.introH2}>
              「インフルエンサーマーケティング」 を<br />
              <span>
                もっと やさしく、
                <br />
                もっと みんなに。
              </span>
            </h2>
          </div>
          <div>
            <p>
              「インフルエンサーマーケティング」とは、
              <br />
              ネット上の「有名人」にSNS上で商品やビジネスを紹介してもらう広告形態。
              <br />
              でも、その高い広告効果や拡散力にも関わらず、まだあまり浸透していません。
            </p>
            <p>
              このままでは情報社会に埋もれてしまうかもしれないサービスや事業を、
              <br />
              誰でももっと手軽に広められるようなプラットフォームを作りたい。
            </p>
            <p>Minamoが生まれたのは、そんな思いがきっかけでした。</p>
          </div>
        </section>
        <section id="about" className={`${cssIndex.about} Observer`}>
          <h2>Minamoとは</h2>
          <div>
            <p>
              Minamoは、
              <br />
              サービス・飲食店・ブランドなど、
              <br />
              <span>
                <em>“何かを広めたい人”</em> と<br />
                <em>“それを応援したいYouTuber”</em> を
              </span>
              <br />
              マッチングし、企画を一緒につくりあげる
              <br />
              コラボレーションプラットフォームです。
            </p>
            <img
              src="/img/index/about.svg"
              alt=""
              className={cssIndex.svgAbout}
            />
          </div>
        </section>
        <section id="whyyoutube" className={`${cssIndex.whyyoutube} Observer`}>
          <h2>なぜYoutube？</h2>
          <ul className={cssIndex.flex}>
            <li>
              <h3>一番伝えたい層に発信</h3>
              <p>
                視聴者層の性別・年齢や
                <br />
                動画のジャンルから、
                <br />
                広めたいサービスに最適の
                <br />
                YouTuberを選ぶことで、
                <br />
                大きな宣伝効果が
              </p>
            </li>
            <li>
              <h3>体験している様子を紹介</h3>
              <p>
                お客さんが一番知りたい
                <br />
                実際の雰囲気や使用感など
                <br />
                文字や画像では伝わりにくい
                <br />
                魅力をリアルに伝えられます。
              </p>
            </li>
            <li>
              <h3>動画はどこでも活用可能</h3>
              <p>
                作ってもらった動画は
                <br />
                自分のサイトに掲載するなど
                <br />
                いろんな使い方ができます。
              </p>
            </li>
          </ul>
        </section>
        <section id="point" className={`${cssIndex.point} Observer`}>
          <h2>Minamo 3つの特徴</h2>
          <ol>
            <li>
              <div>
                <h3>すべてを簡単に。</h3>
                <p>
                  フォーマットに沿って募集登録するだけで、あなたとコラボしたいYoutuberが向こうから集まってきてくれます。ほかにも、動画の完成まで全てのステップをMinamo内で完結できるので、
                </p>
              </div>
            </li>
            <li>
              <div>
                <h3>やさしさがめぐるプラットフォーム</h3>
                <p>
                  YouTuber
                  の「応援したい」という気持ちが全ての出発点。自分のチャンネルで紹介したいサービスや事業にみずから手を挙げる形なので、あなたの熱意にこたえながら、魅力的な動画を仕上げてくれます。
                </p>
              </div>
            </li>
            <li>
              <div>
                <h3>安心・安全なサポートサービス</h3>
                <p>
                  Minamoチームがご相談・マッチング・企画・報酬のやり取りまでいつでもサポート。
                  <br />
                  初めての方でも安心してご利用いただけます。
                </p>
              </div>
            </li>
          </ol>
        </section>
        <section id="process" className={`${cssIndex.process} Observer`}>
          <h2>利用方法</h2>
          <ol className={cssIndex.flex}>
            <li>
              <img src="" alt="" />
              <h3>
                <small>Youtuberを</small>募集
              </h3>
              <p>
                あなたを応援したいYouTuberが
                <br />
                集まってきてくれます。
              </p>
            </li>
            <li>
              <img src="" alt="" />
              <h3>
                <small>Youtuberを</small>選ぶ
              </h3>
              <p>
                あなたの案件に合った
                <br />
                YouTuberを選びます。
              </p>
            </li>
            <li>
              <img src="" alt="" />
              <h3>マッチング成立</h3>
              <p></p>
            </li>
            <li>
              <img src="" alt="" />
              <h3>動画完成</h3>
              <p></p>
            </li>
          </ol>
        </section>
        <section id="plan" className={cssIndex.plan}>
          <h2>プラン</h2>
        </section>
        <section id="aboutus" className={cssIndex.aboutus}>
          <h2>私たちについて</h2>
        </section>
      </main>
      <footer>©︎ Minamo</footer>
    </>
  );
}

export async function getStaticProps() {
  const pageLength = 4; //1pageに表示するpost数
  const categoryName = "news";
  const pageNow = 1;

  let postFilenameList = fs
    .readdirSync(join(process.cwd(), "content", categoryName), "utf-8")
    .filter((file) => file.endsWith("md")); // ["first.md","second.md"];

  let postList = postFilenameList.map((postFilename) => {
    let raw = fs.readFileSync(
      join(process.cwd(), "content", categoryName, postFilename),
      "utf8"
    );
    const frontMatter = grayMatter(raw);
    return {
      url: join("/", categoryName, postFilename.slice(0, -3)),
      title: frontMatter.data.title,
      data: formatDate(frontMatter.data.data),
    };
  });

  let start = (pageNow - 1) * pageLength + 1;
  let end = pageNow * pageLength;

  return {
    props: {
      postList: postList.slice(start, end),
    },
  };
}
