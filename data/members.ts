// /data/members.ts
export type Lang = "en" | "zh";

export type MemberGroup = "prof" | "postdoc" | "phd" | "ra" | "master" | "alumni";

export interface Member {
  id: string;                          // 稳定 ID
  group: MemberGroup;                  // 分组
  slug: string;                        // /members/[slug]
  img: string;                         // public 下的图片路径
  name: { en: string; zh: string };    // 中英姓名（中文没有就填英文）
  order?: number;                      // 可选：组内排序（越小越靠前）
  isProfessor?: boolean;               // 可选：是否教授
}

// 展示顺序（分组）
export const GROUP_ORDER: MemberGroup[] = [
  "prof", "postdoc", "phd", "ra", "master", "alumni"
];

// 数据源（把后续新增成员都放这里即可）
export const members: Member[] = [
  // 教授
  {
    id: "guixiang-li",
    group: "prof",
    slug: "liguixiang",
    img: "/img/liguixiang.jpg",
    name: { en: "Guixiang Li", zh: "李桂香" },
    order: 1,
    isProfessor: true
  },

  // 博士后（目前空，如有成员直接在这里补）
  // { id: "...", group: "postdoc", slug: "...", img: "...", name: {en:"...", zh:"..."} },

  // 博士
  {
    id: "shaoqiang-wang",
    group: "phd",
    slug: "wangshaoqiang",
    img: "/img/wangshaoqiang.jpg",
    name: { en: "Shaoqiang Wang", zh: "王少强" },
    order: 1
  },
  {
    id: "xu-zhang",
    group: "phd",
    slug: "zhangxu",
    img: "/img/Members/zhangxu.jpg",
    name: { en: "Xu Zhang", zh: "张旭" },
    order: 2
  },
  {
    id: "xuebing-wen",
    group: "phd",
    slug: "wenxuebing",
    img: "/img/Members/wenxuebing.jpg",
    name: { en: "Xuebing Wen", zh: "温学兵" },
    order: 3
  },

  // 科研助理
  {
    id: "yifan-li",
    group: "ra",
    slug: "liyifan",
    img: "/img/liyifan.jpg",
    name: { en: "Yifan Li", zh: "李一凡" },
    order: 1
  },
  {
    id: "xiaochun-zhang",
    group: "ra",
    slug: "zhangxiaochun",
    img: "/img/Members/zhangxiaochun.jpg",
    name: { en: "Xiaochun Zhang", zh: "张小春" },
    order: 2
  },

  // 硕士
  {
    id: "dongdong-luo",
    group: "master",
    slug: "luodongdong",
    img: "/img/Members/luodongdong.jpg",
    name: { en: "Dongdong Luo", zh: "罗东东" },
    order: 1
  },
  {
    id: "zeyu-li",
    group: "master",
    slug: "lizeyu",
    img: "/img/lizeyu.jpg",
    name: { en: "Zeyu Li", zh: "李泽宇" },
    order: 2
  },
  {
    id: "xinru-li",
    group: "master",
    slug: "lixinru",
    img: "/img/Members/lixinru.jpg",
    name: { en: "Xinru Li", zh: "李馨儒" },
    order: 3
  },

  // 已毕业
  {
    id: "replace",
    group: "alumni",
    slug: "replace",
    img: "/img/replace.png",
    name: { en: "replace", zh: "replace" },
    order: 1
  }
];
