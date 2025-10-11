"use client";

import Link from "next/link";
import "./members.css";

export default function MembersPage() {
  return (
    <>
      {/* Page Header */}
      <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5 mt-4">
          <h1 className="display-2 text-white mb-3 animated slideInDown">Members</h1>
        </div>
      </div>

      {/* Members Section */}
      <section className="lab-members">
        {/* 顶部：李老师 */}
        <div className="group">
          <h2 className="block-title">Prof. Dr</h2>
          <div className="lead">
            <div className="member-card">
              <Link href="/members/liguixiang">
                <div className="avatar">
                  <img src="/img/liguixiang.jpg" alt="Guixiang Li" />
                </div>
                <div className="member-name teacher-name">Guixiang Li</div>
              </Link>
            </div>
          </div>
        </div>

        {/* 博士后（空） */}
        <div className="group">
          <h2 className="block-title">Postdoc</h2>
          <div className="members-grid">{/* 空列表占位 */}</div>
        </div>

        {/* 博士 */}
        <div className="group">
          <h2 className="block-title">PhD</h2>
          <div className="members-grid">
            <div className="member-card">
              <Link href="/members/wangshaoqiang">
                <div className="avatar">
                  <img src="/img/wangshaoqiang.jpg" alt="Shaoqiang Wang" />
                </div>
                <div className="member-name">Shaoqiang Wang</div>
              </Link>
            </div>

            <div className="member-card">
              <Link href="/members/zhangxu">
                <div className="avatar">
                  <img src="/img/Members/zhangxu.jpg" alt="Xu Zhang" />
                </div>
                <div className="member-name">Xu Zhang</div>
              </Link>
            </div>

            <div className="member-card">
              <Link href="/members/wenxuebing">
                <div className="avatar">
                  <img src="/img/Members/wenxuebing.jpg" alt="Xuebing Wen" />
                </div>
                <div className="member-name">Xuebing Wen</div>
              </Link>
            </div>
          </div>
        </div>

        {/* 科研助理 */}
        <div className="group">
          <h2 className="block-title">Research assistant</h2>
          <div className="members-grid">
            <div className="member-card">
              <Link href="/members/liyifan">
                <div className="avatar">
                  <img src="/img/liyifan.jpg" alt="Yifan Li" />
                </div>
                <div className="member-name">Yifan Li</div>
              </Link>
            </div>

            <div className="member-card">
              <Link href="/members/zhangxiaochun">
                <div className="avatar">
                  <img src="/img/Members/zhangxiaochun.jpg" alt="Xiaochun Zhang" />
                </div>
                <div className="member-name">Xiaochun Zhang</div>
              </Link>
            </div>
          </div>
        </div>

        {/* 硕士 */}
        <div className="group">
          <h2 className="block-title">Postgraduate student</h2>
          <div className="members-grid">
            <div className="member-card">
              <Link href="/members/luodongdong">
                <div className="avatar">
                  <img src="/img/Members/luodongdong.jpg" alt="Dongdong Luo" />
                </div>
                <div className="member-name">Dongdong Luo</div>
              </Link>
            </div>

            <div className="member-card">
              <Link href="/members/lizeyu">
                <div className="avatar">
                  <img src="/img/lizeyu.jpg" alt="Zeyu Li" />
                </div>
                <div className="member-name">Zeyu Li</div>
              </Link>
            </div>

            <div className="member-card">
              <Link href="/members/lixinru">
                <div className="avatar">
                  <img src="/img/Members/lixinru.jpg" alt="Xinru Li" />
                </div>
                <div className="member-name">Xinru Li</div>
              </Link>
            </div>
          </div>
        </div>

        {/* 已毕业学生 */}
        <div className="group alumni">
          <h2 className="block-title">Graduate</h2>
          <div className="members-grid">
            <div className="member-card">
              <Link href="/members/replace">
                <div className="avatar">
                  <img src="/img/replace.png" alt="replace" />
                </div>
                <div className="member-name">replace</div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
