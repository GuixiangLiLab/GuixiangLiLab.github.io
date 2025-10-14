"use client";

import "./news.css";
import useI18nLite from "@/components/useI18nLite";
import { news } from "@/data/news";

export default function NewsPage() {
  const { t, L, lang } = useI18nLite();

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

      {/* News List */}
      <div className="container-fluid container-service py-5">
        <div className="container pt-5">
          <div className="np-box row g-4">

            {news.length === 0 ? (
              <p className="text-center opacity-75">{t("page.news.empty")}</p>
            ) : (
              news.map(item => {
                const title = item.title[lang] || item.title.en;
                // const summary = item.summary?.[lang] || item.summary?.en;
                return (
                  <div className="np-item" key={item.id}>
                    <img
                      className="np-img wow fadeInUp"
                      src={item.cover}
                      alt={t("page.news.coverAlt")}
                    />
                    <div className="col-lg-7 col-md-6 wow fadeInUp np-content" data-wow-delay="0.1s">
                      <div className="service-item">
                        <h4 className="mb-3 news-title">{title}</h4>
                        <p className="mb-4 news-date">{item.date}</p>
                        {/* {summary && <p className="mb-4">{summary}</p>} */}
                        <a className="btn btn-light px-3 np-readmore" href={L(`/news/${item.slug}`)}>
                          {t("page.news.readMore")}
                          <i className="bi bi-chevron-double-right ms-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })
            )}

          </div>
        </div>
      </div>
    </>
  );
}
