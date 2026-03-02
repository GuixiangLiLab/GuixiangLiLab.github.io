"use client";

import Link from "next/link";
import "./news-detail.css"; // 复用同目录的样式文件
import useI18nLite from "@/components/useI18nLite";

export default function SpringTeamBuildingPage() {
  const { t, L } = useI18nLite();

  return (
    <>
      {/* Page Header - 和现有新闻页面结构完全一致 */}
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
                {t("page.news.20260128-spring-team-building.title")}
              </h1>

              {/* 正文段落 */}
              <p className="news-paragraph news-paragraph--dropcap">
                {t("page.news.20260128-spring-team-building.p1")}
              </p>

              <p className="news-paragraph news-paragraph--indent">
                {t("page.news.20260128-spring-team-building.p2")}
              </p>

              {/* 食材图片 */}
              <img
                src="/img/News/20260128_spring_team_building/food.JPG"
                alt={t("page.news.20260128-spring-team-building.coverAlt")}
              />

              <p className="news-paragraph news-paragraph--indent">
                {t("page.news.20260128-spring-team-building.p3")}
              </p>

              {/* 围炉聚餐图片 */}
              <img
                src="/img/News/20260128_spring_team_building/cooking.JPG"
                alt={t("page.news.20260128-spring-team-building.coverAlt1")}
              />

              <p className="news-paragraph news-paragraph--highlight-brand">
                {t("page.news.20260128-spring-team-building.p4")}
              </p>

              <p className="news-paragraph news-paragraph--indent">
                {t("page.news.20260128-spring-team-building.p5")}
              </p>

              {/* 游戏环节图片 */}
              <img
                src="/img/News/20260128_spring_team_building/games.JPG"
                alt={t("page.news.20260128-spring-team-building.coverAlt2")}
              />

              <p className="news-paragraph news-paragraph--indent">
                {t("page.news.20260128-spring-team-building.p6")}
              </p>

              {/* 合影图片 */}
              <img
                src="/img/News/20260128_spring_team_building/group_photo.jpg"
                alt={t("page.news.20260128-spring-team-building.coverAlt3")}
              />

              <p className="news-paragraph news-paragraph--indent-with-line">
                {t("page.news.20260128-spring-team-building.p7")}
              </p>

              {/* 返回按钮 - 和现有新闻页面保持一致 */}
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