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
                {t("page.news.20260415-achievement.title")}
              </h1>

              {/* 正文段落 */}
              <p className="news-paragraph news-paragraph--dropcap">
                {t("page.news.20260415-achievement.p1")}
              </p>

              <p className="news-paragraph news-paragraph--highlight-brand">
                {t("page.news.20260415-achievement.p2")}
              </p>

              <img
                src="/img/News/20260415_achievement/figure1.jpg"
                alt={t("page.news.20260415-achievement.coverAlt_1")}
              />

              <p className="news-paragraph news-paragraph--highlight-brand">
                {t("page.news.20260415-achievement.p3")}
              </p>

              <img
                src="/img/News/20260415_achievement/figure2.png"
                alt={t("page.news.20260415-achievement.coverAlt_2")}
              />

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