// /data/members.ts
export type Lang = "en" | "zh";

export type MemberGroup = "prof" | "postdoc" | "phd" | "ra" | "master" | "undergraduate" | "visitingscholar" | "alumni";

export interface Member {
  id: string;                          // 稳定 ID
  group: MemberGroup;                  // 分组
  slug: string;                        // /members/[slug]
  img: string;                         // public 下的图片路径
  name: { en: string; zh: string };    // 英文使用“名 + 姓”，组内自动按姓氏 A–Z 排序
  isProfessor?: boolean;               // 可选：是否教授
}

// 展示顺序（分组）
export const GROUP_ORDER: MemberGroup[] = [
  "prof", "postdoc", "phd", "ra", "master", "undergraduate", "visitingscholar", "alumni"
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
    isProfessor: true
  },

  // 博士后
  {
    id: "dong-fang",
    group: "postdoc",
    slug: "fangdong",
    img: "/img/Members/fangdong.png",
    name: { en: "Dong Fang", zh: "方栋" },
  },

  // 博士
  {
    id: "yuepeng-huang",
    group: "phd",
    slug: "huangyuepeng",
    img: "/img/Members/huangyuepeng.png",
    name: { en: "Yuepeng Huang", zh: "黄月鹏" },
  },  
  {
    id: "yifan-li",
    group: "phd",
    slug: "liyifan",
    img: "/img/Members/liyifan.jpg",
    name: { en: "Yifan Li", zh: "李怡凡" },
  },
  {
    id: "shaoqiang-wang",
    group: "phd",
    slug: "wangshaoqiang",
    img: "/img/Members/wangshaoqiang.jpg",
    name: { en: "Shaoqiang Wang", zh: "王少强" },
  },
  {
    id: "xu-zhang",
    group: "phd",
    slug: "zhangxu",
    img: "/img/Members/zhangxu.jpg",
    name: { en: "Xu Zhang", zh: "张旭" },
  },
  {
    id: "xuebing-wen",
    group: "phd",
    slug: "wenxuebing",
    img: "/img/Members/wenxuebing.jpg",
    name: { en: "Xuebing Wen", zh: "温雪冰" },
  },
  {
    id: "xiaochun-zhang",
    group: "phd",
    slug: "zhangxiaochun",
    img: "/img/Members/zhangxiaochun.jpg",
    name: { en: "Xiaochun Zhang", zh: "张晓春" },
  },
  {
    id: "haomin-liu",
    group: "phd",
    slug: "liuhaomin",
    img: "/img/Members/liuhaomin.png",
    name: { en: "Haomin Liu", zh: "刘昊旻" },
  },
  {
    id: "yifan-zhang",
    group: "phd",
    slug: "zhangyifan",
    img: "/img/Members/zhangyifan.png",
    name: { en: "Yifan Zhang", zh: "张轶凡" },
  },

  // 科研助理
  {
    id: "xiaonan-jin",
    group: "ra",
    slug: "jinxiaonan",
    img: "/img/Members/jinxiaonan.png",
    name: { en: "Xiaonan Jin", zh: "金小楠" },
  },

  // 硕士
  {
    id: "peimiao-yu",
    group: "master",
    slug: "yupeimiao",
    img: "/img/Members/yupeimiao.jpg",
    name: { en: "Peimiao Yu", zh: "于沛淼" }
  },
  {
    id: "wenrui-wang",
    group: "master",
    slug: "wangwenrui",
    img: "/img/Members/wangwenrui.jpg",
    name: { en: "Wenrui Wang", zh: "王文睿" }
  },
  {
    id: "tianyi-wang",
    group: "master",
    slug: "wangtianyi",
    img: "/img/Members/wangtianyi.png",
    name: { en: "Tianyi Wang", zh: "王天怡" }
  },
  {
    id: "jiacheng-ge",
    group: "master",
    slug: "gejiacheng",
    img: "/img/Members/gejiacheng.jpg",
    name: { en: "Jiacheng Ge", zh: "葛嘉诚" }
  },
  {
    id: "dongdong-luo",
    group: "master",
    slug: "luodongdong",
    img: "/img/Members/luodongdong.jpg",
    name: { en: "Dongdong Luo", zh: "罗栋栋" },
  },
  {
    id: "zeyu-li",
    group: "master",
    slug: "lizeyu",
    img: "/img/Members/lizeyu.jpg",
    name: { en: "Zeyu Li", zh: "李泽雨" },
  },
  {
    id: "xinru-li",
    group: "master",
    slug: "lixinru",
    img: "/img/Members/lixinru.jpg",
    name: { en: "Xinru Li", zh: "李心如" },
  },
  {
    id: "zerui-yi",
    group: "master",
    slug: "yizerui",
    img: "/img/Members/yizerui.png",
    name: { en: "Zerui Yi", zh: "易泽瑞" },
  },

  // 本科生

  // 访问学者
  {
    id: "juan-zhang",
    group: "visitingscholar",
    slug: "zhangjuan",
    img: "/img/Members/zhangjuan.png",
    name: { en: "Juan Zhang", zh: "张娟" },
  },

  // 已毕业
  {
    id: "jing-li",
    group: "alumni",
    slug: "lijing",
    img: "/img/Members/lijing.png",
    name: { en: "Jing Li", zh: "李净" },
  },
  {
    id: "haixin-lou",
    group: "alumni",
    slug: "louhaixin",
    img: "/img/Members/louhaixin.png",
    name: { en: "Haixin Lou", zh: "楼海欣" },
  }
];
