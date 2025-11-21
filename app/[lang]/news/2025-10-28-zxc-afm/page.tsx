"use client";

import Link from "next/link";
import "./news-detail.css";
import useI18nLite from "@/components/useI18nLite";

export default function ZxcAfmPage() {
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
                {t("page.news.20251028-zxc-afm.title")}
              </h1>

              <p className="mb-4">
                {t("page.news.20251028-zxc-afm.p1")}
              </p>
              
              <p className="mb-6">
                {t("page.news.20251028-zxc-afm.p2")}
              </p>

              <img
                src="/img/News/zxc_content.png"
                alt={t("page.news.20251028-zxc-afm.coverAlt")}
              />

              <p className="mb-6">
                {t("page.news.20251028-zxc-afm.p18")}
              </p>

              <p className="mb-7">
                {t("page.news.20251028-zxc-afm.p3")}
              </p>

              <p className="mb-6">
                {t("page.news.20251028-zxc-afm.p4")}
              </p>

              <p className="mb-6">
                {t("page.news.20251028-zxc-afm.p5")}
              </p>
              
              <p className="mb-7">
                {t("page.news.20251028-zxc-afm.p6")}
              </p>
              
              <p className="mb-6">
                {t("page.news.20251028-zxc-afm.p7")}
              </p>
              
              <p className="mb-8">
                {t("page.news.20251028-zxc-afm.p8")}
              </p>

              <p className="mb-8">
                {t("page.news.20251028-zxc-afm.p9")}
              </p>

              <p className="mb-8">
                {t("page.news.20251028-zxc-afm.p10")}
              </p>

              <p className="mb-6">
                {t("page.news.20251028-zxc-afm.p11")}
              </p>

              <p className="mb-7">
                {t("page.news.20251028-zxc-afm.p12")}
              </p>

              <p className="mb-6">
                {t("page.news.20251028-zxc-afm.p13")}
              </p>

              <p className="mb-6">
                {t("page.news.20251028-zxc-afm.p14")}
              </p>
              
              <p className="mb-6">
                {t("page.news.20251028-zxc-afm.p15")}
              </p>

              <p className="mb-6">
                {t("page.news.20251028-zxc-afm.p16")}
              </p>

              <p className="mb-9">
              {t("page.news.20251111-lgx-np.p22")}
              <a 
              href="https://doi.org/10.1002/adfm.202523417" 
              target="_blank"
              rel="noopener noreferrer" // 安全增强：防止窗口劫持
              >
                https://doi.org/10.1002/adfm.202523417
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
