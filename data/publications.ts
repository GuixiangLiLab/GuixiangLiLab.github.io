/**
 * 数据文件，存放论文信息，每条论文是一个对象，标题/期刊等支持中英两份字段。
 */

export type Lang = "en" | "zh";

export interface Publication {
  id: string;
  year: number;                         // 用于年份分组
  href: string;                         // 论文外链
  img: string;                          // 列表图片（public/ 下）
  title: { en: string; zh: string };    // 标题（中/英）
  authorsHtml: { en: string; zh: string }; // 作者字符串，支持 <span class="bold">...</span>
  venue: { en: string; zh: string };    // 期刊 + 年份（展示用）
  doi?: string;                         // 可选 DOI 文本
  selected?: boolean;                   // 是否出现在“Selected Publications”
}

export const publications: Publication[] = [
  {
    id: "science-2023-pipn-temp-variation",
    year: 2023,
    href: "https://www.science.org/doi/10.1126/science.add7331",
    img: "/img/Perovskite_Solar_Cell_Structure_and_Morphology.png",
    title: {
      en: "Highly efficient p-i-n perovskite solar cells that endure temperature variations",
      zh: "高效 p-i-n 钙钛矿太阳能电池的耐温变化研究"
    },
    authorsHtml: {
      en: `<span class="bold">Li, G.</span>, Su, Z., Canil, L., Hughes, D., Aldamasy, M. H., ... Wang, L., Li, M., & Abate, A.*.`,
      zh: `<span class="bold">李桂香</span>，苏振，Canil, L.，Hughes, D.，Aldamasy, M. H.，… Wang, L.，Li, M.，& Abate, A.*`
    },
    venue: { en: "Science (2023)", zh: "Science（2023）" },
    doi: "10.1126/science.add7331",
    selected: true
  },
  {
    id: "natpho-2025-stab-high-effi",
    year: 2025,
    href: "https://doi.org/10.1038/s41566-025-01791-1",
    img: "/img/Perovskite_Stabilizing_high_efficiency_PSCs_via_strategic.png",
    title: {
      en: "Stabilizing high-efficiency perovskite solar cells via strategic interfacial contact engineering",
      zh: "通过策略性界面接触工程稳定高效钙钛矿太阳能电池"
    },
    authorsHtml: {
      en: `<span class="bold">Li, G.</span>, Zhang, Z., Agyei-Tuffour, B., Wu, L., ... Wang, L., Li Z., ... Li, M., & Abate, A.*.`,
      zh: `<span class="bold">李桂香</span>，张祖宏，Agyei-Tuffour, B.，吴录艳，… 王露遥，李哲，… 李萌，& Abate, A.*`
    },
    venue: { en: "Nature Photonics (2025)", zh: "Nature Photonics（2025）" },
    doi: "10.1038/s41566-025-01791-1",
    selected: true
  },
  {
    id: "nrm-2025-temp-cycling-resilience",
    year: 2025,
    href: "https://www.nature.com/articles/s41578-025-00781-7",
    img: "/img/Perovskite_Phase_Transition_Temperature_Cycle.jpg",
    title: {
      en: "Resilience pathways for halide perovskite photovoltaics under temperature cycling",
      zh: "温度循环条件下卤化物钙钛矿光伏的韧性路径"
    },
    authorsHtml: {
      en: `Wu, L., Hu, S., Yang, F., <span class="bold">Li, G.</span>, Wang, J., ... Pascual, J., Li, M., & Abate, A.`,
      zh: `吴立，胡松，杨帆，<span class="bold">李桂香</span>，王俊，… Pascual, J.，李萌，& Abate, A.`
    },
    venue: { en: "Nature Reviews Materials (2025)", zh: "Nature Reviews Materials（2025）" },
    doi: "10.1038/s41578-025-00781-7",
    selected: true
  },
  {
    id: "adma-2025-snpb-nucleation",
    year: 2025,
    href: "https://advanced.onlinelibrary.wiley.com/doi/10.1002/adma.202418766",
    img: "/img/High-efficiency_Sn-Pb.png",
    title: {
      en: "High-efficiency Sn-Pb Perovskite Solar Cells via Nucleation and Crystallization Control",
      zh: "通过成核与结晶调控实现高效 Sn-Pb 钙钛矿太阳能电池"
    },
    authorsHtml: {
      en: `Wang, A., Du, K., Fang, Z., Ren, Y., Zhou, C., ... Dong, X., <span class="bold">Li, G.</span>, Nazeeruddin, M. K., & Ding, J.`,
      zh: `王昂，杜凯，方正，任宇，周晨，… 董翔，<span class="bold">李桂香</span>，Nazeeruddin, M. K.，& 丁健`
    },
    venue: { en: "Advanced Materials (2025)", zh: "Advanced Materials（2025）" },
    doi: "10.1002/adma.202418766",
    selected: true
  },
  {
    id: "adma-2024-inverted-nonrad",
    year: 2024,
    href: "https://advanced.onlinelibrary.wiley.com/doi/10.1002/adma.202407433",
    img: "/img/Inverted_Perovskite.png",
    title: {
      en: "Inhibiting Interfacial Nonradiative Recombination in Inverted Perovskite Solar Cells with a Multifunctional Molecule",
      zh: "利用多功能分子抑制倒置结构钙钛矿太阳能电池界面非辐射复合"
    },
    authorsHtml: {
      en: `Wu, J., Zhu, R., <span class="bold">Li, G.</span>, Zhang, Z., Pascual, J., ... Li, M.`,
      zh: `吴杰，朱蓉，<span class="bold">李桂香</span>，张哲，Pascual, J.，… 李明`
    },
    venue: { en: "Advanced Materials (2024)", zh: "Advanced Materials（2024）" },
    doi: "10.1002/adma.202407433",
    selected: true
  },
  {
    id: "adma-2025-heat-triggered-self-healing",
    year: 2025,
    href: "https://advanced.onlinelibrary.wiley.com/doi/abs/10.1002/adma.202420378",
    img: "/img/Heat‐Triggered_Dynamic.png",
    title: {
      en: "Heat-Triggered Dynamic Self-Healing Framework for Variable-Temperature Stable Perovskite Solar Cells",
      zh: "用于耐变温稳定性的热触发动态自修复框架"
    },
    authorsHtml: {
      en: `Tang, Y., Zhang, Z., <span class="bold">Li, G.</span>, Qin, C., Su, Z., Liu, H., Yang, F., Yang, Y., Aldamasy, M. H., ...`,
      zh: `唐源，张哲，<span class="bold">李桂香</span>，秦超，苏振，刘浩，杨帆，杨阳，Aldamasy, M. H.，…`
    },
    venue: { en: "Advanced Materials (2025)", zh: "Advanced Materials（2025）" },
    doi: "10.1002/adma.202420378",
    selected: true
  }
];