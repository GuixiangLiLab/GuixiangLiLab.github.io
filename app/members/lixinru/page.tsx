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
              <img className="portrait" src="/img/Members/lixinru.jpg" alt="Xinru Li" />
              <div className="side-notes">
                <h4>More about me</h4>
                <p>
                  I'm Li Xinru, originally from Tai'an, Shandong—a place renowned for the majestic grandeur of Mount Tai and
                  the gentle grace of the Wen River. I completed my undergraduate studies at Taiyuan University of
                  Technology. In my daily life, I enjoy quiet, reflective activities such as reading and watching films,
                  through which I always find a sense of inner order in the subtlety of words and the ever-shifting play of
                  light and shadow. My guiding principle has always been: "A journey of a thousand miles begins beneath
                  one's feet; consistent, unwavering effort leads steadily toward one's goals."
                </p>
              </div>
            </aside>

            {/* 右侧：内容 */}
            <article className="card-content reveal">
              <header className="header">
                <h1>Xinru Li</h1>
                <span className="badge-status">Master's · Year 1</span>
              </header>
              <div className="meta">Guixiang Li Laboratory · Southeast University</div>
              <div className="rule"></div>

              <section aria-labelledby="bio">
                <h3 id="bio">Background</h3>
                <div className="edu">
                  <div className="item">
                    <strong>B.Eng.</strong> Taiyuan University of Technology
                  </div>
                </div>
              </section>

              <section aria-labelledby="hobby">
                <h3 id="hobby">Hobbies</h3>
                <div className="chips">
                  <span className="chip">Reading</span>
                  <span className="chip">Movies</span>
                </div>
              </section>

              <section aria-labelledby="self">
                <h3 id="self">Personal Statement</h3>
                <p>
                  Calm, orderly, and persistent—focused on steady progress through consistent effort.
                </p>
              </section>

              <section aria-labelledby="motto">
                <h3 id="motto">Motto</h3>
                <div className="motto">“To go far, start from the near; be steadfast and unremitting.”</div>
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
