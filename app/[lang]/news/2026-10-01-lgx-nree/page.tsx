"use client";

import Image from "next/image";
import Link from "next/link";
import useI18nLite from "@/components/useI18nLite";
import "../2026-09-05-wxb-am/news-detail.css";

const imageBase = "/img/News/20261001_lgx_nree";
const keyBase = "page.news.20261001-lgx-nree";
const paperUrl = "https://doi.org/10.1038/s44287-026-00332-4";
const sourceUrl = "https://mp.weixin.qq.com/s?__biz=MzA3MzI0ODA2Mg==&mid=2649873469&idx=1&sn=a282370995b783b6b5daa60f73ed0501";
const sections = [
  { id: "background", paragraphs: ["background1"], figure: { number: 1, width: 1575, height: 675 } },
  { id: "bottlenecks", paragraphs: ["bottlenecks1", "bottlenecks2"], figure: { number: 2, width: 1575, height: 810 } },
  { id: "framework", paragraphs: ["framework1", "framework2"], figure: { number: 3, width: 1575, height: 687 } },
  { id: "outlook", paragraphs: ["outlook1"] },
];

export default function LgxNree20261001Page() {
  const { t, L } = useI18nLite();

  return (
    <>
      <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5 mt-4">
          <h1 className="display-2 text-white mb-3 animated slideInDown">
            {t("page.news.title")}
          </h1>
        </div>
      </div>

      <div className="container-fluid py-5 fsog-am">
        <div className="container pb-5">
          <article className="am-article">
            <header className="am-header">
              <div className="am-meta" aria-label={t(`${keyBase}.metaLabel`)}>
                <time dateTime="2026-10-01">2026.10.01</time>
                <span aria-hidden="true" className="am-meta-dot" />
                <span>{t(`${keyBase}.category`)}</span>
              </div>
              <h1>{t(`${keyBase}.title`)}</h1>
              <p className="am-lead">{t(`${keyBase}.lead`)}</p>
            </header>

            <p className="am-paragraph">{t(`${keyBase}.intro1`)}</p>
            <p className="am-paragraph">{t(`${keyBase}.intro2`)}</p>

            <figure className="am-figure am-figure--paper">
              <a href={paperUrl} target="_blank" rel="noreferrer">
                <Image
                  src={`${imageBase}/paper-banner.png`}
                  alt={t(`${keyBase}.paperImageAlt`)}
                  width={1575}
                  height={792}
                />
              </a>
            </figure>

            <p className="am-paragraph">{t(`${keyBase}.intro3`)}</p>

            {sections.map(({ id, paragraphs, figure }, index) => (
              <section className="am-section" aria-labelledby={`${id}-heading`} key={id}>
                <div className="am-section-heading">
                  <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <h2 id={`${id}-heading`}>{t(`${keyBase}.${id}Title`)}</h2>
                </div>
                {paragraphs.map((key) => (
                  <p className="am-paragraph" key={key}>{t(`${keyBase}.${key}`)}</p>
                ))}
                {figure && (
                  <figure className="am-figure">
                    <a href={`${imageBase}/figure-${figure.number}.png`} target="_blank" rel="noreferrer">
                      <Image
                        src={`${imageBase}/figure-${figure.number}.png`}
                        alt={t(`${keyBase}.figure${figure.number}Caption`)}
                        width={figure.width}
                        height={figure.height}
                      />
                    </a>
                    <figcaption>{t(`${keyBase}.figure${figure.number}Caption`)}</figcaption>
                  </figure>
                )}
              </section>
            ))}

            <section className="am-section" aria-labelledby="paper-heading">
              <div className="am-section-heading">
                <span aria-hidden="true">05</span>
                <h2 id="paper-heading">{t(`${keyBase}.paperInfoTitle`)}</h2>
              </div>
              <dl className="am-paper-info">
                <div>
                  <dt>{t(`${keyBase}.paperTitleLabel`)}</dt>
                  <dd>Towards system-level artificial intelligence in perovskite photovoltaics</dd>
                </div>
                <div>
                  <dt>{t(`${keyBase}.journalLabel`)}</dt>
                  <dd>Nature Reviews Electrical Engineering</dd>
                </div>
                <div>
                  <dt>{t(`${keyBase}.firstAuthorsLabel`)}</dt>
                  <dd>{t(`${keyBase}.firstAuthors`)}</dd>
                </div>
                <div>
                  <dt>{t(`${keyBase}.authorsLabel`)}</dt>
                  <dd>{t(`${keyBase}.authors`)}</dd>
                </div>
                <div>
                  <dt>{t(`${keyBase}.publishedLabel`)}</dt>
                  <dd><time dateTime="2026-10-01">{t(`${keyBase}.published`)}</time></dd>
                </div>
                <div>
                  <dt>{t(`${keyBase}.paperLinkLabel`)}</dt>
                  <dd><a href={paperUrl} target="_blank" rel="noreferrer">{paperUrl}</a></dd>
                </div>
              </dl>
            </section>

            <footer className="am-footer">
              <div className="am-credits">
                <span>{t(`${keyBase}.figureCredit`)}</span>
                <a href={sourceUrl} target="_blank" rel="noreferrer">
                  {t(`${keyBase}.sourceLink`)}
                </a>
              </div>
              <Link href={L("/news")} className="btn btn-outline-primary px-4">
                {t("page.news.back")}
              </Link>
            </footer>
          </article>
        </div>
      </div>
    </>
  );
}
