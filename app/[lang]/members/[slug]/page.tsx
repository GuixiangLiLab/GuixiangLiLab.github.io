import { Suspense } from "react";
import { locales } from "@/i18n";
import { memberDetails } from "@/data/member-details";
import MemberDetailClient from "./MemberDetailClient";

export const dynamic = "error"; // 强制静态

// 为 output:"export" 生成所有静态路径
export async function generateStaticParams() {
  const slugs = Object.keys(memberDetails); // ["zhangxiaochun","liyifan",...]
  return locales.flatMap((lang) => slugs.map((slug) => ({ lang, slug })));
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { slug } = await params;
  // 这里不要用任何 client hook；把工作交给客户端组件
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MemberDetailClient slug={slug} />
    </Suspense>
  );
}