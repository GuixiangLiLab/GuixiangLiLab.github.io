"use client";

import Link from "next/link";
import useI18nLite from "@/components/useI18nLite";
import "../students.css";
import { memberDetails } from "@/data/member-details";

export default function MemberDetailClient({ slug }: { slug: string }) {
  const { lang, L, t } = useI18nLite();
  const m = slug ? memberDetails[slug] : null;

  const pick = (obj?: { en?: string; zh?: string }) =>
    obj ? obj[lang] || obj.en || "" : "";

  if (!m) {
    return (
      <section className="member-student">
        <div className="wrap">
          <div className="grid">
            <article className="card-content reveal">
              <h1 style={{ marginBottom: 12 }}>
                {t("page.members.detail.notFound") || "Member Not Found"}
              </h1>
              <p style={{ marginBottom: 16 }}>
                {t("page.members.detail.backTip") || "Please return to the members list."}
              </p>
              <Link href={L("/members")} className="btn btn-light px-3">
                ← {t("page.members.detail.backMembers") || "Back to Members"}
              </Link>
            </article>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="member-student">
      <div className="wrap">
        <div className="grid">
          {/* 左侧：照片 + 侧边说明（可选） */}
          <aside className="card-photo reveal">
            <img className="portrait" src={m.portrait} alt={pick(m.alt)} />
            {m.sideNotes && (
              <div className="side-notes">
                {m.sideNotes.heading && <h4>{pick(m.sideNotes.heading)}</h4>}
                {m.sideNotes.paras?.map((p, i) => <p key={i}>{pick(p)}</p>)}
                {m.sideNotes.details && (
                  <details>
                    <summary>{pick(m.sideNotes.details.summary)}</summary>
                    <p>{pick(m.sideNotes.details.text)}</p>
                  </details>
                )}
              </div>
            )}
          </aside>

          {/* 右侧：内容 */}
          <article className="card-content reveal">
            <header className="header">
              <h1>{pick(m.name)}</h1>
              {m.statusBadge && <span className="badge-status">{pick(m.statusBadge)}</span>}
            </header>

            {m.affiliation && <div className="meta">{pick(m.affiliation)}</div>}
            <div className="rule" />

            {m.background && (
              <section aria-labelledby="bio">
                <h3 id="bio">{pick(m.background.title) || t("page.members.detail.background")}</h3>
                <div className="edu">
                  <div
                    className="item"
                    dangerouslySetInnerHTML={{ __html: pick(m.background.text) }}
                  />
                </div>
              </section>
            )}

            {m.hobbies && (
              <section aria-labelledby="hobby">
                <h3 id="hobby">{t("page.members.detail.hobbies")}</h3>
                <div className="chips">
                  {(m.hobbies[lang] || m.hobbies.en || []).map((h, i) => (
                    <span className="chip" key={i}>{h}</span>
                  ))}
                </div>
              </section>
            )}

            {m.statement && (
              <section aria-labelledby="self">
                <h3 id="self">{pick(m.statement.title) || t("page.members.detail.statement")}</h3>
                <p>{pick(m.statement.text)}</p>
              </section>
            )}

            {m.motto && (
              <section aria-labelledby="motto">
                <h3 id="motto">{t("page.members.detail.motto")}</h3>
                <div className="motto">{pick(m.motto)}</div>
              </section>
            )}

            {m.research && (
              <section aria-labelledby="research">
                <h3 id="research">{pick(m.research.title) || t("page.members.detail.research")}</h3>
                <p>{pick(m.research.text)}</p>
              </section>
            )}

            {m.extraSections?.map((sec) => (
              <section key={sec.id} aria-labelledby={sec.id}>
                <h3 id={sec.id}>{pick(sec.title) || sec.id}</h3>
                <p>{pick(sec.text)}</p>
              </section>
            ))}

            <div className="footline" />

            <div style={{ marginTop: 16 }}>
              <Link href={L("/members")} className="btn btn-light px-3">
                ← {t("page.members.detail.backMembers")}
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
