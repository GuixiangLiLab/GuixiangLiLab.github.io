"use client";

import Link from "next/link";
import "./news.css";

export default function NewsPage() {
  return (
    <>
      {/* Page Header */}
      <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5 mt-4">
          <h1 className="display-2 text-white mb-3 animated slideInDown">News</h1>
        </div>
      </div>

      {/* News List */}
      <div className="container-fluid container-service py-5">
        <div className="container pt-5">
          <div className="np-box row g-4">
            <div className="np-item">
              <img className="np-img wow fadeInUp" src="/img/main_page/new_member.jpg" alt="New member" />
              <div className="col-lg-7 col-md-6 wow fadeInUp np-content" data-wow-delay="0.1s">
                <div className="service-item">
                  <h4 className="mb-3 news-title">如约而至，共启新篇</h4>
                  <p className="mb-4 news-date">2025.09.19</p>
                  <Link className="btn btn-light px-3 np-readmore" href="/news/2025-09-19-member-report-in">
                    Read More<i className="bi bi-chevron-double-right ms-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* 可按需复制上面的块，继续添加更多新闻项 */}
          </div>
        </div>
      </div>
    </>
  );
}
