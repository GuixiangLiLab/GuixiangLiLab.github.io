"use client";
/**
 * 通用组件，顶部标识和导航栏
 */

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import useI18nLite from "@/components/useI18nLite";

export default function Header() {
  const pathname = usePathname() || "/";
  const search = useSearchParams();
  const router = useRouter();
  const { lang, t, L } = useI18nLite(); // 统一拿语言、字典与带语言前缀的链接

  // 当前路由去掉语言段用于高亮
  const pathNoLang = useMemo(() => {
    const parts = pathname.split("/");
    return parts.length <= 2 ? "/" : `/${parts.slice(2).join("/")}`;
  }, [pathname]);

  // 切换到指定语言（保留子路径与查询参数，固定滚动位置）==========================
  const switchTo = (target: "en" | "zh") => {
    if (target === lang) return;

    // 记录当前滚动位置
    try {
      sessionStorage.setItem("__keep_scroll_y", String(window.scrollY || 0));
    } catch { }

    // 生成目标 URL
    const parts = pathname.split("/");
    if (parts[1] === "en" || parts[1] === "zh") parts[1] = target;
    else parts.splice(1, 0, target);
    const qs = search.toString();
    const url = parts.join("/") + (qs ? `?${qs}` : "");

    // 跳转但不滚动到顶部
    router.push(url, { scroll: false });
  };

  useEffect(() => {
    // 仅在语言切换场景下才会有这个 key
    const yStr = sessionStorage.getItem("__keep_scroll_y");
    if (!yStr) return;

    sessionStorage.removeItem("__keep_scroll_y");
    const y = parseInt(yStr, 10) || 0;

    // 等一帧，确保内容渲染完成再恢复
    requestAnimationFrame(() => {
      window.scrollTo({ top: y, behavior: "instant" as ScrollBehavior });
    });
  }, [pathname]);

  // 吸顶/隐藏逻辑 =================================================
  const [isFixed, setIsFixed] = useState(false);
  const [hideOnScroll, setHideOnScroll] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const lastY = useRef<number>(0);
  const navRef = useRef<HTMLElement | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sentinelRef.current) return;
    const io = new IntersectionObserver(([entry]) => setIsFixed(!entry.isIntersecting));
    io.observe(sentinelRef.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      const goingDown = y > lastY.current;
      lastY.current = y;
      if (isFixed) setHideOnScroll(goingDown && y > 8);
      else setHideOnScroll(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isFixed]);

  useEffect(() => {
    if (!navRef.current) return;
    const measure = () => setNavHeight(navRef.current!.offsetHeight || 0);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(navRef.current);
    return () => ro.disconnect();
  }, []);

  return (
    <>
      {/* Brand */}
      <div className="container-fluid bg-primary text-white pt-4 pb-3 d-none d-lg-flex">
        <div className="container pb-2">
          <div className="d-flex align-items-center justify-content-between">
            <Link href={L("/")} className="h1 text-warning mb-0 display-1 display-header-brand">
              {t("brand.primary")}
              <span className="text-white">
                {t("brand.secondary")}
              </span>
            </Link>

            {/* 右侧：邮箱信息（保留） */}
            <div className="d-flex">
              <i className="bi bi-envelope fs-2" />
              <div className="ms-3">
                <h5 className="text-white mb-0">{t("brand.mailnow") || "Mail Now"}</h5>
                <span>guixiang.li@seu.edu.cn</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 哨兵：判断是否滑出头部 */}
      <div ref={sentinelRef} aria-hidden="true" />

      {/* Navbar */}
      <nav
        ref={navRef as any}
        className={[
          "navbar", "navbar-expand-lg", "navbar-light", "bg-white", "py-lg-0", "px-lg-3", "site-navbar",
          isFixed ? "site-navbar--fixed" : "site-navbar--normal",
          isFixed && hideOnScroll ? "site-navbar--hide" : "site-navbar--show",
        ].join(" ")}
      >
        <div className="container">
          {/* 左侧导航链接 */}
          <div className="navbar-button navbar-nav">
            <Link href={L("/")} className={`nav-item nav-link ${pathNoLang === "/" ? "active" : ""}`}>{t("nav.home") || "Home"}</Link>
            <Link href={L("/research")} className={`nav-item nav-link ${pathNoLang.startsWith("/research") ? "active" : ""}`}>{t("nav.research") || "Research"}</Link>
            <Link href={L("/publications")} className={`nav-item nav-link ${pathNoLang.startsWith("/publications") ? "active" : ""}`}>{t("nav.publications") || "Publications"}</Link>
            <Link href={L("/members")} className={`nav-item nav-link ${pathNoLang.startsWith("/members") ? "active" : ""}`}>{t("nav.members") || "Members"}</Link>
            <Link href={L("/news")} className={`nav-item nav-link ${pathNoLang.startsWith("/news") ? "active" : ""}`}>{t("nav.news") || "News"}</Link>
            <Link href={L("/contact")} className={`nav-item nav-link ${pathNoLang.startsWith("/contact") ? "active" : ""}`}>{t("nav.contact") || "Contact"}</Link>
          </div>

          {/* 右侧：语言切换图标 */}
          <LangToggleButton onToggle={() => switchTo(lang === "zh" ? "en" : "zh")} current={lang} />
        </div>
      </nav>

      {/* fixed 占位，避免跳动 */}
      {isFixed && <div style={{ height: navHeight }} aria-hidden="true" />}
    </>
  );
}

/** 切换语言的圆形按钮 */
function LangToggleButton(props: { current: "en" | "zh"; onToggle: () => void }) {
  const { current, onToggle } = props;
  const [bump, setBump] = useState(false);

  // 每次语言切换触发一次“bump”动画
  useEffect(() => {
    setBump(true);
    const t = setTimeout(() => setBump(false), 220);
    return () => clearTimeout(t);
  }, [current]);

  return (
    <button
      type="button"
      className={`btn header-lang-toggle ${bump ? "header-lang-toggle--bump" : ""}`}
      aria-label="Toggle language"
      onClick={onToggle}
      title={current === "zh" ? "切换到 English" : "Switch to 简体中文"}
    >
      {/* 背景地球图标（保持识别性） */}
      <i className="bi bi-globe2 header-lang-toggle__bg" aria-hidden="true" />
      {/* 中心文字：中文=“中”，英文=“EN” */}
      <span className="header-lang-toggle__label" data-lang={current}>
        {current === "zh" ? "中" : "EN"}
      </span>
    </button>
  );
}
