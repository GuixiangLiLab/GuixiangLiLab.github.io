"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const pathname = usePathname();

  // 状态
  const [isFixed, setIsFixed] = useState(false);         // 是否 position: fixed（哨兵控制）
  const [hideOnScroll, setHideOnScroll] = useState(false); // 向下滚动时隐藏，向上滚动时显示
  const [navHeight, setNavHeight] = useState(0);         // 导航高度用于占位
  const lastY = useRef<number>(0);  // 上一次滚动位置（推断方向）
  const navRef = useRef<HTMLElement | null>(null);  // 导航元素引用（测量高度）
  const sentinelRef = useRef<HTMLDivElement | null>(null);  // 哨兵引用

  // 监听哨兵可见性：决定是否 fixed
  useEffect(() => {
    if (!sentinelRef.current) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        // 哨兵可见 => 还在头部区域 => 不固定
        // 哨兵不可见 => 固定
        setIsFixed(!entry.isIntersecting);
      },
      { root: null, threshold: 0 }
    );
    io.observe(sentinelRef.current);
    return () => io.disconnect();
  }, []);

  // 监听滚动方向：向下隐藏，向上显示（只在 fixed 时生效）
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      const goingDown = y > lastY.current;
      lastY.current = y;
      if (isFixed) {
        setHideOnScroll(goingDown && y > 8); // 往下滚且滚动了一点点就隐藏
      } else {
        setHideOnScroll(false); // 非 fixed 时强制显示
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isFixed]);

  // 记录导航高度用于占位，避免抖动
  useEffect(() => {
    if (!navRef.current) return;
    const measure = () => setNavHeight(navRef.current!.offsetHeight || 0);
    measure();
    // 监听尺寸变化（响应式）
    const ro = new ResizeObserver(measure);
    ro.observe(navRef.current);
    return () => ro.disconnect();
  }, []);

  return (
    <>
      {/* Brand Start */}
      <div className="container-fluid bg-primary text-white pt-4 pb-3 d-none d-lg-flex">
        <div className="container pb-2">
          <div className="d-flex align-items-center justify-content-between">
            <Link href="/" className="h1 text-white mb-0 display-1 display-header-brand">
              Guixiang Li <span className="text-dark">Laboratory</span>
            </Link>
            <div className="d-flex">
              <i className="bi bi-envelope fs-2" />
              <div className="ms-3">
                <h5 className="text-white mb-0">Mail Now</h5>
                <span>guixiang.li@seu.edu.cn</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Brand End */}

      {/* 哨兵：位于主标志之后，用于判断是否滑出头部 */}
      <div ref={sentinelRef} aria-hidden="true" />

      {/* Navbar */}
      <nav
        ref={navRef as any}
        className={[
          "navbar",
          "navbar-expand-lg",
          "navbar-light",
          "bg-white",
          "py-lg-0",
          "px-lg-3",
          "site-navbar",
          isFixed ? "site-navbar--fixed" : "site-navbar--normal",
          isFixed && hideOnScroll ? "site-navbar--hide" : "site-navbar--show",
        ].join(" ")}
      >
        <div className="container">
          <div className="navbar-button navbar-nav">
            <Link href="/" className={`nav-item nav-link ${pathname === "/" ? "active" : ""}`}>Home</Link>
            <Link href="/research" className={`nav-item nav-link ${pathname.startsWith("/research") ? "active" : ""}`}>Research</Link>
            <Link href="/publications" className={`nav-item nav-link ${pathname.startsWith("/publications") ? "active" : ""}`}>Publications</Link>
            <Link href="/members" className={`nav-item nav-link ${pathname.startsWith("/members") ? "active" : ""}`}>Members</Link>
            <Link href="/news" className={`nav-item nav-link ${pathname.startsWith("/news") ? "active" : ""}`}>News</Link>
            <Link href="/contact" className={`nav-item nav-link ${pathname.startsWith("/contact") ? "active" : ""}`}>Contact</Link>
          </div>
        </div>
      </nav>

      {/* 当 fixed 时，给内容留出占位，避免跳动 */}
      {isFixed && <div style={{ height: navHeight }} aria-hidden="true" />}
    </>
  );
}
