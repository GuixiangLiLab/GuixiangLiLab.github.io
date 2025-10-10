"use client";

import Link from "next/link";
import "../students.css";

export default function MemberPage() {
  return (
    <>
      {/* 个人信息主体 */}
      <section className="member-student">
        <div className="wrap">
          <div className="grid">
            {/* 左侧：照片 */}
            <aside className="card-photo reveal">
              <img className="portrait" src="/img/Members/luodongdong.jpg" alt="Dong Dong" />
            </aside>

            {/* 右侧：内容 */}
            <article className="card-content reveal">
              <header className="header">
                <h1>Dongdong Luo</h1>
                <span className="badge-status">Master's · Year 2</span>
              </header>
              <div className="meta">Guixiang Li Laboratory · Southeast University</div>
              <div className="rule"></div>

              <section aria-labelledby="bio">
                <h3 id="bio">Background</h3>
                <div className="edu">
                  <div className="item">
                    <strong>Master.</strong> School of Materials and Physics, China University of Mining and Technology.
                  </div>
                </div>
              </section>

              <section aria-labelledby="origin">
                <h3 id="origin">Hometown</h3>
                <p>Pingliang, Gansu Province.</p>
              </section>

              <section aria-labelledby="research">
                <h3 id="research">Research Direction</h3>
                <p>Electrocatalytic water splitting, hydrogen energy, and wide-bandgap perovskite solar cells.</p>
              </section>

              <div className="footline"></div>

              {/* 返回成员列表 */}
              <div style={{ marginTop: 16 }}>
                <Link href="/members" className="btn btn-light px-3">← Back to Members</Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
