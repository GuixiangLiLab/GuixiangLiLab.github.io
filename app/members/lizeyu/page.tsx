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
              <img className="portrait" src="/img/Members/lizeyu.jpg" alt="Zeyu Li" />
            </aside>

            {/* 右侧：内容 */}
            <article className="card-content reveal">
              <header className="header">
                <h1>Zeyu Li</h1>
                <span className="badge-status">Master's · Year 1</span>
              </header>
              <div className="meta">Guixiang Li Laboratory · Southeast University</div>
              <div className="rule"></div>

              <section aria-labelledby="bio">
                <h3 id="bio">Background</h3>
                <div className="edu">
                  <div className="item">
                    <strong>B.Eng.</strong> Huazhong University of Science and Technology (HUST)
                  </div>
                  <div className="item">
                    <strong>Master.</strong> Joined the group in September 2025 (Year 1)
                  </div>
                </div>
              </section>

              <section aria-labelledby="hobby">
                <h3 id="hobby">Hobbies</h3>
                <div className="chips">
                  <span className="chip">Running</span>
                  <span className="chip">Badminton</span>
                </div>
              </section>

              <section aria-labelledby="self">
                <h3 id="self">Personal Statement</h3>
                <p>
                  Strong stress tolerance and a proactive mindset—ready to face challenges head-on,
                  highly motivated, and not easily discouraged.
                </p>
              </section>

              <section aria-labelledby="motto">
                <h3 id="motto">Motto</h3>
                <div className="motto">“Seize the day, gather ye rosebuds while ye may.”</div>
              </section>

              <section aria-labelledby="research">
                <h3 id="research">Research Direction</h3>
                <p>All-tin halide perovskite solar cells.</p>
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
