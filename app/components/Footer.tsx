"use client"

/**
 * 通用组件，页脚部分
 */

import useI18nLite from "@/components/useI18nLite";
import Link from "next/link";

export default function Footer() {
  const { t, L } = useI18nLite();

  return (
    <>
      {/* Footer Start */}
      <div
        className="container-fluid footer position-relative bg-dark text-white-50 py-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <div className="row g-5 py-5">
            <div className="col-lg-6 pe-lg-5">
              <Link href={L("/")} className="navbar-brand">
                <h1 className="h1 text-primary mb-5">
                  {t("component.footer.labName.primary")}
                  <span className="text-white">
                    {t("component.footer.labName.secondary")}
                  </span>
                </h1>
              </Link>

              <p>
                <i className="fa fa-map-marker-alt me-2" />
                {t("component.footer.address")}
              </p>
              <p>
                <i className="fa fa-envelope me-2" />
                guixiang.li@seu.edu.cn
              </p>

              <div className="d-flex mt-4">
                <Link
                  className="btn btn-lg-square btn-primary me-2"
                  href="https://x.com/GuixiangLi"
                >
                  <i className="fab fa-twitter"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-6 ps-lg-5">
              <div className="row g-5">
                <div className="col-sm-6">
                  <h4 className="text-light mb-4">
                    {t("component.footer.quickLinks.title")}
                  </h4>
                  <Link className="btn btn-link" href={L("/")}>
                    {t("component.footer.quickLinks.about")}
                  </Link>
                  <Link className="btn btn-link" href={L("/research")}>
                    {t("component.footer.quickLinks.research")}
                  </Link>
                  <Link className="btn btn-link" href={L("/publications")}>
                    {t("component.footer.quickLinks.publications")}
                  </Link>
                  <Link className="btn btn-link" href={L("/members")}>
                    {t("component.footer.quickLinks.team")}
                  </Link>
                  <Link className="btn btn-link" href={L("/news")}>
                    {t("component.footer.quickLinks.news")}
                  </Link>
                  <Link className="btn btn-link" href={L("/contact")}>
                    {t("component.footer.quickLinks.contact")}
                  </Link>
                </div>

                <div className="col-sm-6">
                  <h4 className="text-light mb-4">
                    {t("component.footer.popularLinks.title")}
                  </h4>
                  <Link className="btn btn-link" href="https://www.seu.edu.cn/">
                    {t("component.footer.popularLinks.university")}
                  </Link>
                  <Link className="btn btn-link" href="https://seugs.seu.edu.cn/">
                    {t("component.footer.popularLinks.master")}
                  </Link>
                  <Link className="btn btn-link" href="https://smse.seu.edu.cn/">
                    {t("component.footer.popularLinks.materials")}
                  </Link>
                </div>

                <div className="col-sm-12">
                  <h4 className="text-light mb-4">
                    {t("component.footer.newsletter.title")}
                  </h4>
                  <div className="w-100">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control border-0 py-3 px-4"
                        style={{ background: "rgba(255,255,255,.1)" }}
                        placeholder={t("component.footer.newsletter.placeholder")}
                      />
                      <button className="btn btn-primary px-4">
                        {t("component.footer.newsletter.signup")}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}

      {/* Copyright Start */}
      <div className="container-fluid copyright bg-dark text-white-50 py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-0">
                &copy;{" "}
                <Link href={L("/")}>{t("component.footer.copyright.lab")}</Link>.{" "}
                {t("component.footer.copyright.rights")}
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="mb-0">
                {t("component.footer.copyright.design")}{" "}
                <Link href="https://htmlcodex.com">HTML Codex</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright End */}

      {/* Back to Top */}
      <Link
        href="#"
        className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
      >
        <i className="bi bi-arrow-up" />
      </Link>
    </>
  );
}
