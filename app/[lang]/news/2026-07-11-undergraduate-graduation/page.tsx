"use client";

import Link from "next/link";
import useI18nLite from "@/components/useI18nLite";
import "./news-detail.css";

const imageBase = "/img/News/20260711_undergraduate_graduation";
const keyBase = "page.news.20260711-undergraduate-graduation";

export default function UndergraduateGraduation20260711Page() {
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
            <div className="col-md-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="display-6 mb-3">{t(`${keyBase}.title`)}</h1>

              <p className="news-paragraph news-paragraph--dropcap">{t(`${keyBase}.p1`)}</p>
              <p className="news-paragraph news-paragraph--indent">{t(`${keyBase}.p2`)}</p>

              <img
                src={`${imageBase}/Cake.jpg`}
                alt={t(`${keyBase}.cakeAlt`)}
                loading="eager"
              />

              <p className="news-paragraph news-paragraph--indent">{t(`${keyBase}.p3`)}</p>
              <p className="news-paragraph news-paragraph--highlight-brand">{t(`${keyBase}.highlight`)}</p>
              <p className="news-paragraph news-paragraph--indent">{t(`${keyBase}.p4`)}</p>

              <img
                src={`${imageBase}/Group_Photo_2.jpg`}
                alt={t(`${keyBase}.groupAlt2`)}
                loading="lazy"
              />

              <p className="news-paragraph news-paragraph--indent">{t(`${keyBase}.p5`)}</p>

              <img
                src={`${imageBase}/Group_Photo_3.jpg`}
                alt={t(`${keyBase}.groupAlt3`)}
                loading="lazy"
              />

              <p className="news-paragraph news-paragraph--indent">{t(`${keyBase}.p6`)}</p>

              <img
                src={`${imageBase}/Group_Photo_4.jpg`}
                alt={t(`${keyBase}.groupAlt4`)}
                loading="lazy"
              />

              <p className="news-paragraph news-paragraph--indent-with-line">{t(`${keyBase}.p7`)}</p>

              <div className="mt-4">
                <Link href={L("/news")} className="btn btn-outline-primary px-4">
                  {t("page.news.back")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
