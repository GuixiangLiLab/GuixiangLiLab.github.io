export type NewsItem = {
  /** 唯一 id，可用 slug */
  id: string;
  /** 用于路由的 slug，如: "2025-09-19-member-report-in" */
  slug: string;
  /** 列表封面 */
  cover: string;
  /** 多语言标题 */
  title: { en: string; zh: string };
  /** 日期字符串；需要本地化可改为 {en, zh} 或 Date 再格式化 */
  date: string;
  /** 可选：摘要/副标题（若后续需要在列表展示，可取消注释） */
  // summary?: { en: string; zh: string };
};

/** 按时间倒序（新→旧） */
function sortByDateDesc(a: NewsItem, b: NewsItem) {
  // 假设日期格式为 "YYYY.MM.DD"；如果你用 "YYYY-MM-DD"，也能正确比较
  const toNum = (s: string) => Number(s.replaceAll(".", "").replaceAll("-", ""));
  return toNum(b.date) - toNum(a.date);
}

export const news: NewsItem[] = [
  {
    id: "2025-09-19-member-report-in",
    slug: "2025-09-19-member-report-in",
    cover: "/img/main_page/new_member.jpg",
    title: {
      en: "Arriving as Promised, Opening a New Chapter",
      zh: "如约而至，共启新篇"
    },
    date: "2025.09.19"
    // summary: {
    //   en: "Short English summary...",
    //   zh: "中文简要摘要……"
    // }
  }
  // 未来新增新闻只需在此处 push 新对象即可
].sort(sortByDateDesc);
