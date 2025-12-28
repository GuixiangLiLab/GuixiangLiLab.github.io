"use client";

import Link from "next/link";
import "./members.css";
import useI18nLite from "@/components/useI18nLite";
import { members, GROUP_ORDER, type MemberGroup } from "@/data/members";

function groupMembers() {
  const grouped = new Map<MemberGroup, typeof members>();
  for (const g of GROUP_ORDER) grouped.set(g, []);
  for (const m of members) {
    if (!grouped.has(m.group)) grouped.set(m.group, []);
    grouped.get(m.group)!.push(m);
  }
  // 组内排序
  for (const [g, arr] of grouped) {
    arr.sort((a, b) => (a.order ?? 1e9) - (b.order ?? 1e9));
  }
  return grouped;
}

export default function MembersPage() {
  const { t, L, lang } = useI18nLite();
  const grouped = groupMembers();

  // 分组标题 key 映射（用现有 i18n 键）
  const groupTitleKey: Record<MemberGroup, string> = {
    prof: "page.members.group.prof",
    visitingscholar:"page.members.group.visitingscholar",
    postdoc: "page.members.group.postdoc",
    phd: "page.members.group.phd",
    ra: "page.members.group.ra",
    master: "page.members.group.master",
    undergrad: "page.members.group.undergrad",
    alumni: "page.members.group.alumni"
  };

  return (
    <>
      {/* Page Header */}
      <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5 mt-4">
          <h1 className="display-2 text-white mb-3 animated slideInDown">
            {t("page.members.title")}
          </h1>
        </div>
      </div>

      <section className="lab-members">
        {GROUP_ORDER.map((g) => {
          const list = grouped.get(g)!;
          const isEmpty = !list || list.length === 0;

          return (
            <div className={`group ${g === "alumni" ? "alumni" : ""}`} key={g}>
              <h2 className="block-title">{t(groupTitleKey[g])}</h2>

              <div className="members-grid">
                {isEmpty ? (
                  null
                ) : (
                  list.map((m) => {
                    const displayName = m.name[lang] || m.name.en;
                    const isProf = m.isProfessor || g === "prof"; // 兼容旧写法
                    return (
                      <div className={`member-card ${isProf ? "professor" : ""}`} key={m.id}>
                        <Link href={L(`/members/${m.slug}`)}>
                          <div className="avatar">
                            <img src={m.img} alt={displayName} />
                          </div>
                          <div className="member-name">{displayName}</div>
                        </Link>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
