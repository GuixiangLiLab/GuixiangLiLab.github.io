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
              <img className="portrait" src="/img/Members/zhangxiaochun.jpg" alt="Xiaochun Zhang" />
              <div className="side-notes">
                <h4>More about me</h4>
                <p>Born in July 2000, from Tongliao, Inner Mongolia.</p>
                <p>
                  In research, an initial one-year effort was devoted to simulation studies of the mechanical and thermal
                  properties of low-dimensional nanomaterials, thereby establishing a solid foundation in materials modeling
                  and analysis. This was followed by a two-year joint training program at the Dalian Institute of Chemical
                  Physics, Chinese Academy of Sciences, during which the research scope was extended to inverted-structure,
                  standard-bandgap, and large-area flexible perovskite solar cells, accumulating substantial experience in
                  device design and fabrication. The current focus lies on interfacial engineering of the electron transport
                  layer in inverted standard-bandgap perovskite cells, with an emphasis on addressing critical issues
                  of interfacial instability and aggregation.
                </p>

                <details>
                  <summary>Personal story</summary>
                  <p>
                    “Sometimes I fear being just a little short—and I also know when to slow down.
                    Every perfectly leveled thin film is a foreshadowing of the next breakthrough.”
                  </p>
                </details>
              </div>
            </aside>

            {/* 右侧：内容 */}
            <article className="card-content reveal">
              <header className="header">
                <h1>Xiaochun Zhang</h1>
                <span className="badge-status">Research Assistant</span>
              </header>
              <div className="meta">Guixiang Li Laboratory · Southeast University</div>
              <div className="rule"></div>

              <section aria-labelledby="bio">
                <h3 id="bio">Background</h3>
                <div className="edu">
                  <div className="item">
                    <strong>M.Eng.</strong> Condensed Matter Physics, Liaoning Normal University, June 2025
                  </div>
                </div>
              </section>

              <section aria-labelledby="hobby">
                <h3 id="hobby">Hobbies</h3>
                <div className="chips">
                  <span className="chip">Playing with cats</span>
                  <span className="chip">Swimming</span>
                  <span className="chip">Exploring food</span>
                  <span className="chip">Singing</span>
                  <span className="chip">City walks</span>
                </div>
              </section>

              <section aria-labelledby="self">
                <h3 id="self">Personal Statement</h3>
                <p>
                  Objective and detail-oriented; able to adjust pace and keep resilience.
                  I enjoy tackling tough problems and steadily pushing research forward.
                </p>
              </section>

              <section aria-labelledby="motto">
                <h3 id="motto">Motto</h3>
                <div className="motto">“Every perfectly leveled film foreshadows the next breakthrough.”</div>
              </section>

              <section aria-labelledby="research">
                <h3 id="research">Research Direction</h3>
                <p>
                  Inverted (p–i–n) regular-bandgap perovskite solar cells; electron-transport-layer/interface engineering;
                  stability and aggregation issues in device stacks.
                </p>
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
