import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

import { join, resolve, basename } from "path";
import fs from "fs";
import grayMatter from "gray-matter";
import { formatDate } from "lib/date";

import cssIndex from "styles/index.module.scss";
import cssFooter from "styles/footer.module.scss";
import recruit from "styles/recruit.module.scss";
// import fixedPop from "styles/fixedPop.module.scss";

export default function Home(props) {
  const { postList } = props;
  useEffect(() => {
    let target = document.querySelectorAll("*[data-observer]"),
      options = { threshold: 0.7 },
      observer = new IntersectionObserver(function (e) {
        e.forEach(function (e) {
          let observerName = e.target.dataset.observer;
          if (e.isIntersecting) {
            e.target.classList.add("observer");
            document.body.classList.add("observer_" + observerName);
          } else {
            e.target.classList.remove("observer");
            document.body.classList.remove("observer_" + observerName);
          }
        });
      }, options);
    target.forEach(function (e) {
      observer.observe(e);
    });
  }, []);
  return (
    <>
      <Head>
        <title>Minamo｜やさしさでつながる、新しい広告のカタチ。</title>
      </Head>
      <header className={cssIndex.header} data-observer="header">
        <section>
          <div>
            <h1>Minamo</h1>
            <p>
              やさしさでつながる、
              <br />
              新しい広告のカタチ。
            </p>
          </div>
          <div className={cssIndex.headerFooter}>
            <div>
              <Link href="/youtuber">
                <a className={cssIndex.youtuber}>Youtuberの方はこちら</a>
              </Link>
              <Link href="/recruit">
                <a className={cssIndex.boshu}>
                  無料で
                  <br />
                  募集を出してみる
                </a>
              </Link>
            </div>
          </div>
          <img src="/big-logo.svg" alt="" />
        </section>
      </header>
      <main className={cssIndex.main}>
        <ul id="toc" className={cssIndex.sticky}>
          <li>
            <a href="#intro">
              <span>導入</span>
            </a>
          </li>
          <li>
            <a href="#about">
              <span>Minamoとは</span>
            </a>
          </li>
          <li>
            <a href="#whyyoutube">
              <span>なぜYoutuber？</span>
            </a>
          </li>
          <li>
            <a href="#point">
              <span>3つの特徴</span>
            </a>
          </li>
          <li>
            <a href="#process">
              <span>利用方法</span>
            </a>
          </li>
          <li>
            <a href="#plan">
              <span>プラン</span>
            </a>
          </li>
        </ul>
        <section id="intro" className={cssIndex.intro} data-observer="intro">
          <div>
            <h2 className={cssIndex.introH2}>
              「インフルエンサーマーケティング」を
              <br />
              <span>もっと やさしく、</span>
              <br />
              <span>もっと みんなに。</span>
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
        <section id="about" className={cssIndex.about} data-observer="about">
          <h2>
            <span>Minamoとは</span>
          </h2>
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
        <section
          id="whyyoutube"
          className={cssIndex.whyyoutube}
          data-observer="whyyoutube"
        >
          <h2>
            <span>なぜYoutube？</span>
          </h2>
          <ul className={cssIndex.flex}>
            <li>
              <img src="/img/index/undraw_People_search_re_5rre.svg" alt="" />
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
              <img src="/img/index/undraw_video_influencer_9oyy.svg" alt="" />
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
              <img src="/img/index/undraw_media_player_ylg8.svg" alt="" />
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
        <section id="point" className={cssIndex.point} data-observer="point">
          <h2>
            <span>Minamo 3つの特徴</span>
          </h2>
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
                  Minamoチームがご相談・マッチング・企画・報酬のやり取りまでいつでもサポート。初めての方でも安心してご利用いただけます。
                </p>
              </div>
            </li>
          </ol>
        </section>
        <section
          id="process"
          className={cssIndex.process}
          data-observer="process"
        >
          <h2>
            <span>利用方法</span>
          </h2>
          <ol className={cssIndex.flex}>
            <li>
              <img src="/img/index/undraw_attached_file_n4wm.svg" alt="" />
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
              <img src="/img/index/undraw_Windows_re_uo4w.svg" alt="" />
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
              <img src="/img/index/undraw_Agreement_re_d4dv.svg" alt="" />
              <h3>マッチング成立</h3>
              <p></p>
            </li>
            <li>
              <img src="/img/index/undraw_online_video_ivvq.svg" alt="" />
              <h3>動画完成</h3>
              <p></p>
            </li>
          </ol>
        </section>
        <section id="plan" className={cssIndex.plan} data-observer="plan">
          <h2>
            <span>プラン</span>
          </h2>
          <h3>
            <small>YouTuberに対する報酬の</small>20%
          </h3>
          <p>例えば...</p>
          <h4>予算12万円の場合</h4>
          <p>YouTuberに対する報酬 10万 + Minamo使用料 2万</p>
        </section>
        <section id="qanda" className={cssIndex.qanda} data-observer="qanda">
          <h2>
            <span>よくある質問</span>
          </h2>
          <ul>
            <li>
              <details open>
                <summary>報酬の相場はどのくらい？</summary>
                <div className={cssIndex.answer}>
                  <p>場合にもよりますが、目安は以下の通りです。</p>
                  <table>
                    <tbody>
                      <tr>
                        <th>平均視聴回数</th>
                        <th>報酬の目安</th>
                      </tr>
                      <tr>
                        <td>〜1万回</td>
                        <td>5万円</td>
                      </tr>
                      <tr>
                        <td>〜2万回</td>
                        <td>10万円</td>
                      </tr>
                      <tr>
                        <td>〜5万回</td>
                        <td>20万円</td>
                      </tr>
                      <tr>
                        <td>〜10万回</td>
                        <td>30万円</td>
                      </tr>
                    </tbody>
                  </table>
                  <h3>他の広告媒体との比較</h3>
                  <p>上の視聴回数を他のSNS広告のクリック数に換算すると・・・</p>
                  <table>
                    <tbody>
                      <tr>
                        <th>クリック数</th>
                        <th>Instagram広告</th>
                        <th>Facebook広告</th>
                        <th className={cssIndex.active}>Minamo</th>
                      </tr>
                      <tr>
                        <td>〜1万回</td>
                        <td>約50万円</td>
                        <td>約100万円</td>
                        <td className={cssIndex.active}>約6万円</td>
                      </tr>
                      <tr>
                        <td>〜2万回</td>
                        <td>約100万円</td>
                        <td>約200万円</td>
                        <td className={cssIndex.active}>約12万円</td>
                      </tr>
                      <tr className={cssIndex.small}>
                        <td></td>
                        <td>※100円/clickとして計算</td>
                        <td>※50円/clickとして計算</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </details>
            </li>
            <li>
              <details>
                <summary>マッチング後のやり取り</summary>
                <div className={cssIndex.answer}>
                  <p>
                    LINE@を用いてコミュニケーションに加えて、Zoomまたは対面の打ち合わせを行います。
                  </p>
                </div>
              </details>
            </li>
          </ul>
        </section>
      </main>
      <footer className={cssFooter.footer}>
        <div className={cssFooter.news}>
          <h5>ニュース</h5>
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
            <Link href="/news">
              <a className={cssFooter.more}>...more</a>
            </Link>
          </ul>
        </div>
        ©︎ Minamo
      </footer>
      <aside>
        <details>
          <summary>💬興味がある！</summary>
          <div>
            <p>誰がやってるの？</p>
            <Link href="/aboutus">
              <a>私たちについて</a>
            </Link>
            <p>とりあえず、最新情報を受け取る。</p>
            <form
              name="contact-form"
              action="https://script.google.com/macros/s/AKfycbxYhPIRqhO9R5DmHunbrdE5YRASvQadPmz-AbOXUCcprYHTwgLQuDWehzRbxP09K6LW/exec"
              method="get"
              className={recruit.form}
            >
              <input
                name="メルアド"
                type="email"
                placeholder="email@example.com"
                required
              />
              <input type="submit" value="送信" />
            </form>
            <p>問い合わせてみる！</p>
            <form
              action="https://api.staticforms.xyz/submit"
              method="post"
              className={recruit.form}
            >
              <textarea
                name="message"
                placeholder="お問い合わせ内容"
                required
              ></textarea>
              <input
                type="email"
                name="emai;"
                placeholder="email@example.com"
                required
              />
              <input
                type="hidden"
                name="accessKey"
                value="c0482a40-f51c-4d95-b248-24dc7fd73ab1"
              />
              <input type="hidden" name="replyTo" value="@" />
              <input
                type="hidden"
                name="redirectTo"
                value="https://minamo.cc/recruit/done"
              />
              <input type="hidden" name="subject" value="お問い合わせ" />
              <input type="submit" value="送信" />
            </form>
            <p>募集登録してみる！</p>

            <Link href="/recruit">
              <a>無料で掲載</a>
            </Link>
          </div>
        </details>
      </aside>
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
