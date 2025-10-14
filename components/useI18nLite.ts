"use client";

/**
 * 一个通用的中英文字体导入函数，它会根据当前 URL 语言段动态加载 JSON 并返回 t(key)” 并封装成一个 Hook
 * 其他组件均可调用
 * 其中：
 * t(key) 返回当前语言 json 中 key 对应语言的文本（包裹文本，如<div>{t("page.key")}</div>）
 * L(path) 返回当前语言对应的完整路径（包裹页内导航路径，如<a href={L("/about")}>Go</a>）
 */

import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type Dict = Record<string, string>;
type Lang = "en" | "zh";

export default function useI18nLite() {
  const { lang } = useParams<{ lang: Lang }>();
  const cur = (lang === "zh" || lang === "en") ? lang : "en";

  const [dict, setDict] = useState<Dict>({});
  useEffect(() => {
    let mounted = true;
    import(`@/dictionaries/${cur}.json`).then(m => {
      if (mounted) setDict(m.default as Dict);
    });
    return () => { mounted = false; };
  }, [cur]);

  const t = useMemo(() => (k: string) => dict[k] ?? k, [dict]);
  const L = useMemo(() => (p: string) => `/${cur}${p.startsWith("/") ? p : `/${p}`}`, [cur]);

  return { lang: cur, t, L };
}