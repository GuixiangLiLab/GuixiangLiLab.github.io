"use client";

/**
 * 通用论文列表渲染组件，从 data/publications.ts 读取数据并渲染论文
 */

import Link from "next/link";
import { publications, type Lang } from "@/data/publications";
import useI18nLite from "@/components/useI18nLite";

function isExternal(href?: string) {
  return !!href && /^(https?:)?\/\//i.test(href);
}

export default function Publications({
  moreHref,            // “更多”按钮地址（记得用 L("/publications") 传入）
  className = ""
}: {
  moreHref: string;
  className?: string;
}) {
  const { lang, t } = useI18nLite();
  const items = publications;

  return (
    <div className={`pn-col pn-card pn-col--pub ${className}`}>
      <div className="pn-header">
        <h2>
          <span>{t("page.home.pub.title.span")}</span> {t("page.home.pub.title.rest")}
        </h2>
      </div>

      <div className="pn-scroll">
        <ul className="pn-list">
          {items.map((p) => {
            const Title = p.title[lang] || p.title.en;
            const Authors = p.authorsHtml[lang] || p.authorsHtml.en;
            const Venue = p.venue[lang] || p.venue.en;

            const content = (
              <div className="pn-item">
                <img src={p.img} alt={Title} />
                <div className="pn-text">
                  <h3>{Title}</h3>
                  <p>
                    <span
                      className="pn-authors"
                      dangerouslySetInnerHTML={{ __html: Authors }}
                    />
                    {Venue ? <>. {Venue}.</> : null}
                  </p>
                </div>
              </div>
            );

            return (
              <li key={p.id}>
                {p.href ? (
                  isExternal(p.href) ? (
                    <a href={p.href} target="_blank" rel="noreferrer noopener">
                      {content}
                    </a>
                  ) : (
                    <Link href={p.href}>{content}</Link>
                  )
                ) : (
                  content
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <a href={moreHref} className="pn-more">
        {t("page.home.common.readMore")}
      </a>
    </div>
  );
}
