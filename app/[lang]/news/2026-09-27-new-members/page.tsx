import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { newcomerNews2026 } from "@/data/newcomers-2026";
import "./news-detail.css";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang === "zh" ? "zh" : "en";

  return {
    title: `${newcomerNews2026.title[locale]} | Guixiang Li Lab`,
    description: newcomerNews2026.intro[locale],
  };
}

export default async function NewMembers2026Page({ params }: PageProps) {
  const { lang } = await params;
  const locale = lang === "zh" ? "zh" : "en";
  const isChinese = locale === "zh";
  const copy = isChinese
    ? {
        news: "新闻动态",
        year: "2026 · 新生介绍",
        category: "研究生一年级",
        date: "2026 年 9 月 27 日",
        people: "认识新同学",
        education: "教育经历",
        hometown: "家乡",
        research: "研究方向",
        motto: "座右铭",
        profile: "查看个人主页",
        closing: "新起点，一起向前",
        back: "返回新闻列表",
      }
    : {
        news: "News",
        year: "2026 · NEW MEMBERS",
        category: "First-year graduate students",
        date: "September 27, 2026",
        people: "Meet our new members",
        education: "Education",
        hometown: "Hometown",
        research: "Research direction",
        motto: "Motto",
        profile: "View member profile",
        closing: "A new beginning, together",
        back: "Back to news",
      };

  return (
    <>
      <div className="container-fluid page-header py-5 fsog-newcomers-banner">
        <div className="container text-center py-5 mt-4">
          <p className="display-2 text-white mb-3 fsog-newcomers-banner-title">
            {copy.news}
          </p>
        </div>
      </div>

      <main className="fsog-newcomers" lang={locale}>
        <article className="fsog-newcomers-article">
          <header className="fsog-newcomers-header">
            <p className="fsog-newcomers-kicker">{copy.year}</p>
            <h1>{newcomerNews2026.title[locale]}</h1>
            <div className="fsog-newcomers-meta">
              <span>{copy.category}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={newcomerNews2026.date}>{copy.date}</time>
            </div>
            <p className="fsog-newcomers-intro">{newcomerNews2026.intro[locale]}</p>
            <nav className="fsog-newcomers-contents" aria-label={copy.people}>
              <span className="fsog-newcomers-contents-label">{copy.people}</span>
              <ul>
                {newcomerNews2026.people.map((person) => (
                  <li key={person.slug}>
                    <a href={`#${person.slug}`}>{person.name[locale]}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </header>

          <div className="fsog-newcomers-people">
            {newcomerNews2026.people.map((person) => (
              <section
                className="fsog-newcomers-person"
                id={person.slug}
                key={person.slug}
                aria-labelledby={`${person.slug}-heading`}
              >
                <div className="fsog-newcomers-name-row">
                  <h2 id={`${person.slug}-heading`}>{person.name[locale]}</h2>
                </div>

                <div className="fsog-newcomers-person-body">
                  <figure className="fsog-newcomers-portrait">
                    <div className="fsog-newcomers-photo">
                      <Image
                        src={person.photo}
                        alt={person.name[locale]}
                        width={person.width}
                        height={person.height}
                        sizes="(max-width: 760px) 280px, 240px"
                      />
                    </div>
                    <figcaption>{person.name.en}</figcaption>
                  </figure>

                  <div className="fsog-newcomers-profile">
                    <dl className="fsog-newcomers-facts">
                      <div>
                        <dt>{copy.education}</dt>
                        <dd>{person.education[locale]}</dd>
                      </div>
                      <div>
                        <dt>{copy.hometown}</dt>
                        <dd>{person.hometown[locale]}</dd>
                      </div>
                    </dl>
                    <p className="fsog-newcomers-about">{person.about[locale]}</p>
                    <div className="fsog-newcomers-research">
                      <h3>{copy.research}</h3>
                      <p>{person.research[locale]}</p>
                    </div>
                    <blockquote className="fsog-newcomers-motto">
                      <span>{copy.motto}</span>
                      <p>{person.motto[locale]}</p>
                    </blockquote>
                    <Link
                      className="fsog-newcomers-profile-link"
                      href={`/${locale}/members/${person.slug}/`}
                    >
                      {copy.profile}
                      <span aria-hidden="true">↗</span>
                    </Link>
                  </div>
                </div>
              </section>
            ))}
          </div>

          <footer className="fsog-newcomers-footer">
            <p className="fsog-newcomers-kicker">GUIXIANG LI LAB · 2026</p>
            <h2>{copy.closing}</h2>
            <p>{newcomerNews2026.closing[locale]}</p>
            <Link className="fsog-newcomers-back" href={`/${locale}/news/`}>
              <span aria-hidden="true">←</span>
              {copy.back}
            </Link>
          </footer>
        </article>
      </main>
    </>
  );
}
