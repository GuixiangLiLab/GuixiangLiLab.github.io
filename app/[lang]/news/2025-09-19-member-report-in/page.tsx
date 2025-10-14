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
                {t("page.news.member-report-in.title")}
              </h1>

              <img
                src="/img/main_page/new_member.jpg"
                alt={t("page.news.member-report-in.coverAlt")}
              />

              <p className="mb-4">
                {t("page.news.member-report-in.p1")}
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
