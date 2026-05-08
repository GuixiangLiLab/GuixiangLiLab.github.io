"use client";
import Image from "next/image";
import "./research.css";
import useI18nLite from "@/components/useI18nLite";

export default function ResearchPage() {
  const { t } = useI18nLite();

  // 封装通用卡片组件（拆分短卡片/横向小卡片两套布局）
  const ResearchCard = ({
    number,
    title,
    text,
    imgSrc,
    alt,
    isShortCard = false,
  }: {
    number: string;
    title: string;
    text: string;
    imgSrc?: string;
    alt?: string;
    isShortCard?: boolean;
  }) => {
    // 正文自动按分号换行渲染，无需修改JSON
    const renderTextLines = () => {
      if (!text) return null;
      return text
        .split(";")
        .map((line) => line.trim().replace(/。$/, ""))
        .filter((line) => line.length > 0)
        .map((line, index) => (
          <p key={index} className="content-text-line">
            {line}
          </p>
        ));
    };

    return (
      <div className={`research-card ${isShortCard ? "short-card" : ""}`}>
        <div
          className={`card-content ${
            isShortCard ? "short-card-content" : "grid-card-content"
          }`}
        >
          {/* 短卡片（大类介绍）：原有样式完全保留 */}
          {isShortCard ? (
            <div className="right-section short-card-right">
              <div className="slide-overlay" />
              <div className="content-area">
                <div className="section-number">{number}</div>
                <h3 className="content-title">{title}</h3>
                <p className="content-text">{text}</p>
              </div>
            </div>
          ) : (
            // 横向小卡片：垂直布局 编号→标题→图片→正文
            <>
              <div className="slide-overlay" />
              <div className="grid-card-content-area">
                <div className="section-number">{number}</div>
                <h3 className="content-title">{title}</h3>
                {/* 图片区域：标题下方、正文上方 */}
                {imgSrc && (
                  <div className="grid-image-container">
                    <Image
                      src={imgSrc}
                      alt={alt || title}
                      fill
                      className="research-image"
                    />
                  </div>
                )}
                {/* 正文多行渲染 */}
                <div className="content-text-wrapper">
                  {renderTextLines()}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      {/* 页头 */}
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-5 mt-4">
          <h1 className="display-2 text-white mb-3 animated slideInDown">
            {t("page.research.title")}
          </h1>
        </div>
      </div>

      {/* 总体介绍卡片 */}
      <ResearchCard
        number=""
        title={t("page.research.intro_card.text")}
        text=""
        isShortCard={true}
      />

      {/* Ⅰ 能源光电材料与器件大类卡片 */}
      <ResearchCard
        number={t("page.research.energy_opt_card.title")}
        title=""
        text={t("page.research.energy_opt_card.text")}
        alt={t("page.research.energy_opt_card.alt")}
        isShortCard={true}
      />

      {/* 第一组3个卡片：横向并排容器 */}
      <div className="card-row">
        <ResearchCard
          number={t("page.research.cards.1.title")}
          title=""
          text={t("page.research.cards.1.text")}
          imgSrc="/img/research/research_directions1.png"
          alt={t("page.research.cards.1.alt")}
        />
        <ResearchCard
          number={t("page.research.cards.2.title")}
          title=""
          text={t("page.research.cards.2.text")}
          imgSrc="/img/research/research_directions2.png"
          alt={t("page.research.cards.2.alt")}
        />
        <ResearchCard
          number={t("page.research.cards.3.title")}
          title=""
          text={t("page.research.cards.3.text")}
          imgSrc="/img/research/research_directions3.png"
          alt={t("page.research.cards.3.alt")}
        />
      </div>

      {/* Ⅱ 功能半导体与智能器件大类卡片 */}
      <ResearchCard
        number={t("page.research.func_semi_card.title")}
        title=""
        text={t("page.research.func_semi_card.text")}
        imgSrc="/img/research/func_semi_overview.jpg"
        alt={t("page.research.func_semi_card.alt")}
        isShortCard={true}
      />

      {/* 第二组3个卡片：横向并排容器 */}
      <div className="card-row">
        <ResearchCard
          number={t("page.research.cards.4.title")}
          title=""
          text={t("page.research.cards.4.text")}
          imgSrc="/img/research/research_directions4.jpg"
          alt={t("page.research.cards.4.alt")}
        />
        <ResearchCard
          number={t("page.research.cards.5.title")}
          title=""
          text={t("page.research.cards.5.text")}
          imgSrc="/img/research/research_directions5.png"
          alt={t("page.research.cards.5.alt")}
        />
        <ResearchCard
          number={t("page.research.cards.6.title")}
          title=""
          text={t("page.research.cards.6.text")}
          imgSrc="/img/research/research_directions6.png"
          alt={t("page.research.cards.6.alt")}
        />
      </div>
    </>
  );
}