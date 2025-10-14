"use client";
/**
 * 设置当前语言的组件，为了解决 <html lang={validLang}> 在服务端和客户端渲染出的 lang 值不一致的问题
 */

import { useEffect } from "react";

export default function LangSetter({ lang }: { lang: string }) {
  useEffect(() => {
    // 只在客户端把 <html lang> 设置为当前语言
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}