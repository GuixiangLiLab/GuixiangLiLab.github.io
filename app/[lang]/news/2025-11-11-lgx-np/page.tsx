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
                {t("page.news.20251111-lgx-np.title")}
              </h1>

              <p className="mb-4">
                {t("page.news.20251111-lgx-np.p1")}
              </p>

              <p className="mb-6">
                {t("page.news.20251111-lgx-np.p2")}
              </p>
              
              <img
                src="/img/News/20251111_lgx_np/lgx_content_1.png"
                alt={t("page.news.20251111-lgx-np.coverAlt")}
              />

              <p className="mb-6">
                {t("page.news.20251111-lgx-np.p3")}
              </p>

              <p className="mb-7">
                {t("page.news.20251111-lgx-np.p4")}
              </p>

              <p className="mb-6">
                {t("page.news.20251111-lgx-np.p5")}
              </p>
              
              <p className="mb-6">
                {t("page.news.20251111-lgx-np.p6")}
              </p>
              
              <p className="mb-7">
                {t("page.news.20251111-lgx-np.p7")}
              </p>
              
              <p className="mb-6">
                {t("page.news.20251111-lgx-np.p8")}
              </p>

              <p className="mb-8">
                {t("page.news.20251111-lgx-np.p9")}
              </p>

              <p className="mb-8">
                {t("page.news.20251111-lgx-np.p10")}
              </p>

              <p className="mb-8">
                {t("page.news.20251111-lgx-np.p11")}
              </p>

              <p className="mb-6">
                {t("page.news.20251111-lgx-np.p12")}
              </p>

              <img
                src="/img/News/20251111_lgx_np/figure1.png"
                alt={t("page.news.20251111-lgx-np.coverAlt_1")}
              />

              <p className="mb-9">
                {t("page.news.20251111-lgx-np.p13")}
              </p>

              <img
                src="/img/News/20251111_lgx_np/figure2.png"
                alt={t("page.news.20251111-lgx-np.coverAlt_2")}
              />

              <p className="mb-9">
                {t("page.news.20251111-lgx-np.p14")}
              </p>

              <img
                src="/img/News/20251111_lgx_np/figure3.png"
                alt={t("page.news.20251111-lgx-np.coverAlt_3")}
              />
              
              <p className="mb-9">
                {t("page.news.20251111-lgx-np.p15")}
              </p>

              <img
                src="/img/News/20251111_lgx_np/figure4.png"
                alt={t("page.news.20251111-lgx-np.coverAlt_4")}
              />

              <p className="mb-9">
                {t("page.news.20251111-lgx-np.p16")}
              </p>

              <p className="mb-7">
                {t("page.news.20251111-lgx-np.p17")}
              </p>

              <p className="mb-6">
                {t("page.news.20251111-lgx-np.p18")}
              </p>

              <p className="mb-6">
                {t("page.news.20251111-lgx-np.p19")}
              </p>

              <p className="mb-6">
                {t("page.news.20251111-lgx-np.p20")}
              </p>

              <p className="mb-6">
                {t("page.news.20251111-lgx-np.p21")}
              </p>

              <p className="mb-10">
                {t("page.news.20251111-lgx-np.p22")}
                <a href="https://doi.org/10.1038/s41566-025-01791-1">https://doi.org/10.1038/s41566-025-01791-1</a>
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
