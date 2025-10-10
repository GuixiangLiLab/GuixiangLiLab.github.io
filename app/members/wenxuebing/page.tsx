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
              <img className="portrait" src="/img/Members/wenxuebing.jpg" alt="Xuebing Wen" />
            </aside>

            {/* 右侧：内容 */}
            <article className="card-content reveal">
              <header className="header">
                <h1>Xuebing Wen</h1>
                <span className="badge-status">PhD · Year 1</span>
              </header>
              <div className="meta">Guixiang Li Laboratory · Southeast University</div>
              <div className="rule"></div>

              <section aria-labelledby="bio">
                <h3 id="bio">Background</h3>
                <div className="edu">
                  <div className="item"><strong>M.Eng. </strong>  Optoelectronic Information Engineering Major, South
                    China Normal University, Fujian Putian, June 2025</div>
                </div>
              </section>

              <section aria-labelledby="hobby">
                <h3 id="hobby">Hobbies</h3>
                <div className="chips">
                  <span className="chip">Photography</span>
                  <span className="chip">Board games</span>
                  <span className="chip">Lip sync shows</span>
                </div>
              </section>

              <section aria-labelledby="self">
                <h3 id="self">Personal Statement</h3>
                <p>Optimistic and cheerful, with a positive mindset; firmly believe that all beautiful things will
                  eventually be encountered along the journey.</p>
              </section>

              <section aria-labelledby="motto">
                <h3 id="motto">Motto</h3>
                <div className="motto">“Those seemingly trivial and repetitive days will one day suddenly show you the meaning
                  of persistence.”</div>
              </section>

              <section aria-labelledby="research">
                <h3 id="research">Research Direction</h3>
                <p>Sn–Pb stacked perovskite solar cells.</p>
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
