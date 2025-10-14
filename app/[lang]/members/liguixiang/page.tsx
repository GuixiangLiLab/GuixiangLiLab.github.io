"use client";

import Link from "next/link";
import "../students.css";
import useI18nLite from "@/components/useI18nLite";

export default function MemberPage() {
  const { t, L } = useI18nLite();

  return (
    <>
      <div className="container-fluid container-team py-5">
        <div className="container pb-5">
          <div className="row g-5 align-items-center mb-5">
            <div className="col-md-6 wow fadeIn side-img-container" data-wow-delay="0.3s">
              <img
                className="side-img"
                src="/img/liguixiang.jpg"
                alt={t("page.members.detail.prof.alt")}
              />
            </div>
            <div className="col-md-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="display-6 mb-3">{t("page.members.detail.prof.title")}</h1>
              <p className="mb-1">{t("page.members.detail.prof.role")}</p>
              <p className="mb-5">{t("page.members.detail.prof.affiliation")}</p>

              <h3 className="mb-3">{t("page.members.detail.prof.bio.title")}</h3>
              <p className="mb-4">{t("page.members.detail.prof.bio.p1")}</p>
              <p className="mb-4">{t("page.members.detail.prof.bio.p2")}</p>

              <div style={{ marginTop: 16 }}>
                <Link href={L("/members")} className="btn btn-light px-3">
                  {t("page.members.detail.prof.back")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
