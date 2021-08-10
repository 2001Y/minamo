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
      <header className={cssIndex.header} data-observer="header">
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
              <Link href="/recruit">
                <a className={cssIndex.boshu}>
                  無料で
                  <br />
                  募集を出してみる
                </a>
              </Link>
            </div>
            <div className={cssIndex.news}></div>
          </div>
          <img src="/big-logo.svg" alt="" />
        </section>
      </header>
      <main className={cssIndex.main}>
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
        <section
          id="aboutus"
          className={cssIndex.aboutus}
          data-observer="aboutus"
        >
          <h2>
            <span>私たちについて</span>
          </h2>
          <h3>メンバー</h3>
          <ul className={`${cssIndex.flex} ${cssIndex.mvvFlex}`}>
            <li>
              <img src="" alt="" />
              <h3>Soma Itagaki</h3>
            </li>
            <li>
              <img src="" alt="" />
              <h3>Nozomi Tsugane</h3>
            </li>
            <li>
              <img src="" alt="" />
              <h3>Yoshiki Tamura</h3>
            </li>
          </ul>
          <h3>ストーリー</h3>
          <p>
            インフルエンサーマーケティングは、他の媒体に比べて安価に、かつ高い宣伝効果を見込める広告手段です。
          </p>
          <p>
            その一方で、「知らない人とお金のやり取りをするのは不安」「企業案件はお金でやらされているようなイメージがある」などクリアしなければならない障壁も多く、まだあまり浸透しているとは言えません。
          </p>
          <p>
            しかし、世の中には「認知」の機会を必要としている物やサービスが
            まだまだたくさんあります。
          </p>
          <p>
            コロナ禍で客足が伸び悩み、閉店に追いやられてしまう飲食店や、ユーザー数がなかなか増えないまま自然消滅してしまうサービスの数々。
          </p>
          <p>
            「何とかして彼らの力になることはできないか？」と考えた私たちがその答えの一つとしてたどり着いたのが、「手軽に自分の存在を発信してもらえるプラットフォームを作る」ということでした。
          </p>
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
        </section>
        <section id="qanda" className={cssIndex.qanda} data-observer="qanda">
          <h2>
            <span>よくある質問</span>
          </h2>
          <ul>
            <li>
              <details open>
                <summary>報酬の相場はどのくらい？</summary>
                場合にもよりますが、目安は以下の通りです。
              </details>
            </li>
            <li>
              <details>
                <summary>マッチング後のやり取り</summary>
                LINE@を用いてコミュニケーションに加えて、Zoomまたは対面の打ち合わせを行います。
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
            <p>とりあえず、最新情報を受け取る。</p>
            <form
              name="contact-form"
              action="https://script.google.com/macros/s/AKfycbxSRMLqALn0ZrbVfaih9vLBBbPBs_12ejz5vyBom9a0_cfU4mZAcoN_feNvaj4LAysx/exec"
              method="get"
              className={`${cssIndex.flex} ${recruit.form}`}
            >
              <input
                name="メルアド"
                type="email"
                placeholder="email@example.com"
              />
              <input type="submit" value="送信" className={recruit.submit} />
            </form>
            <p>問い合わせてみる！</p>
            <p>募集登録してみる！</p>
            <Link href="/recruit">
              <a>無料で掲載する！</a>
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
