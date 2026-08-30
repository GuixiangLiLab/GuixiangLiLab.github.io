"use client";

import Link from "next/link";
import useI18nLite from "@/components/useI18nLite";
import "./news-detail.css";

const imageBase = "/img/News/20260818_lyf_kdd";
const keyBase = "page.news.20260818-lyf-kdd";
const paperUrl = "https://doi.org/10.1145/3770855.3818858";
const sourceUrl = "https://mp.weixin.qq.com/s/pbPt8rG0QKWct63Rxcj3lQ";

export default function LyfKdd20260818Page() {
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

      <div className="container-fluid container-team py-5 fsog-news fsog-kdd">
        <div className="container pb-5">
          <div className="row g-5 align-items-center mb-5">
            <article className="col-md-6 wow fadeIn" data-wow-delay="0.3s">
              <header className="news-article-header">
                <div className="news-meta" aria-label={t(`${keyBase}.metaLabel`)}>
                  <time dateTime="2026-08-18">2026.08.18</time>
                  <span aria-hidden="true" className="news-meta-dot" />
                  <span>{t(`${keyBase}.category`)}</span>
                </div>
                <h1 className="display-6 mb-3">{t(`${keyBase}.title`)}</h1>
                <p className="news-lead">{t(`${keyBase}.lead`)}</p>
              </header>

              <p className="news-paragraph news-paragraph--dropcap">{t(`${keyBase}.intro1`)}</p>

              <figure className="news-figure news-figure--paper">
                <img
                  src={`${imageBase}/paper-banner.png`}
                  alt={t(`${keyBase}.paperImageAlt`)}
                  loading="eager"
                />
              </figure>

              <p className="news-paragraph news-paragraph--indent">{t(`${keyBase}.intro2`)}</p>

              <section className="news-section" aria-labelledby="background-heading">
                <div className="news-section-heading">
                  <span>01</span>
                  <h2 id="background-heading">{t(`${keyBase}.backgroundTitle`)}</h2>
                </div>
                <p className="news-paragraph news-paragraph--indent">{t(`${keyBase}.backgroundP1`)}</p>
                <p className="news-paragraph news-paragraph--indent">{t(`${keyBase}.backgroundP2`)}</p>
              </section>

              <section className="news-section" aria-labelledby="highlights-heading">
                <div className="news-section-heading">
                  <span>02</span>
                  <h2 id="highlights-heading">{t(`${keyBase}.highlightsTitle`)}</h2>
                </div>
                <p className="news-paragraph news-paragraph--indent">{t(`${keyBase}.highlightsIntro`)}</p>

                <div className="research-highlights">
                  {[1, 2, 3].map((index) => (
                    <div className="research-highlight" key={index}>
                      <span className="research-highlight-number">0{index}</span>
                      <h3>{t(`${keyBase}.highlight${index}Title`)}</h3>
                      <p>{t(`${keyBase}.highlight${index}Body`)}</p>
                    </div>
                  ))}
                </div>

                {[1, 2, 3, 4].map((index) => (
                  <figure className="news-figure" key={index}>
                    <img
                      src={`${imageBase}/figure-${index}.png`}
                      alt={t(`${keyBase}.figure${index}Caption`)}
                      loading="lazy"
                    />
                    <figcaption>{t(`${keyBase}.figure${index}Caption`)}</figcaption>
                  </figure>
                ))}

                <figure className="news-figure">
                  <div className="news-figure-pair">
                    <img
                      src={`${imageBase}/figure-5a.png`}
                      alt={t(`${keyBase}.figure5aAlt`)}
                      loading="lazy"
                    />
                    <img
                      src={`${imageBase}/figure-5b.png`}
                      alt={t(`${keyBase}.figure5bAlt`)}
                      loading="lazy"
                    />
                  </div>
                  <figcaption>{t(`${keyBase}.figure5Caption`)}</figcaption>
                </figure>

                <figure className="news-figure">
                  <img
                    src={`${imageBase}/figure-6.png`}
                    alt={t(`${keyBase}.figure6Caption`)}
                    loading="lazy"
                  />
                  <figcaption>{t(`${keyBase}.figure6Caption`)}</figcaption>
                </figure>
              </section>

              <section className="news-section" aria-labelledby="significance-heading">
                <div className="news-section-heading">
                  <span>03</span>
                  <h2 id="significance-heading">{t(`${keyBase}.significanceTitle`)}</h2>
                </div>
                <p className="news-paragraph news-paragraph--indent">{t(`${keyBase}.significanceBody`)}</p>
              </section>

              <section className="news-section" aria-labelledby="paper-heading">
                <div className="news-section-heading">
                  <span>04</span>
                  <h2 id="paper-heading">{t(`${keyBase}.paperInfoTitle`)}</h2>
                </div>
                <dl className="paper-info">
                  <div>
                    <dt>{t(`${keyBase}.paperTitleLabel`)}</dt>
                    <dd>PeroMAS: A Multi-agent System of Perovskite Material Discovery</dd>
                  </div>
                  <div>
                    <dt>{t(`${keyBase}.conferenceLabel`)}</dt>
                    <dd>ACM SIGKDD Conference on Knowledge Discovery and Data Mining</dd>
                  </div>
                  <div>
                    <dt>{t(`${keyBase}.authorsLabel`)}</dt>
                    <dd>{t(`${keyBase}.authors`)}</dd>
                  </div>
                  <div>
                    <dt>{t(`${keyBase}.paperLinkLabel`)}</dt>
                    <dd>
                      <a href={paperUrl} target="_blank" rel="noreferrer">
                        {paperUrl}
                      </a>
                    </dd>
                  </div>
                </dl>
              </section>

              <footer className="news-footer">
                <div className="news-credits">
                  <span>{t(`${keyBase}.copyCredit`)}</span>
                  <span>{t(`${keyBase}.layoutCredit`)}</span>
                </div>
                <div className="news-actions">
                  <a href={sourceUrl} target="_blank" rel="noreferrer" className="news-source-link">
                    {t(`${keyBase}.sourceLink`)}
                  </a>
                  <Link href={L("/news")} className="btn btn-outline-primary px-4">
                    {t("page.news.back")}
                  </Link>
                </div>
              </footer>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
