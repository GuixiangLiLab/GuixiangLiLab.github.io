"use client";

import Image from "next/image";
import Link from "next/link";
import useI18nLite from "@/components/useI18nLite";
import "../2026-04-15-achievement/news-detail.css";

const keyBase = "page.news.20261011-achievement";
const imageBase = "/img/News/20261011_achievement";
const sourceUrl = "https://mp.weixin.qq.com/s/euUGTIxfiPFpbRAOA5eIHA";

export default function Achievement20261011Page() {
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

      <div className="container-fluid container-team py-5 fsog-news">
        <div className="container pb-5">
          <div className="row g-5 align-items-center mb-5">
            <article className="col-md-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="display-6 mb-3">{t(`${keyBase}.title`)}</h1>
              <p className="news-meta">
                <time dateTime="2026-10-11">2026.10.11</time>
              </p>

              <p className="news-paragraph news-paragraph--dropcap">
                {t(`${keyBase}.p1`)}
              </p>

              <p className="news-paragraph news-paragraph--highlight-brand">
                {t(`${keyBase}.p2`)}
              </p>
              <a href={`${imageBase}/figure1.png`} target="_blank" rel="noreferrer">
                <Image src={`${imageBase}/figure1.png`} alt={t(`${keyBase}.figure1Alt`)} width={502} height={1787} />
              </a>

              <p className="news-paragraph news-paragraph--highlight-brand">
                {t(`${keyBase}.p3`)}
              </p>
              <a href={`${imageBase}/figure2.jpg`} target="_blank" rel="noreferrer">
                <Image src={`${imageBase}/figure2.jpg`} alt={t(`${keyBase}.figure2Alt`)} width={800} height={771} />
              </a>

              <div className="mt-4">
                <p className="news-meta">
                  {t(`${keyBase}.source`)}{" · "}
                  <a href={sourceUrl} target="_blank" rel="noreferrer">
                    {t(`${keyBase}.sourceLink`)}
                  </a>
                </p>
                <Link href={L("/news")} className="btn btn-outline-primary px-4">
                  {t("page.news.back")}
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
