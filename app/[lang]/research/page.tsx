"use client";

import Image from "next/image";
import "./research.css";
import useI18nLite from "@/components/useI18nLite";

export default function ResearchPage() {
  const { t } = useI18nLite();

  return (
    <>
      {/* 页头 */}
      <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5 mt-4">
          <h1 className="display-2 text-white mb-3 animated slideInDown">
            {t("page.research.title")}
          </h1>
        </div>
      </div>

      {/* 卡片 01 */}
      <div className="research-card">
        <div className="card-content">
          <div className="left-section">
            <div className="title-image-group">
              <div className="image-container">
                <Image
                  src="/img/perovskite_solar_cells.png"
                  alt={t("page.research.cards.1.alt")}
                  fill
                  className="research-image"
                />
              </div>
            </div>
          </div>

          <div className="right-section">
            <div className="slide-overlay" />
            <div className="content-area">
              <div className="section-number">01</div>
              <h3 className="content-title">{t("page.research.cards.1.title")}</h3>
              <p className="content-text">{t("page.research.cards.1.text")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* 卡片 02 */}
      <div className="research-card">
        <div className="card-content">
          <div className="left-section">
            <div className="title-image-group">
              <div className="image-container">
                <Image
                  src="/img/perovskite_photovoltaics.png"
                  alt={t("page.research.cards.2.alt")}
                  fill
                  className="research-image"
                />
              </div>
            </div>
          </div>

          <div className="right-section">
            <div className="slide-overlay" />
            <div className="content-area">
              <div className="section-number">02</div>
              <h3 className="content-title">{t("page.research.cards.2.title")}</h3>
              <p className="content-text">{t("page.research.cards.2.text")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* 卡片 03 */}
      <div className="research-card">
        <div className="card-content">
          <div className="left-section">
            <div className="title-image-group">
              <div className="image-container">
                <Image
                  src="/img/novel_photoelectric_conversion_materials.png"
                  alt={t("page.research.cards.3.alt")}
                  fill
                  className="research-image"
                />
              </div>
            </div>
          </div>

          <div className="right-section">
            <div className="slide-overlay" />
            <div className="content-area">
              <div className="section-number">03</div>
              <h3 className="content-title">{t("page.research.cards.3.title")}</h3>
              <p className="content-text">{t("page.research.cards.3.text")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
