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
              <img className="portrait" src="/img/Members/wangshaoqiang.png" alt="Shaoqiang Wang" />
            </aside>

            {/* 右侧：内容 */}
            <article className="card-content reveal">
              <header className="header">
                <h1>Shao-Qiang Wang</h1>
                <span className="badge-status">PhD · Year 1</span>
              </header>
              <div className="meta">Guixiang Li Laboratory · Southeast University</div>
              <div className="rule"></div>

              <section aria-labelledby="bio">
                <h3 id="bio">Background</h3>
                <div className="edu">
                  <div className="item"><strong>M.Eng.</strong> Materials and Chemical Engineering, Changzhou University. Master
                    research focused on the synthesis and performance investigation of active layer materials for organic
                    solar cells.
                  </div>
                </div>
              </section>

              <section aria-labelledby="hobby">
                <h3 id="hobby">Hobbies</h3>
                <div className="chips">
                  <span className="chip">Watching movies</span>
                  <span className="chip">Listening to music</span>
                  <span className="chip">Traveling</span>
                </div>
              </section>

              <section aria-labelledby="self">
                <h3 id="self">Personal Statement</h3>
                <p>Optimistic and cheerful, with great enthusiasm for life; always willing to explore and keep an open heart
                  toward new experiences.</p>
              </section>

              <section aria-labelledby="motto">
                <h3 id="motto">Motto</h3>
                <div className="motto">“Like a dragon soaring above, daring to ride the waves of the sea; looking back at the
                  dust of the world, my determination remains unchanged.”</div>
              </section>

              <section aria-labelledby="research">
                <h3 id="research">Research Direction</h3>
                <p>Synthesis of hole-transport layer materials and device investigation for perovskite solar cells.</p>
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
