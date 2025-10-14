"use client";

import useI18nLite from "@/components/useI18nLite";
import "./contact.css";

export default function ContactPage() {
  const { t, lang } = useI18nLite();

  // 地图图片根据语言切换
  const mapSrc = lang === "zh" ? "/img/contact-map_zh.png" : "/img/contact-map.png";

  return (
    <>
      {/* Page Header */}
      <div className="container-fluid page-header py-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5 mt-4">
          <h1 className="display-2 text-white mb-3 animated slideInDown">
            {t("page.contact.title")}
          </h1>
        </div>
      </div>

      {/* Contact Content */}
      <div className="container-fluid py-5">
        <div className="container">
          {/* Intro paragraph */}
          <div className="mx-auto wow fadeInUp contact-content" data-wow-delay="0.1s">
            <p className="mb-5 detail-item">{t("page.contact.intro")}</p>
          </div>

          {/* Requirements */}
          <div className="row">
            <h3 className="display-9 mb-3">{t("page.contact.requirements.title")}</h3>
            <ul className="requirement-list">
              <li className="list-item">{t("page.contact.requirements.item1")}</li>
              <li className="list-item">{t("page.contact.requirements.item2")}</li>
              <li className="list-item">{t("page.contact.requirements.item3")}</li>
            </ul>

            {/* Contact email */}
            <p className="contact-info">
              {t("page.contact.email.intro")}
              <a href="mailto:guixiang.li@seu.edu.cn">guixiang.li@seu.edu.cn</a>
              {t("page.contact.email.suffix")}
            </p>

            {/* Map */}
            <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.5s">
              <img src={mapSrc} alt="Map" className="contact-map" />
            </div>
          </div>

          <hr />

          {/* Info blocks */}
          <div className="row contact-info position-relative g-0 mb-5">
            <div className="col-lg-6">
              <a href="#" className="d-flex justify-content-lg-center bg-primary p-4">
                <div className="icon-box-light flex-shrink-0">
                  <i className="bi bi-geo-alt text-dark"></i>
                </div>
                <div className="ms-3">
                  <h5 className="text-white">{t("page.contact.position.title")}</h5>
                  <h2 className="text-white mb-0">{t("page.contact.position.value")}</h2>
                </div>
              </a>
            </div>
            <div className="col-lg-6">
              <a
                href="mailto:guixiang.li@seu.edu.cn"
                className="d-flex justify-content-lg-center bg-primary p-4"
              >
                <div className="icon-box-light flex-shrink-0">
                  <i className="bi bi-envelope text-dark"></i>
                </div>
                <div className="ms-3">
                  <h5 className="text-white">{t("page.contact.mail.title")}</h5>
                  <h2 className="text-white mb-0">{t("page.contact.mail.value")}</h2>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
