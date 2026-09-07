"use client";

import Image from "next/image";
import Link from "next/link";
import useI18nLite from "@/components/useI18nLite";
import "./news-detail.css";

const imageBase = "/img/News/20260905_wxb_am";
const keyBase = "page.news.20260905-wxb-am";
const paperUrl = "https://doi.org/10.1002/adma.74828";
const sourceUrl = "https://mp.weixin.qq.com/s/eYKSV24qyD-qtVhCmTP95Q";
const figures = [
  { number: 1, width: 701, height: 826 },
  { number: 2, width: 807, height: 826 },
  { number: 3, width: 918, height: 848 },
  { number: 4, width: 968, height: 826 },
  { number: 5, width: 907, height: 825 },
];

export default function WxbAm20260905Page() {
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
                <time dateTime="2026-09-05">2026.09.05</time>
                <span aria-hidden="true" className="am-meta-dot" />
                <span>{t(`${keyBase}.category`)}</span>
              </div>
              <h1>{t(`${keyBase}.title`)}</h1>
              <p className="am-lead">{t(`${keyBase}.lead`)}</p>
            </header>

            <p className="am-paragraph">{t(`${keyBase}.intro1`)}</p>
            <p className="am-paragraph">{t(`${keyBase}.intro2`)}</p>

            <figure className="am-figure am-figure--paper">
              <Image
                src={`${imageBase}/paper-banner.png`}
                alt={t(`${keyBase}.paperImageAlt`)}
                width={510}
                height={243}
              />
            </figure>

            <p className="am-paragraph">{t(`${keyBase}.intro3`)}</p>

            <section className="am-section" aria-labelledby="overview-heading">
              <div className="am-section-heading">
                <span aria-hidden="true">01</span>
                <h2 id="overview-heading">{t(`${keyBase}.overviewTitle`)}</h2>
              </div>
              {figures.map(({ number, width, height }) => (
                <figure className="am-figure" key={number}>
                  <a href={`${imageBase}/figure-${number}.png`} target="_blank" rel="noreferrer">
                    <Image
                      src={`${imageBase}/figure-${number}.png`}
                      alt={t(`${keyBase}.figure${number}Caption`)}
                      width={width}
                      height={height}
                    />
                  </a>
                  <figcaption>{t(`${keyBase}.figure${number}Caption`)}</figcaption>
                </figure>
              ))}
            </section>

            <section className="am-section" aria-labelledby="paper-heading">
              <div className="am-section-heading">
                <span aria-hidden="true">02</span>
                <h2 id="paper-heading">{t(`${keyBase}.paperInfoTitle`)}</h2>
              </div>
              <dl className="am-paper-info">
                <div>
                  <dt>{t(`${keyBase}.paperTitleLabel`)}</dt>
                  <dd>Laser-Defined Reaction Topology Enables Controllable Solid-State Transformations for Scalable Perovskite Photovoltaics</dd>
                </div>
                <div>
                  <dt>{t(`${keyBase}.journalLabel`)}</dt>
                  <dd>Advanced Materials</dd>
                </div>
                <div>
                  <dt>{t(`${keyBase}.authorsLabel`)}</dt>
                  <dd>{t(`${keyBase}.authors`)}</dd>
                </div>
                <div>
                  <dt>{t(`${keyBase}.paperLinkLabel`)}</dt>
                  <dd><a href={paperUrl} target="_blank" rel="noreferrer">{paperUrl}</a></dd>
                </div>
              </dl>
            </section>

            <footer className="am-footer">
              <div className="am-attribution">
                <Image
                  className="am-qr"
                  src={`${imageBase}/wechat-qr.jpg`}
                  alt={t(`${keyBase}.qrAlt`)}
                  width={258}
                  height={258}
                />
                <div className="am-credits">
                  <span>{t(`${keyBase}.copyCredit`)}</span>
                  <span>{t(`${keyBase}.layoutCredit`)}</span>
                  <a href={sourceUrl} target="_blank" rel="noreferrer">
                    {t(`${keyBase}.sourceLink`)}
                  </a>
                </div>
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
