"use client";

import { useState, useEffect } from "react";
import useI18nLite from "@/components/useI18nLite";
import Publications from "@/app/components/Publications";
import SliderLeftImgRightText from "@/components/slider/SliderLeftImgRightText";
import "./page.css";

export default function HomePage() {
  const { t, L } = useI18nLite();

  // “Show More” 的展开状态 & 首屏 loading
  const [showMore, setShowMore] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      {/* 只有 loading=true 才渲染遮罩 */}
      {loading && (
        <div
          id="spinner"
          className="bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
          aria-hidden="true"
          style={{ inset: 0, zIndex: 2000 }}
        >
          <div className="spinner-border text-primary" role="status" style={{ width: "3rem", height: "3rem" }} />
        </div>
      )}

      {/* Carousel Start（轮播） */}
      <div className="container-fluid header-carousel px-0 mb-5">
        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            {/* Slide 1 */}
            <div className="carousel-item">
              <div className="img-container fill-blur kenburns" style={{ ['--bg-url' as any]: "url('img/Perovskite_Phase_Transition_Temperature_Cycle.jpg')" }}>
                <img className="big-img" src="/img/main_page/Schematic.jpg" alt={t("page.home.carousel.alt.phase")} />
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <div className="img-container fill-blur kenburns" style={{ ['--bg-url' as any]: "url('img/main_page/new_member.jpg')" }}>
                <img className="big-img" src="/img/main_page/new_member.jpg" alt={t("page.home.carousel.alt.member")} />
              </div>
            </div>

            {/* Slide 3 */}
            <div className="carousel-item">
              <div className="img-container fill-blur kenburns" style={{ ['--bg-url' as any]: "url('img/main_page/20251111_lgx_CarouselStart.png')" }}>
                <img className="big-img" src="/img/main_page/20251111_lgx_CarouselStart.png" alt={t("page.home.carousel.alt.member")} />
              </div>
              {/* 新增标注区域，与slide4结构一致 */}
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-end">
                    <div className="col-lg-7 caption-col">
                      <h1 className="display-1 text-end text-white mb-3">{t("page.home.carousel.slide3.title")}</h1>
                      <p className="mb-4 text-end">{t("page.home.carousel.slide3.desc")}</p>
                      <a href={L("/news")} className="btn btn-primary py-3 px-5">{t("page.home.carousel.slide3.cta")}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 4 (active) */}
            <div className="carousel-item active">
              <div className="img-container fill-blur kenburns" style={{ ['--bg-url' as any]: "url('img/SouthEastUniversity.png')" }}>
                <img className="big-img" src="/img/SouthEastUniversity.png" alt={t("page.home.carousel.alt.seu")} />
              </div>
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-end">
                    <div className="col-lg-7 caption-col">
                      <h1 className="display-1 text-end text-white mb-3">{t("page.home.hero.title")}</h1>
                      <p className="mb-4 text-end">{t("page.home.hero.desc")}</p>
                      <a href={L("/research")} className="btn btn-primary py-3 px-5">{t("page.home.hero.cta")}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev" aria-label={t("page.home.carousel.prev")}>
            <span className="carousel-control-prev-icon" aria-hidden="true" />
          </button>

          <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next" aria-label={t("page.home.carousel.next")}>
            <span className="carousel-control-next-icon" aria-hidden="true" />
          </button>
        </div>
      </div>
      {/* Carousel End */}

      {/* Profile Start */}
      <div className="container-fluid container-team py-3">
        <div className="container pb-1 profile-module">
          <div className="row g-5 align-items-center">
            <div className="col-md-6 wow fadeIn side-img-container" data-wow-delay="0.3s">
              <img className="side-img" src="/img/liguixiang.jpg" alt={t("page.home.profile.alt")} />
            </div>
            <div className="col-md-6 wow fadeIn profile-text" data-wow-delay="0.5s">
              <h1 className="display-6 mb-3">{t("page.home.profile.name")}</h1>
              <p className="mb-1 teacher-intro">{t("page.home.profile.title")}</p>
              <p className="mb-5 teacher-intro">{t("page.home.profile.affiliation")}</p>
              <h3 className="mb-3">{t("page.home.profile.bio.title")}</h3>
              <p className="mb-4 teacher-intro">{t("page.home.profile.bio.brief")}</p>

              <button
                className="btn btn-toggle px-3 d-inline-flex align-items-center"
                id="toggle-btn"
                onClick={() => setShowMore(v => !v)}
                aria-expanded={showMore}
                aria-controls="more-text"
              >
                {showMore ? t("page.home.profile.bio.less") : t("page.home.profile.bio.more")}
                <i className={`bi ms-2 ${showMore ? "bi-chevron-double-left" : "bi-chevron-double-right"}`} />
              </button>

              <p className={`mb-4 mt-3 ${showMore ? "show" : ""} teacher-intro`} id="more-text">
                {t("page.home.profile.bio.long_1")}
              </p>
              <p className={`mb-4 mt-3 ${showMore ? "show" : ""} teacher-intro`} id="more-text">
                {t("page.home.profile.bio.long_2")}
              </p>
            </div>
          </div>
        </div>
        {/* Profile End */}

        {/* Research Start */}
        <div className="research-module">
          <div className="rm-wrap" role="region" aria-label={t("page.home.research.aria")}>
            <div className="rm-header">
              <div className="pn-header">
                <h2><span>{t("page.home.research.title.span")}</span> {t("page.home.research.title.rest")}</h2>
              </div>
            </div>

            <div className="rm-grid">
              <a className="rm-card" href={L("/research")}>
                <div className="rm-image">
                  <img src="/img/research/perovskite_photovoltaics.jpg" alt={t("page.home.research.card1.alt")} />
                </div>
                <div className="rm-text">
                  <h3>{t("page.home.research.card1.title")}</h3>
                </div>
              </a>

              <a className="rm-card" href={L("/research")}>
                <div className="rm-image">
                  <img src="/img/research/perovskite_solar_cells.png" alt={t("page.home.research.card2.alt")} />
                </div>
                <div className="rm-text">
                  <h3>{t("page.home.research.card2.title")}</h3>
                </div>
              </a>

              <a className="rm-card" href={L("/research")}>
                <div className="rm-image">
                  <img src="/img/research/novel_photoelectric_conversion_materials.png" alt={t("page.home.research.card3.alt")} />
                </div>
                <div className="rm-text">
                  <h3>{t("page.home.research.card3.title")}</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* Research End */}

        {/* Publications & News Start */}
        <div className="pub-news-module">
          <div className="pn-wrap pn-has-divider">
            <div className="pn-deco" />

            {/* Publications */}
            <Publications moreHref={L("/publications")} />

            {/* News */}
            <div className="pn-col pn-card pn-col--news">
              <div className="pn-header">
                <h2>{t("page.home.news.title")}</h2>
              </div>
              <ul className="pn-list news-list">
                <li>
                  <a href={L("/news")}>
                    <span className="pn-date">2025-12-24</span>
                    <span className="pn-title">{t("page.home.news.item1.title")}</span>
                  </a>
                </li>
                <li>
                  <a href={L("/news")}>
                    <span className="pn-date">2025-12-05</span>
                    <span className="pn-title">{t("page.home.news.item2.title")}</span>
                  </a>
                </li>
                <li>
                  <a href={L("/news")}>
                    <span className="pn-date">2025-11-11</span>
                    <span className="pn-title">{t("page.home.news.item3.title")}</span>
                  </a>
                </li>
                <li>
                  <a href={L("/news")}>
                    <span className="pn-date">2025-10-28</span>
                    <span className="pn-title">{t("page.home.news.item4.title")}</span>
                  </a>
                </li>
              </ul>
              <a href={L("/news")} className="pn-more">{t("page.home.common.readMore")}</a>
            </div>
          </div>
        </div>
        {/* Publications & News End */}
      </div>
    </>
  );
}
