"use client";

import Image from "next/image";
import "./research.css";
import useI18nLite from "@/components/useI18nLite";

export default function ResearchPage() {
  const { t } = useI18nLite();

  // 封装通用卡片组件（区分普通卡片/短卡片）
  const ResearchCard = ({
    number,
    title,
    text,
    imgSrc,
    alt,
    isShortCard = false, // 新增：是否为短卡片（高度减半、无图片）
  }: {
    number: string;
    title: string;
    text: string;
    imgSrc?: string;
    alt?: string;
    isShortCard?: boolean;
  }) => (
    <div className={`research-card ${isShortCard ? "short-card" : ""}`}>
      <div className={`card-content ${isShortCard ? "short-card-content" : ""}`}>
        {/* 普通卡片显示左侧图片区，短卡片隐藏 */}
        {!isShortCard && (
          <div className="left-section">
            <div className="title-image-group">
              <div className="image-container">
                <Image
                  src={imgSrc!}
                  alt={alt!}
                  fill
                  className="research-image"
                />
              </div>
            </div>
          </div>
        )}

        {/* 右侧内容区（短卡片占满宽度） */}
        <div className={`right-section ${isShortCard ? "short-card-right" : ""}`}>
          <div className="slide-overlay" />
          <div className="content-area">
            <div className="section-number">{number}</div>
            <h3 className="content-title">{title}</h3>
            <p className="content-text">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );



  return (
    <>
      {/* 页头 */}
      <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5 mt-4">
          <h1 className="display-2 text-white mb-3 animated slideInDown">
            {t("page.research.title")}
          </h1>
        </div>
      </div>

      {/* 总体介绍卡片（无图片） */}
      <ResearchCard
        number={t("page.research.intro_card.title")}
        title={t("page.research.intro_card.text")}
        text=""
        isShortCard={true} // 无图片
      />

      {/* 01-总 能源光电材料与器件大类介绍卡片（带大类封面图） */}
      <ResearchCard
        number="Ⅰ"
        title={t("page.research.energy_opt_card.title")}
        text={t("page.research.energy_opt_card.text")}
        alt={t("page.research.energy_opt_card.alt")}
        isShortCard={true}
      />

      {/* 卡片 01 */}
      <ResearchCard
        number="01"
        title={t("page.research.cards.1.title")}
        text={t("page.research.cards.1.text")}
        imgSrc="/img/research/research_directions1.png"
        alt={t("page.research.cards.1.alt")}
      />

      {/* 卡片 02 */}
      <ResearchCard
        number="02"
        title={t("page.research.cards.2.title")}
        text={t("page.research.cards.2.text")}
        imgSrc="/img/research/research_directions2.png"
        alt={t("page.research.cards.2.alt")}
      />

      {/* 卡片 03 */}
      <ResearchCard
        number="03"
        title={t("page.research.cards.3.title")}
        text={t("page.research.cards.3.text")}
        imgSrc="/img/research/research_directions3.png"
        alt={t("page.research.cards.3.alt")}
      />

      {/* 02-总 功能半导体与智能器件大类介绍卡片 */}
      <ResearchCard
        number="Ⅱ"
        title={t("page.research.func_semi_card.title")}
        text={t("page.research.func_semi_card.text")}
        imgSrc="/img/research/func_semi_overview.jpg" // 建议新增一张大类封面图
        alt={t("page.research.func_semi_card.alt")}
        isShortCard={true}
      />

      {/* 卡片 04 */}
      <ResearchCard
        number="04"
        title={t("page.research.cards.4.title")}
        text={t("page.research.cards.4.text")}
        imgSrc="/img/research/research_directions4.png"
        alt={t("page.research.cards.4.alt")}
      />

      {/* 卡片 05 */}
      <ResearchCard
        number="05"
        title={t("page.research.cards.5.title")}
        text={t("page.research.cards.5.text")}
        imgSrc="/img/research/research_directions5.png"
        alt={t("page.research.cards.5.alt")}
      />

      {/* 卡片 06 */}
      <ResearchCard
        number="06"
        title={t("page.research.cards.6.title")}
        text={t("page.research.cards.6.text")}
        imgSrc="/img/research/research_directions6.png"
        alt={t("page.research.cards.6.alt")}
      />

    </>
  );
}
