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
                {t("page.news.20260319-wsq-csr.title")}
              </h1>

              {/* 正文段落 */}
              <p className="news-paragraph news-paragraph--dropcap">
                {t("page.news.20260319-wsq-csr.p1")}
              </p>

              <p className="news-paragraph news-paragraph--indent">
                {t("page.news.20260319-wsq-csr.p2")}
              </p>

              {/* 研究相关图片（可根据实际需求添加） */}
              <img
                src="/img/News/20260319_wsq_csr/content_20260319_wsq_csr.png"
                alt={t("page.news.20260319-wsq-csr.coverAlt")}
              />

              <p className="news-paragraph news-paragraph--indent">
                {t("page.news.20260319-wsq-csr.p3")}
              </p>

              <p className="news-paragraph news-paragraph--highlight-brand">
                {t("page.news.20260319-wsq-csr.p4")}
              </p>

              <p className="news-paragraph news-paragraph--indent">
                {t("page.news.20260319-wsq-csr.p5")}
              </p>

              <p className="news-paragraph news-paragraph--indent">
                {t("page.news.20260319-wsq-csr.p6")}
              </p>

              <p className="news-paragraph news-paragraph--indent">
                {t("page.news.20260319-wsq-csr.p7")}
              </p>

              <p className="news-paragraph news-paragraph--highlight-brand">
                {t("page.news.20260319-wsq-csr.p8")}
              </p>

              <p className="news-paragraph news-paragraph--indent">
                {t("page.news.20260319-wsq-csr.p9")}
              </p>

              <p className="news-paragraph news-paragraph--highlight-front">
                {t("page.news.20260319-wsq-csr.p10")}
              </p>

              <p className="news-paragraph news-paragraph--indent">
                {t("page.news.20260319-wsq-csr.p11")}
              </p>

              <p className="news-paragraph news-paragraph--highlight-front">
                {t("page.news.20260319-wsq-csr.p12")}
              </p>

              <p className="news-paragraph news-paragraph--indent">
                {t("page.news.20260319-wsq-csr.p13")}
              </p>

              <p className="news-paragraph news-paragraph--highlight-front">
                {t("page.news.20260319-wsq-csr.p14")}
              </p>

              <p className="news-paragraph news-paragraph--indent">
                {t("page.news.20260319-wsq-csr.p15")}
              </p>

              <img
                src="/img/News/20260319_wsq_csr/figure1.png"
                alt={t("page.news.20260319-wsq-csr.coverAlt_1")}
              />

              <p className="news-paragraph news-paragraph--figure-explanation">
                {t("page.news.20260319-wsq-csr.p16")}
              </p>

              <img
                src="/img/News/20260319_wsq_csr/figure2.png"
                alt={t("page.news.20260319-wsq-csr.coverAlt_2")}
              />

              <p className="news-paragraph news-paragraph--figure-explanation">
                {t("page.news.20260319-wsq-csr.p17")}
              </p>

              <img
                src="/img/News/20260319_wsq_csr/figure3.png"
                alt={t("page.news.20260319-wsq-csr.coverAlt_3")}
              />
              
              <p className="news-paragraph news-paragraph--figure-explanation">
                {t("page.news.20260319-wsq-csr.p18")}
              </p>

              <img
                src="/img/News/20260319_wsq_csr/figure4.png"
                alt={t("page.news.20260319-wsq-csr.coverAlt_4")}
              />

              <p className="news-paragraph news-paragraph--figure-explanation">
                {t("page.news.20260319-wsq-csr.p19")}
              </p>

              <p className="news-paragraph news-paragraph--highlight-brand">
                {t("page.news.20260319-wsq-csr.p20")}
              </p>

              <p className="news-paragraph news-paragraph--indent">
                {t("page.news.20260319-wsq-csr.p21")}
              </p>

              <p className="news-paragraph news-paragraph--highlight-brand">
                {t("page.news.20260319-wsq-csr.p22")}
              </p>

              <p className="news-paragraph news-paragraph--indent">
                {t("page.news.20260319-wsq-csr.p23")}
              </p>

              <p className="news-paragraph news-paragraph--indent">
                {t("page.news.20260319-wsq-csr.p24")}
              </p>

              <p className="news-paragraph news-paragraph--indent">
                {t("page.news.20260319-wsq-csr.p25")}
              </p>

              {/* DOI链接 */}
              <p className="news-paragraph news-paragraph--indent-with-line">
                {t("page.news.20260319-wsq-csr.doiDesc")}
                <a 
                  href="http://engine.scichina.com/doi/10.1360/CSB-2025-5779" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  http://engine.scichina.com/doi/10.1360/CSB-2025-5779
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