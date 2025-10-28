"use client";
/**
 * 通用组件，顶部标识和导航栏
 */
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState, Suspense } from "react";
import useI18nLite from "@/components/useI18nLite";

export default function Header() {
  // 外层不使用任何 next/navigation 的 hook
  return (
    <Suspense fallback={null /* 或者骨架占位 */}>
      <HeaderInner />
    </Suspense>
  );
}

function HeaderInner() {
  // 所有 hook 都在 Suspense 内部调用
  const pathname = usePathname() || "/";
  const search = useSearchParams();
  const router = useRouter();
  const { lang, t, L } = useI18nLite();

  const pathNoLang = useMemo(() => {
    const parts = pathname.split("/");
    return parts.length <= 2 ? "/" : `/${parts.slice(2).join("/")}`;
  }, [pathname]);

  // 切换语言
  const switchTo = (target: "en" | "zh") => {
    if (target === lang) return;
    try { sessionStorage.setItem("__keep_scroll_y", String(window.scrollY || 0)); } catch { }
    const parts = pathname.split("/");
    if (parts[1] === "en" || parts[1] === "zh") parts[1] = target;
    else parts.splice(1, 0, target);
    const qs = search.toString();
    const url = parts.join("/") + (qs ? `?${qs}` : "");
    router.push(url, { scroll: false });
  };

  const [isFixed, setIsFixed] = useState(false);
  const [hideOnScroll, setHideOnScroll] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const lastY = useRef<number>(0);
  const navRef = useRef<HTMLElement | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  // 当哨兵元素不可见，说明页面已经滚过了哨兵，则让 `isFixed = true`，导航栏切到吸顶样式
  useEffect(() => {
    if (!sentinelRef.current) return;
    const io = new IntersectionObserver(([entry]) => setIsFixed(!entry.isIntersecting));
    io.observe(sentinelRef.current);
    return () => io.disconnect();
  }, []);

  // 只在吸顶状态时根据滚动方向切换导航栏是否显示，往上滑时才显示
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

  // 占位高度，避免布局跳动
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
            <div className="d-flex align-items-center">
              {/* 左侧校徽区 */}
              <div className="brand-logos d-flex align-items-center me-4">
                <img src="/img/Southeast_University_Emblem.png" alt="Southeast University Emblem" className="brand-logo me-2" />
                <img src="/img/Material_Emblem.png" alt="Material Emblem" className="brand-logo" />
              </div>

              {/* 原有品牌名称 */}
              <Link href={L("/")} className="h1 text-warning mb-0 display-1 display-header-brand">
                {t("brand.primary")}
                <span className="text-white">{t("brand.secondary")}</span>
              </Link>
            </div>
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

      {/* 哨兵 */}
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
          <div className="navbar-button navbar-nav">
            <Link href={L("/")} className={`nav-item nav-link ${pathNoLang === "/" ? "active" : ""}`}>{t("nav.home") || "Home"}</Link>
            <Link href={L("/research")} className={`nav-item nav-link ${pathNoLang.startsWith("/research") ? "active" : ""}`}>{t("nav.research") || "Research"}</Link>
            <Link href={L("/publications")} className={`nav-item nav-link ${pathNoLang.startsWith("/publications") ? "active" : ""}`}>{t("nav.publications") || "Publications"}</Link>
            <Link href={L("/members")} className={`nav-item nav-link ${pathNoLang.startsWith("/members") ? "active" : ""}`}>{t("nav.members") || "Members"}</Link>
            <Link href={L("/news")} className={`nav-item nav-link ${pathNoLang.startsWith("/news") ? "active" : ""}`}>{t("nav.news") || "News"}</Link>
            <Link href={L("/contact")} className={`nav-item nav-link ${pathNoLang.startsWith("/contact") ? "active" : ""}`}>{t("nav.contact") || "Contact"}</Link>
          </div>

          <LangToggleButton onToggle={() => switchTo(lang === "zh" ? "en" : "zh")} current={lang} />
        </div>
      </nav>

      {isFixed && <div style={{ height: navHeight }} aria-hidden />}
    </>
  );
}

function LangToggleButton(props: { current: "en" | "zh"; onToggle: () => void }) {
  const { current, onToggle } = props;
  const [bump, setBump] = useState(false);
  useEffect(() => { setBump(true); const t = setTimeout(() => setBump(false), 220); return () => clearTimeout(t); }, [current]);
  return (
    <button
      type="button"
      className={`btn header-lang-toggle ${bump ? "header-lang-toggle--bump" : ""}`}
      aria-label="Toggle language"
      onClick={onToggle}
      title={current === "zh" ? "切换到 English" : "Switch to 简体中文"}
    >
      <i className="bi bi-globe2 header-lang-toggle__bg" aria-hidden="true" />
      <span className="header-lang-toggle__label" data-lang={current}>
        {current === "zh" ? "EN" : "中"}
      </span>
    </button>
  );
}
