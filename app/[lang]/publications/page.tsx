"use client";

import "./publication.css";
import Link from "next/link";
import useI18nLite from "@/components/useI18nLite";
import { publications, type Lang } from "@/data/publications";

export default function PublicationsPage() {
  const { t, lang } = useI18nLite();

    // 移到组件内，使用 t() 翻译分组标题
  function groupByYear() {
    // 先按 year 降序，再分组
    const sorted = [...publications].sort((a, b) => b.year - a.year);
    // 分组键类型改为 string（因为翻译后是字符串，如"2022 & Earlier"或"2022及之前"）
    const map = new Map<string, typeof publications>();

    for (const p of sorted) {
      // 2023+ 用年份（转字符串，保持键类型统一），2022及之前用文本
      const groupKey = p.year > 2022 ? p.year.toString() : t("page.publications.before2022");
      
      if (!map.has(groupKey)) {
        map.set(groupKey, []);
      }
      map.get(groupKey)!.push(p);
    }
    return map;
  }

  const selected = publications.filter((p) => p.selected);
  const byYear = groupByYear();

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
            <h1 className="display-6 mb-3 fw-bold">{t("page.publications.selectedTitle")}</h1>
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
                      <h5 className="mb-3" dangerouslySetInnerHTML={{ __html: Title }}></h5>
                      <p className="mb-4">
                        <span
                          className="bold pn-authors"
                          dangerouslySetInnerHTML={{ __html: Authors }}
                        />
                          {Venue ? (
                            <>
                            <span className="pub-period">.</span> {/* 句号加黑色类 */}
                            <span className="pub-venue-wrap">{Venue}</span> {/* 期刊名加换行类 */}
                            </>
                          ) : null}
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

      {/* Main Publications (Year groups) */}
      <section className="pubs-module" aria-label={t("page.publications.allAria")}>
        <h2 className="pubs-title">{t("page.publications.allTitle")}</h2>

        {/* 渲染分组：2023+按年份显示，2022及之前合并显示 */}
        {Array.from(byYear.entries()).map(([groupKey, list]) => (
          <div className="pubs-group" key={groupKey}>
            {/* 分组标题：直接用 groupKey（年份或"2022及之前"） */}
            <div className="pubs-year">{groupKey}</div>
            <ul className="pubs-list">
              {list.map((p) => {
                const Title = p.title[lang] || p.title.en;
                const Authors = p.authorsHtml[lang] || p.authorsHtml.en;
                const Venue = p.venue[lang] || p.venue.en;

                return (
                  <li className="pubs-item" key={p.id}>
                    <div className="pubs-title-line">
                      <a 
                      href={p.href} 
                      target="_blank" 
                      rel="noreferrer noopener"
                      dangerouslySetInnerHTML={{ __html: Title }} // 替换原来的 {Title}
                      />
                    </div>
                    <p className="pubs-meta">
                      <span dangerouslySetInnerHTML={{ __html: Authors }} />
                          {Venue ? (
                            <>
                            <span className="pub-period">.</span>{/* 句号加黑色类 */}
                            <span className="pub-venue-wrap-main-publication">{Venue}</span>{/* 期刊名加换行类 */}
                            </>
                          ) : null}
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