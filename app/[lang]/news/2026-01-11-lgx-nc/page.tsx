"use client";

import Link from "next/link";
import "./news-detail.css";
import useI18nLite from "@/components/useI18nLite";

export default function MemberReportInPage() {
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
              <h1 className="display-6 mb-3">
                {t("page.news.20260111-lgx-nc.title")}
              </h1>

              <p className="mb-4">
                {t("page.news.20260111-lgx-nc.p1")}
              </p>

              <p className="mb-6">
                {t("page.news.20260111-lgx-nc.p2")}
              </p>
              
              <img
                src="/img/News/20260111_lgx_nc/lgx_content_1.png"
                alt={t("page.news.20260111-lgx-nc.coverAlt")}
              />

              <p className="mb-6">
                {t("page.news.20260111-lgx-nc.p3")}
              </p>

              <p className="mb-7">
                {t("page.news.20260111-lgx-nc.p4")}
              </p>

              <p className="mb-6">
                {t("page.news.20260111-lgx-nc.p5")}
              </p>
              
              <p className="mb-6">
                {t("page.news.20260111-lgx-nc.p6")}
              </p>
              
              <p className="mb-7">
                {t("page.news.20260111-lgx-nc.p7")}
              </p>
              
              <p className="mb-6">
                {t("page.news.20260111-lgx-nc.p8")}
              </p>

              <p className="mb-8">
                {t("page.news.20260111-lgx-nc.p9")}
              </p>

              <p className="mb-6">
                {t("page.news.20260111-lgx-nc.p10")}
              </p>

              <p className="mb-8">
                {t("page.news.20260111-lgx-nc.p11")}
              </p>

              <p className="mb-6">
                {t("page.news.20260111-lgx-nc.p12")}
              </p>
              
              <p className="mb-8">
                {t("page.news.20260111-lgx-nc.p13")}
              </p>

              <p className="mb-6">
                {t("page.news.20260111-lgx-nc.p14")}
              </p>

              <p className="mb-6">
                {t("page.news.20260111-lgx-nc.p15")}
              </p>

              <p className="mb-6">
                {t("page.news.20260111-lgx-nc.p16")}
              </p>

              <p className="mb-6">
                {t("page.news.20260111-lgx-nc.p17")}
              </p>

              <img
                src="/img/News/20260111_lgx_nc/figure1.png"
                alt={t("page.news.20260111-lgx-nc.coverAlt_1")}
              />

              <p className="mb-9">
                {t("page.news.20260111-lgx-nc.p18")}
              </p>

              <img
                src="/img/News/20260111_lgx_nc/figure2.png"
                alt={t("page.news.20260111-lgx-nc.coverAlt_2")}
              />

              <p className="mb-9">
                {t("page.news.20260111-lgx-nc.p19")}
              </p>

              <img
                src="/img/News/20260111_lgx_nc/figure3.png"
                alt={t("page.news.20260111-lgx-nc.coverAlt_3")}
              />
              
              <p className="mb-9">
                {t("page.news.20260111-lgx-nc.p20")}
              </p>

              <img
                src="/img/News/20260111_lgx_nc/figure4.png"
                alt={t("page.news.20260111-lgx-nc.coverAlt_4")}
              />

              <p className="mb-9">
                {t("page.news.20260111-lgx-nc.p21")}
              </p>

              <p className="mb-7">
                {t("page.news.20260111-lgx-nc.p22")}
              </p>

              <p className="mb-6">
                {t("page.news.20260111-lgx-nc.p23")}
              </p>

              <p className="mb-6">
                {t("page.news.20260111-lgx-nc.p24")}
              </p>

              <p className="mb-6">
                {t("page.news.20260111-lgx-nc.p25")}
              </p>

             <p className="mb-10">
              {t("page.news.20260111-lgx-nc.p26")}
              <a 
              href="https://www.nature.com/articles/s41467-025-68207-0" 
              target="_blank"
              rel="noopener noreferrer" // 安全增强：防止窗口劫持
              >
                https://www.nature.com/articles/s41467-025-68207-0
              </a>
             </p>
              
              {/* Back button */}
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
