"use client";

import { useEffect } from "react";

export default function BootstrapClient() {
  useEffect(() => {
    // 动态加载 Bootstrap JS（含 Popper）
    import('bootstrap');

    // 初始化 WOW.js（滚动动画）
    (async () => {
      const WOW = (await import('wow.js')).default;
      new WOW().init();
    })();
  }, []);
  return null;
}