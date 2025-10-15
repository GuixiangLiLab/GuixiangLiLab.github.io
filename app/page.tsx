"use client";

/**
 * 根路由重定向，根据当前语言和路径重定向到默认语言的对应路径，无返回内容
 * 1. 监听路由变化
 * 2. 解析查询参数
 * 3. 构造目标路由
 * 4. 直接替换当前路由
 */

import { useEffect,  Suspense } from "react";
import { defaultLocale } from "@/i18n";
import { usePathname, useSearchParams } from "next/navigation";

export default function IndexRedirect() {
  return (
    <Suspense fallback={null}>
      <IndexRedirectInner />
    </Suspense>
  );
}

function IndexRedirectInner() {
  const pathname = usePathname();           // e.g. "/"
  const search = useSearchParams();         // 保留查询参数

  useEffect(() => {
    const qs = search.toString();
    const target =
      `/${defaultLocale}${pathname === "/" ? "" : pathname}${qs ? `?${qs}` : ""}`;
    // 直接替换，避免后退又跳转
    window.location.replace(target);
  }, [pathname, search]);

  return null;  // 根路由不渲染内容
}