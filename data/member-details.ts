export type Lang = "en" | "zh";

export interface TextBlock {
  title?: { en: string; zh: string };
  text?: { en: string; zh: string };
}

export interface SideNotes {
  heading?: { en: string; zh: string };
  paras?: Array<{ en: string; zh: string }>;
  details?: {
    summary: { en: string; zh: string };
    text: { en: string; zh: string };
  };
}

export interface MemberDetail {
  slug: string;                               // /members/[slug]
  portrait: string;                           // public 下的图片路径
  alt: { en: string; zh: string };
  name: { en: string; zh: string };
  statusBadge?: { en: string; zh: string };   // PhD / Master / RA 等
  affiliation?: { en: string; zh: string };

  sideNotes?: SideNotes;

  background?: TextBlock | null;
  hobbies?: { en: string[]; zh: string[] } | null;
  statement?: TextBlock | null;
  motto?: { en: string; zh: string } | null;
  research?: TextBlock | null;

  // 可选：自定义更多模块
  extraSections?: Array<TextBlock & { id: string }> | null;
}

/**
 * 注意：
 * - 教授 liguixiang 按你的要求不数据化，用你已有的专用页面。
 * - 其他成员都在这里维护；中英文都给了草稿，可自行微调。
 */
export const memberDetails: Record<string, MemberDetail> = {
  // ========================
  // Visiting Scholar
  // ========================
  lijing: {
    slug: "lijing",
    portrait: "/img/Members/lijing1.png",
    alt: { en: "Jing Li", zh: "李净" },
    name: { en: "Jing Li", zh: "李净" },
    statusBadge: { en: "Visiting Scholar", zh: "访问学者" },
    affiliation: {
      en: "Guixiang Li Laboratory · Southeast University",
      zh: "功能光电实验室 · 东南大学"
    },
    sideNotes: {
      
    },
    background: {
      title: { en: "Background", zh: "教育经历" },
      text: {
        en: "<strong>Ph.D.</strong> School of Physical and Chemical Sciences, Queen Mary University of London, September 2025",
        zh: "玛丽女王大学 · 化学院 · 博士，2025 年 9 月"
      }
    },
    hobbies: {
      en: ["Reading", "Running"],
      zh: ["阅读", "跑步"]
    },
    statement: {
      title: { en: "Personal Statement", zh: "个人陈述" },
      text: {
        en:
          "I am quite conscientious in my work and willing to dedicate the time needed to do things well. I maintain a long-term interest in research, and when I encounter problems, I think them through repeatedly. I'm not driven by short-term gains and tend to be quite grounded and practical.",
        zh: "做事比较认真，也愿意花时间把事情做好。对科研保持长期兴趣，遇到问题会反复琢磨，不太急功近利，比较踏实。"
      }
    },
    motto: {
      en: "“love the life you live,live the life you love.”",
      zh: "“按照自己喜欢的方式，去度过一生。”"
    },
    research: {
      title: { en: "Research Direction", zh: "研究方向" },
      text: {
        en:
          "Research on interface engineering of perovskite photovoltaic devices and the behavior and control of lead contamination in perovskite materials.",
        zh: "钙钛矿光伏器件界面工程及钙钛矿铅污染行为与调控研究。"
      }
    }
  },
  // ========================
  // PostDoc
  // ========================
    fangdong: {
    slug: "fangdong",
    portrait: "/img/Members/fangdong1.png",
    alt: { en: "Dong Fang", zh: "方栋" },
    name: { en: "Dong Fang", zh: "方栋" },
    statusBadge: { en: "Postdoc", zh: "博士后" },
    affiliation: {
      en: "Guixiang Li Laboratory · Southeast University",
      zh: "功能光电实验室 · 东南大学"
    },
    sideNotes: {

    },
    background: {
      title: { en: "Background", zh: "教育经历" },
      text: {
        en: "<strong>successive postgraduate and doctoral program</strong> Condensed Matter Physics, University of Posts and Telecommunications, June 2025",
        zh: "南京邮电大学 · 硕博连读，2025 年 12 月"
      }
    },
    hobbies: {
      en: ["Reading", "Singing", "Playing badminton", "Playing table tennis"],
      zh: ["阅读", "唱歌", "羽毛球", "乒乓球"]
    },
    statement: {
      title: { en: "Personal Statement", zh: "个人陈述" },
      text: {
        en:
          "Attentive, highly responsible, diligent, and possesses strong teamwork skills.",
        zh: "细心，责任心强，认真负责，具备团队精神。"
      }
    },
    motto: {
      en: "“The success isn't all about me, but I am always present in the success.”",
      zh: "“功成不必在我，功成必定有我。”"
    },
    research: {
      title: { en: "Research Direction", zh: "研究方向" },
      text: {
        en:
          "Research on Tin-Based Optoelectronic Functional Materials and Solar Cells.",
        zh: "锡基光电功能材料及其太阳能电池研究"
      }
    }
  },

  // ========================
  // Research Assistant
  // ========================

  zhangxiaochun: {
    slug: "zhangxiaochun",
    portrait: "/img/Members/zhangxiaochun.jpg",
    alt: { en: "Xiaochun Zhang", zh: "张晓春" },
    name: { en: "Xiaochun Zhang", zh: "张晓春" },
    statusBadge: { en: "Research Assistant", zh: "科研助理" },
    affiliation: {
      en: "Guixiang Li Laboratory · Southeast University",
      zh: "功能光电实验室 · 东南大学"
    },
    sideNotes: {
      heading: { en: "More about me", zh: "更多关于我" },
      paras: [
        {
          en: "Born in July 2000, from Tongliao, Inner Mongolia.",
          zh: "2000 年 7 月生，内蒙古通辽人。"
        },
        {
          en:
            "In research, an initial one-year effort was devoted to simulation studies of the mechanical and thermal properties of low-dimensional nanomaterials, thereby establishing a solid foundation in materials modeling and analysis. This was followed by a two-year joint training program at the Dalian Institute of Chemical Physics, Chinese Academy of Sciences, during which the research scope was extended to inverted-structure, standard-bandgap, and large-area flexible perovskite solar cells, accumulating substantial experience in device design and fabrication. The current focus lies on interfacial engineering of the electron transport layer in inverted standard-bandgap perovskite cells, with an emphasis on addressing critical issues of interfacial instability and aggregation.",
          zh:
            "科研方面，最初一年主要从事低维纳米材料力学与热学性质的模拟研究，夯实了材料建模与分析基础。随后在中科院大连化物所联合培养两年，研究拓展到倒置结构、常规带隙及大面积柔性钙钛矿太阳能电池，积累了器件设计与制备经验。目前聚焦于倒置常规带隙钙钛矿电池中电子传输层的界面工程，重点解决界面不稳定与聚集等关键问题。"
        }
      ],
      details: {
        summary: { en: "Personal story", zh: "个人小记" },
        text: {
          en:
            "“Sometimes I fear being just a little short—and I also know when to slow down. Every perfectly leveled thin film is a foreshadowing of the next breakthrough.”",
          zh:
            "“有时担心差那么一点点——也懂得在该放慢时放慢。每一层平整的薄膜，都是下一次突破的预告。”"
        }
      }
    },
    background: {
      title: { en: "Background", zh: "教育经历" },
      text: {
        en: "<strong>M.Eng.</strong> Condensed Matter Physics, Liaoning Normal University, June 2025",
        zh: "辽宁师范大学 · 凝聚态物理 · 工程硕士，2025 年 6 月"
      }
    },
    hobbies: {
      en: ["Playing with cats", "Swimming", "Exploring food", "Singing", "City walks"],
      zh: ["撸猫", "游泳", "探索美食", "唱歌", "城市漫步"]
    },
    statement: {
      title: { en: "Personal Statement", zh: "个人陈述" },
      text: {
        en:
          "Objective and detail-oriented; able to adjust pace and keep resilience. I enjoy tackling tough problems and steadily pushing research forward.",
        zh: "客观细致，节奏可调且具韧性；喜欢解决难题、稳步推进科研。"
      }
    },
    motto: {
      en: "“Every perfectly leveled film foreshadows the next breakthrough.”",
      zh: "“每一层平整的薄膜，都是下一次突破的预告。”"
    },
    research: {
      title: { en: "Research Direction", zh: "研究方向" },
      text: {
        en:
          "Inverted (p–i–n) regular-bandgap perovskite solar cells; electron-transport-layer/interface engineering; stability and aggregation issues in device stacks.",
        zh: "倒置（p–i–n）常规带隙钙钛矿太阳能电池；电子传输层/界面工程；器件层间稳定性与聚集问题。"
      }
    }
  },

  liyifan: {
    slug: "liyifan",
    portrait: "/img/liyifan.jpg",
    alt: { en: "Yifan Li", zh: "李怡凡" },
    name: { en: "Yifan Li", zh: "李怡凡" },
    statusBadge: { en: "Research Assistant", zh: "科研助理" },
    affiliation: {
      en: "Guixiang Li Laboratory · Southeast University",
      zh: "功能光电实验室 · 东南大学"
    },
    background: {
      title: { en: "Background", zh: "教育经历" },
      text: {
        en:
          "<strong>M.Eng.</strong> Optical Engineering, Hebei University. Research focus on wide-bandgap perovskite solar cells, with a strong interest in photovoltaic materials.",
        zh:
          "河北大学 · 光学工程 · 工程硕士。研究方向为宽带隙钙钛矿太阳能电池，对光伏材料有浓厚兴趣。"
      }
    },
    hobbies: {
      en: ["Badminton", "Table tennis", "Billiards"],
      zh: ["羽毛球", "乒乓球", "台球"]
    },
    statement: {
      title: { en: "Personal Statement", zh: "个人陈述" },
      text: {
        en:
          "Objective and rational; persistent in daily work, able to endure hardship and adapt to change; courageous when facing challenges.",
        zh: "客观理性，做事持久；能吃苦、适应性强；面对挑战勇于直面。"
      }
    },
    motto: {
      en: "“What’s done is done.”",
      zh: "“做过便无悔。”"
    },
    research: {
      title: { en: "Research Direction", zh: "研究方向" },
      text: {
        en: "Wide-bandgap perovskite solar cells and all-perovskite tandem cells.",
        zh: "宽带隙钙钛矿太阳能电池与全钙钛矿叠层电池。"
      }
    }
  },

  // ========================
  // Master
  // ========================

  lizeyu: {
    slug: "lizeyu",
    portrait: "/img/Members/lizeyu.jpg",
    alt: { en: "Zeyu Li", zh: "李泽雨" },
    name: { en: "Zeyu Li", zh: "李泽雨" },
    statusBadge: { en: "Master's · Year 1", zh: "硕士一年级" },
    affiliation: {
      en: "Guixiang Li Laboratory · Southeast University",
      zh: "功能光电实验室 · 东南大学"
    },
    background: {
      title: { en: "Background", zh: "教育经历" },
      text: {
        en:
          "<strong>B.Eng.</strong> Huazhong University of Science and Technology (HUST).<br/><strong>Master.</strong> Joined the group in September 2025 (Year 1).",
        zh:
          "华中科技大学 本科工学学位；<br/>2025 年 9 月加入课题组（硕士一年级）。"
      }
    },
    hobbies: {
      en: ["Running", "Badminton"],
      zh: ["跑步", "羽毛球"]
    },
    statement: {
      title: { en: "Personal Statement", zh: "个人陈述" },
      text: {
        en:
          "Strong stress tolerance and a proactive mindset—ready to face challenges head-on, highly motivated, and not easily discouraged.",
        zh: "抗压能力强、积极主动，直面挑战，动力十足，不轻言放弃。"
      }
    },
    motto: {
      en: "“Seize the day, gather ye rosebuds while ye may.”",
      zh: "“及时行乐，莫负韶华。”"
    },
    research: {
      title: { en: "Research Direction", zh: "研究方向" },
      text: {
        en: "All-tin halide perovskite solar cells.",
        zh: "纯锡卤化物钙钛矿太阳能电池。"
      }
    }
  },

  luodongdong: {
    slug: "luodongdong",
    portrait: "/img/Members/luodongdong.jpg",
    alt: { en: "Dongdong Luo", zh: "罗栋栋" },
    name: { en: "Dongdong Luo", zh: "罗栋栋" },
    statusBadge: { en: "Master's · Year 2", zh: "硕士二年级" },
    affiliation: {
      en: "Guixiang Li Laboratory · Southeast University",
      zh: "功能光电实验室 · 东南大学"
    },
    background: {
      title: { en: "Background", zh: "教育经历" },
      text: {
        en:
          "<strong>Master.</strong> School of Materials and Physics, China University of Mining and Technology.",
        zh: "中国矿业大学 · 材料与物理学院 · 硕士。"
      }
    },
    // 个性化“家乡”模块 → 放在 extraSections
    extraSections: [
      {
        id: "origin",
        title: { en: "Hometown", zh: "家乡" },
        text: { en: "Pingliang, Gansu Province.", zh: "甘肃省平凉市。" }
      }
    ],
    research: {
      title: { en: "Research Direction", zh: "研究方向" },
      text: {
        en: "Electrocatalytic water splitting, hydrogen energy, and wide-bandgap perovskite solar cells.",
        zh: "电催化分解水、氢能，以及宽带隙钙钛矿太阳能电池。"
      }
    }
  },

  lixinru: {
    slug: "lixinru",
    portrait: "/img/Members/lixinru.jpg",
    alt: { en: "Xinru Li", zh: "李心如" },
    name: { en: "Xinru Li", zh: "李心如" },
    statusBadge: { en: "Master's · Year 1", zh: "硕士一年级" },
    affiliation: {
      en: "Guixiang Li Laboratory · Southeast University",
      zh: "功能光电实验室 · 东南大学"
    },
    sideNotes: {
      heading: { en: "More about me", zh: "更多关于我" },
      paras: [
        {
          en:
            "I'm Li Xinru, originally from Tai'an, Shandong—renowned for the grandeur of Mount Tai and the grace of the Wen River. I completed my undergraduate studies at Taiyuan University of Technology. I enjoy quiet, reflective activities such as reading and films; my guiding principle: “A journey of a thousand miles begins beneath one's feet; steady effort leads to goals.”",
          zh:
            "我叫李馨儒，来自山东泰安——一方有泰山之雄、汶水之柔的土地。本科毕业于太原理工大学。日常喜欢阅读与观影等安静的活动；座右铭：“千里之行，始于足下；持之以恒，行稳致远。”"
        }
      ]
    },
    background: {
      title: { en: "Background", zh: "教育经历" },
      text: {
        en: "<strong>B.Eng.</strong> Taiyuan University of Technology",
        zh: "太原理工大学 本科工学学位"
      }
    },
    hobbies: {
      en: ["Reading", "Movies"],
      zh: ["阅读", "电影"]
    },
    statement: {
      title: { en: "Personal Statement", zh: "个人陈述" },
      text: {
        en: "Calm, orderly, and persistent—focused on steady progress through consistent effort.",
        zh: "性格沉静有序，做事坚持稳健，注重持续积累与稳步前进。"
      }
    },
    motto: {
      en: "“To go far, start from the near; be steadfast and unremitting.”",
      zh: "“行远自近，笃行不怠。”"
    }
  },

  // ========================
  // PhD
  // ========================

  wangshaoqiang: {
    slug: "wangshaoqiang",
    portrait: "/img/Members/wangshaoqiang.png",
    alt: { en: "Shao-Qiang Wang", zh: "王少强" },
    name: { en: "Shao-Qiang Wang", zh: "王少强" },
    statusBadge: { en: "PhD · Year 1", zh: "博士一年级" },
    affiliation: {
      en: "Guixiang Li Laboratory · Southeast University",
      zh: "功能光电实验室 · 东南大学"
    },
    background: {
      title: { en: "Background", zh: "教育经历" },
      text: {
        en:
          "<strong>M.Eng.</strong> Materials and Chemical Engineering, Changzhou University. Master research focused on the synthesis and performance investigation of active layer materials for organic solar cells.",
        zh:
          "常州大学 · 材料与化工 · 工程硕士。硕士研究方向为有机太阳能电池活性层材料的合成与性能研究。"
      }
    },
    hobbies: {
      en: ["Watching movies", "Listening to music", "Traveling"],
      zh: ["看电影", "听音乐", "旅行"]
    },
    statement: {
      title: { en: "Personal Statement", zh: "个人陈述" },
      text: {
        en:
          "Optimistic and cheerful, enthusiastic about life; willing to explore and keep an open heart toward new experiences.",
        zh: "乐观开朗，热爱生活；勇于探索，对新鲜事物保持开放心态。"
      }
    },
    motto: {
      en:
        "“Like a dragon soaring above, daring to ride the waves of the sea; looking back at the dust of the world, my determination remains unchanged.”",
      zh:
        "“鲲鹏展翅，敢乘海浪；回望尘世，初心不改。”"
    },
    research: {
      title: { en: "Research Direction", zh: "研究方向" },
      text: {
        en:
          "Synthesis of hole-transport layer materials and device investigation for perovskite solar cells.",
        zh: "钙钛矿太阳能电池空穴传输层材料的合成与器件研究。"
      }
    }
  },

  wenxuebing: {
    slug: "wenxuebing",
    portrait: "/img/Members/wenxuebing.jpg",
    alt: { en: "Xuebing Wen", zh: "温雪冰" },
    name: { en: "Xuebing Wen", zh: "温雪冰" },
    statusBadge: { en: "PhD · Year 1", zh: "博士一年级" },
    affiliation: {
      en: "Guixiang Li Laboratory · Southeast University",
      zh: "功能光电实验室 · 东南大学"
    },
    background: {
      title: { en: "Background", zh: "教育经历" },
      text: {
        en:
          "<strong>M.Eng.</strong> Optoelectronic Information Engineering, South China Normal University, Fujian Putian, June 2025",
        zh:
          "华南师范大学 · 光电信息工程 · 工程硕士，福建莆田，2025 年 6 月"
      }
    },
    hobbies: {
      en: ["Photography", "Board games", "Lip sync shows"],
      zh: ["摄影", "桌游", "配音秀"]
    },
    statement: {
      title: { en: "Personal Statement", zh: "个人陈述" },
      text: {
        en:
          "Optimistic and cheerful with a positive mindset; firmly believe that all beautiful things will be encountered along the journey.",
        zh: "积极乐观、阳光向上；坚信美好终会在路上相遇。"
      }
    },
    motto: {
      en:
        "“Those seemingly trivial and repetitive days will one day suddenly show you the meaning of persistence.”",
      zh:
        "“那些看似琐碎而重复的日子，总有一天会突然告诉你坚持的意义。”"
    },
    research: {
      title: { en: "Research Direction", zh: "研究方向" },
      text: {
        en: "Sn–Pb stacked perovskite solar cells.",
        zh: "Sn–Pb 叠层钙钛矿太阳能电池。"
      }
    }
  },

  zhangxu: {
    slug: "zhangxu",
    portrait: "/img/Members/zhangxu.jpg",
    alt: { en: "Xu Zhang", zh: "张旭" },
    name: { en: "Xu Zhang", zh: "张旭" },
    statusBadge: { en: "PhD · Year 1", zh: "博士一年级" },
    affiliation: {
      en: "Guixiang Li Laboratory · Southeast University",
      zh: "功能光电实验室 · 东南大学"
    },
    background: {
      title: { en: "Background", zh: "教育经历" },
      text: {
        en:
          "<strong>B.Eng.</strong> School of Physics and Optoelectronic Information Engineering, Anhui University<br/><strong>M.Eng.</strong> School of Nanoscience and Materials Engineering, Henan University",
        zh:
          "安徽大学 物理与光电信息工程学院 本科工学学位；<br/>河南大学 纳米科学与材料工程学院 工程硕士"
      }
    },
    hobbies: {
      en: ["Listening to music", "Gourmet food", "Night running"],
      zh: ["听音乐", "美食", "夜跑"]
    },
    statement: {
      title: { en: "Personal Statement", zh: "个人陈述" },
      text: {
        en:
          "Easy-going and respectful of others’ opinions; always striving to improve.",
        zh: "性格随和，尊重他人意见；不断自我提升。"
      }
    },
    motto: {
      en: "“You don’t have to become anybody else.”",
      zh: "“你无需成为别人。”"
    },
    research: {
      title: { en: "Research Direction", zh: "研究方向" },
      text: {
        en: "Stability of perovskite solar devices.",
        zh: "钙钛矿太阳能器件的稳定性。"
      }
    }
  }
};