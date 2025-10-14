import type { Metadata } from "next";
import { locales, defaultLocale, type Locale } from "@/i18n";
import LangSetter from "@/app/components/LangSetter";

export const dynamic = "error";
export const metadata: Metadata = { title: "Guixiang Li Lab" };

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "zh" }];
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;

  const validLang = (locales.includes(lang) ? lang : defaultLocale) as "en" | "zh";

  // 不要在这里再渲染 <html>/<body>，避免与根布局冲突
  return (
    <>
      <LangSetter lang={validLang} />
      {children}
    </>
  );
}
