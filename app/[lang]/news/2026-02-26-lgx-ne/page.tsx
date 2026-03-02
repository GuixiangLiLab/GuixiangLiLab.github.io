"use client";

import Link from "next/link";
import "./news-detail.css"; // 复用同目录的样式文件
import useI18nLite from "@/components/useI18nLite";

export default function NatureEnergyPage() {
  const { t, L } = useI18nLite();

  return (
    <>
      {/* Page Header */}
      <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5 mt-4">
          <h1 className="display-2 text-white mb-3 animated slideInDown">
            {t("page.news.title")}
          </h1>
        </div>
      </div>

      {/* News Content */}
      <div className="container-fluid container-team py-5 fsog-news">
        <div className="container pb-5">
          <div className="row g-5 align-items-center mb-5">
            <div className="col-md-6 wow fadeIn" data-wow-delay="0.5s">
              {/* 新闻标题 */}
              <h1 className="display-6 mb-3">
                {t("page.news.20260226-lgx-ne.title")}
              </h1>

              {/* 正文段落 */}
              <p className="news-paragraph news-paragraph--dropcap">
                {t("page.news.20260226-lgx-ne.p1")}
              </p>

              <p className="news-paragraph news-paragraph--indent">
                {t("page.news.20260226-lgx-ne.p2")}
              </p>

              {/* 研究相关图片（可根据实际需求添加） */}
              <img
                src="/img/News/20260226_lgx_ne/content_20260226_lgx_ne.png"
                alt={t("page.news.20260226-lgx-ne.coverAlt")}
              />

              <p className="news-paragraph news-paragraph--indent">
                {t("page.news.20260226-lgx-ne.p3")}
              </p>

              <p className="news-paragraph news-paragraph--highlight-brand">
                {t("page.news.20260226-lgx-ne.p4")}
              </p>

              <p className="news-paragraph news-paragraph--indent">
                {t("page.news.20260226-lgx-ne.p5")}
              </p>

              <p className="news-paragraph news-paragraph--indent">
                {t("page.news.20260226-lgx-ne.p6")}
              </p>

              <p className="news-paragraph news-paragraph--highlight-brand">
                {t("page.news.20260226-lgx-ne.p7")}
              </p>

              <p className="news-paragraph news-paragraph--indent">
                {t("page.news.20260226-lgx-ne.p8")}
              </p>

              <p className="news-paragraph news-paragraph--highlight-front">
                {t("page.news.20260226-lgx-ne.p9")}
              </p>

              <p className="news-paragraph news-paragraph--indent">
                {t("page.news.20260226-lgx-ne.p10")}
              </p>

              <p className="news-paragraph news-paragraph--indent">
                {t("page.news.20260226-lgx-ne.p11")}
              </p>

              <p className="news-paragraph news-paragraph--highlight-front">
                {t("page.news.20260226-lgx-ne.p12")}
              </p>

              <p className="news-paragraph news-paragraph--indent">
                {t("page.news.20260226-lgx-ne.p13")}
              </p>

              <p className="news-paragraph news-paragraph--indent">
                {t("page.news.20260226-lgx-ne.p14")}
              </p>

              <p className="news-paragraph news-paragraph--highlight-front">
                {t("page.news.20260226-lgx-ne.p15")}
              </p>

              <p className="news-paragraph news-paragraph--indent">
                {t("page.news.20260226-lgx-ne.p16")}
              </p>

              <p className="news-paragraph news-paragraph--indent">
                {t("page.news.20260226-lgx-ne.p17")}
              </p>

              <p className="news-paragraph news-paragraph--indent">
                {t("page.news.20260226-lgx-ne.p18")}
              </p>

              <img
                src="/img/News/20260111_lgx_nc/figure1.png"
                alt={t("page.news.20260226-lgx-ne.coverAlt_1")}
              />

              <p className="news-paragraph news-paragraph--figure-explanation">
                {t("page.news.20260226-lgx-ne.p19")}
              </p>

              <img
                src="/img/News/20260111_lgx_nc/figure2.png"
                alt={t("page.news.20260226-lgx-ne.coverAlt_2")}
              />

              <p className="news-paragraph news-paragraph--figure-explanation">
                {t("page.news.20260226-lgx-ne.p20")}
              </p>

              <img
                src="/img/News/20260111_lgx_nc/figure3.png"
                alt={t("page.news.20260226-lgx-ne.coverAlt_3")}
              />
              
              <p className="news-paragraph news-paragraph--figure-explanation">
                {t("page.news.20260226-lgx-ne.p21")}
              </p>

              <img
                src="/img/News/20260111_lgx_nc/figure4.png"
                alt={t("page.news.20260226-lgx-ne.coverAlt_4")}
              />

              <p className="news-paragraph news-paragraph--figure-explanation">
                {t("page.news.20260226-lgx-ne.p22")}
              </p>

              <p className="news-paragraph news-paragraph--highlight-brand">
                {t("page.news.20260226-lgx-ne.p23")}
              </p>

              <p className="news-paragraph news-paragraph--indent">
                {t("page.news.20260226-lgx-ne.p24")}
              </p>

              <p className="news-paragraph news-paragraph--indent">
                {t("page.news.20260226-lgx-ne.p25")}
              </p>

              <p className="news-paragraph news-paragraph--indent">
                {t("page.news.20260226-lgx-ne.p26")}
              </p>

              {/* DOI链接 */}
              <p className="news-paragraph news-paragraph--indent-with-line">
                {t("page.news.20260226-lgx-ne.doiDesc")}
                <a 
                  href="https://www.nature.com/articles/s41560-026-01993-z" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.nature.com/articles/s41560-026-01993-z
                </a>
              </p>

              {/* 返回按钮 */}
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