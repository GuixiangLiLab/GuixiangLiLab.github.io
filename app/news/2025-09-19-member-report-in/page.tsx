// app/news/2025-09-19-member-report-in/page.tsx
"use client";

import Link from "next/link";
import "./news-detail.css";

export default function MemberReportInPage() {
  return (
    <>
      {/* Page Header */}
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-5 mt-4">
          <h1 className="display-2 text-white mb-3 animated slideInDown">
            News
          </h1>
        </div>
      </div>

      {/* News Content */}
      <div className="container-fluid container-team py-5 fsog-news">
        <div className="container pb-5">
          <div className="row g-5 align-items-center mb-5">
            <div className="col-md-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="display-6 mb-3">如约而至，共启新篇</h1>
              <img
                src="/img/main_page/new_member.jpg"
                alt="New Member Arrival"
              />
              <p className="mb-4">
                当第一缕晨光穿过实验楼的窗棂落在翻页的记录本上;
                当走廊尽头传来轻声讨论思想的火花在空气中悄然碰撞。
                九月的风，吹散了枝头残留的夏热，更拨动着一颗颗跃动不息的科研脉搏。
                在这片尚待耕耘的学术沃土上 Functional Semiconductors and Optoelectronics Group
                的航船，此刻正鸣笛出港!
              </p>
              
              {/* 返回按钮 */}
              <div className="mt-4">
                <Link href="/news" className="btn btn-outline-primary px-4">
                  ← Back to News
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
