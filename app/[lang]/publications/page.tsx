"use client";

import "./publication.css";
import Link from "next/link";
import useI18nLite from "@/components/useI18nLite";
import { publications, type Lang } from "@/data/publications";

function groupByYear(lang: Lang) {
  // 先按 year 降序，再分组
  const sorted = [...publications].sort((a, b) => b.year - a.year);
  const map = new Map<number, typeof publications>();
  for (const p of sorted) {
    if (!map.has(p.year)) map.set(p.year, []);
    map.get(p.year)!.push(p);
  }
  return map;
}

export default function PublicationsPage() {
  const { t, lang } = useI18nLite();

  const selected = publications.filter((p) => p.selected);
  const byYear = groupByYear(lang);

  return (
    <>
      {/* Page Header */}
      <div className="container-fluid page-header py-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5 mt-4">
          <h1 className="display-2 text-white mb-3 animated slideInDown">
            {t("page.publications.title")}
          </h1>
        </div>
      </div>

      {/* Selected Publications */}
      <div className="container-fluid container-service py-5">
        <div className="container pt-5">
          <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 600 }}>
            <h1 className="display-6 mb-3">{t("page.publications.selectedTitle")}</h1>
            <p className="mb-5">
              {t("page.publications.seeFull")}{" "}
              <a
                className="scholar-link"
                href="https://scholar.google.com/citations?user=eaS3FCcAAAAJ&hl=en"
                target="_blank"
                rel="noreferrer"
              >
                {t("page.publications.googleScholar")}{" "}
                <img src="/img/icon/graduation-cap.svg" alt="Scholar" />
              </a>
            </p>
          </div>

          <div className="article-box row g-4">
            {selected.map((p, i) => {
              const Title = p.title[lang] || p.title.en;
              const Authors = p.authorsHtml[lang] || p.authorsHtml.en;
              const Venue = p.venue[lang] || p.venue.en;

              // 为了和你的原结构一致，左右排版保持：左图右文
              return (
                <div className="article-item" key={p.id}>
                  <img
                    className={`article-img wow fadeInUp ${i === 2 ? "publication-img article-img-3" : "publication-img"}`}
                    src={p.img}
                    alt={Title}
                  />
                  <div className="col-lg-7 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item">
                      <h5 className="mb-3">{Title}</h5>
                      <p className="mb-4">
                        <span
                          className="bold pn-authors"
                          dangerouslySetInnerHTML={{ __html: Authors }}
                        />
                        {Venue ? <>. {Venue}</> : null}
                      </p>
                      {p.doi ? <h6 className="mb-3">DOI: {p.doi}</h6> : null}

                      <a className="btn btn-light px-3" href={p.href} target="_blank" rel="noreferrer noopener">
                        {t("page.publications.readMore")}
                        <i className="bi bi-chevron-double-right ms-1" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* All Publications (Year groups) */}
      <section className="pubs-module" aria-label={t("page.publications.allAria")}>
        <h2 className="pubs-title">{t("page.publications.allTitle")}</h2>

        {Array.from(byYear.entries()).map(([year, list]) => (
          <div className="pubs-group" key={year}>
            <div className="pubs-year">{year}</div>
            <ul className="pubs-list">
              {list.map((p) => {
                const Title = p.title[lang] || p.title.en;
                const Authors = p.authorsHtml[lang] || p.authorsHtml.en;
                const Venue = p.venue[lang] || p.venue.en;

                return (
                  <li className="pubs-item" key={p.id}>
                    <div className="pubs-title-line">
                      <a href={p.href} target="_blank" rel="noreferrer noopener">
                        {Title}
                      </a>
                    </div>
                    <p className="pubs-meta">
                      <span dangerouslySetInnerHTML={{ __html: Authors }} />
                      {Venue ? <>. {Venue}</> : null}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </section>
    </>
  );
}
