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
              <img className="portrait" src="/img/Members/zhangxu.jpg" alt="Xu Zhang" />
            </aside>

            {/* 右侧：内容 */}
            <article className="card-content reveal">
              <header className="header">
                <h1>Xu Zhang</h1>
                <span className="badge-status">PhD · Year 1</span>
              </header>
              <div className="meta">Guixiang Li Laboratory · Southeast University</div>
              <div className="rule"></div>

              <section aria-labelledby="bio">
                <h3 id="bio">Background</h3>
                <div className="edu">
                  <div className="item"><strong>B.Eng.</strong>  School of Physics and Optoelectronic Information Engineering,
                    Anhui University</div>
                  <div className="item"><strong>M.Eng.</strong>  School of Nanoscience and Materials Engineering, Henan
                    University</div>
                </div>
              </section>

              <section aria-labelledby="hobby">
                <h3 id="hobby">Hobbies</h3>
                <div className="chips">
                  <span className="chip">Listening to music</span>
                  <span className="chip">Gourmet food</span>
                  <span className="chip">Night running</span>
                </div>
              </section>

              <section aria-labelledby="self">
                <h3 id="self">Personal Statement</h3>
                <p>Easy-going and respectful of others’ opinions; always striving to improve.</p>
              </section>

              <section aria-labelledby="motto">
                <h3 id="motto">Motto</h3>
                <div className="motto">“You don’t have to become anybody else.”</div>
              </section>

              <section aria-labelledby="research">
                <h3 id="research">Research Direction</h3>
                <p>Stability of perovskite solar devices.</p>
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
