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
  },
  {
    id: "2025-10-28-zxc-afm",
    slug: "2025-10-28-zxc-afm",
    cover: "/img/News/zxc_frontcover.png",
    title: {
      en: "Zhang Xiaochun from the research group published a review paper in the journal Adv. Funct. Mater.",
      zh: "课题组张晓春在Adv. Funct. Mater.期刊发表综述论文"
    },
    date: "2025.10.28"
    // summary: {
    //   en: "Short English summary...",
    //   zh: "中文简要摘要……"
    // }
  },
  {
    id: "2025-11-11-lgx-np",
    slug: "2025-11-11-lgx-np",
    cover: "/img/News/Perovskite_Stabilizing_high_efficiency_PSCs_via_strategic.png",
    title: {
      en: "Academic News | Nature Photonics: Constructing efficient and stable perovskite photovoltaic devices using a full-interface modulation strategy.",
      zh: "学术动态 | Nature Photonics：全界面调控策略构筑高效稳定钙钛矿光伏器件"
    },
    date: "2025.11.11"
    // summary: {
    //   en: "Short English summary...",
    //   zh: "中文简要摘要……"
    // }
  },
  {
    id: "2026-01-11-lgx-nc",
    slug: "2026-01-11-lgx-nc",
    cover: "/img/News/20260111_lgx_nc/Anti-aggregation self-assembled monolayers.jpg",
    title: {
      en: "Academic News | Nature Communications: Anti-aggregation self-assembled monolayers enable high-performance, scalable perovskite solar cells.",
      zh: "学术动态 | Nature Communications：抗聚集自组装单分子层实现高性能、可扩展的钙钛矿太阳能电池"
    },
    date: "2026.01.11"
    // summary: {
    //   en: "Short English summary...",
    //   zh: "中文简要摘要……"
    // }
  },
    {
    id: "2026-01-28-spring-team-building", // 建议按「年份-月份-日期-核心关键词」命名
    slug: "2026-01-28-spring-team-building",
    cover: "/img/News/20260128_spring_team_building/spring_team_building.jpg", // 请替换为实际团建图片路径
    title: {
      en: "A Warm Winter Gathering, Accompanied by Research Journeys – The Research Group's Spring Festival Team Building Party Concludes Successfully",
      zh: "暖冬聚首，研路相伴——课题组新春轰趴团建圆满落幕"
    },
    date: "2026.01.28" // 请替换为实际团建日期（格式保持 YYYY.MM.DD）
    // 若需要添加摘要，可取消以下注释并补充内容
    // summary: {
    //   en: "To welcome the New Year, members of GuixiangLiLab gathered for a lively team building party, enjoying food, games and warm exchanges, enhancing the cohesion of the research group.",
    //   zh: "为迎接新春到来，李桂香课题组全体师生齐聚一堂开展趣味团建轰趴，在美食、游戏与温馨交流中增进情谊，凝聚课题组向心力。"
    // }
  }
  // 未来新增新闻只需在此处 push 新对象即可
].sort(sortByDateDesc);
