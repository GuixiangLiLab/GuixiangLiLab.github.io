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
              <img className="portrait" src="/img/liyifan.jpg" alt="Yifan Li" />
            </aside>

            {/* 右侧：内容 */}
            <article className="card-content reveal">
              <header className="header">
                <h1>Yifan Li</h1>
                <span className="badge-status">Research Assistant</span>
              </header>
              <div className="meta">Guixiang Li Laboratory · Southeast University</div>
              <div className="rule"></div>

              <section aria-labelledby="bio">
                <h3 id="bio">Background</h3>
                <div className="edu">
                  <div className="item"><strong>M.Eng.</strong> Optical Engineering, Hebei University. Research focus on
                    wide-bandgap perovskite solar cells, with a strong interest in photovoltaic materials.</div>
                </div>
              </section>

              <section aria-labelledby="hobby">
                <h3 id="hobby">Hobbies</h3>
                <div className="chips">
                  <span className="chip">Badminton</span>
                  <span className="chip">Table tennis</span>
                  <span className="chip">Billiards</span>
                </div>
              </section>

              <section aria-labelledby="self">
                <h3 id="self">Personal Statement</h3>
                <p>Objective and rational in viewing things, persistent in handling daily affairs, able to endure hardship,
                  and adaptable to change. Courageous when facing difficulties and challenges.</p>
              </section>

              <section aria-labelledby="motto">
                <h3 id="motto">Motto</h3>
                <div className="motto">“What’s done is done.”</div>
              </section>

              <section aria-labelledby="research">
                <h3 id="research">Research Direction</h3>
                <p>Wide-bandgap perovskite solar cells and all-perovskite tandem cells.</p>
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
