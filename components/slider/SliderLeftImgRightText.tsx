"use client";
import React from "react";
// 引入组件专属样式（路径和文件名要和你新建的css一致）
import "./SliderLeftImgRightText.css";

// 定义组件需要的参数类型（确保传入的内容符合规范）
interface SliderLeftImgRightTextProps {
  imgSrc: string;    // 左侧图片的路径（比如你的 "/img/main_page/20251111_lgx_CarouselStart.png"）
  imgAlt: string;    // 图片的alt描述（用于 accessibility）
  title: string;     // 右侧的标题（你提供的英文标题）
  abstract: string;  // 右侧的摘要（你提供的英文摘要）
}

// 组件核心逻辑
export default function SliderLeftImgRightText({
  imgSrc,
  imgAlt,
  title,
  abstract,
}: SliderLeftImgRightTextProps) {
  return (
    // 组件最外层容器，用于控制整体布局
    <div className="slider-left-img-right-wrapper">
      {/* 左侧图片区域 */}
      <div className="slider-img-box">
        <img 
          src={imgSrc} 
          alt={imgAlt} 
          className="slider-img" 
          loading="lazy"  // 懒加载，优化性能
        />
      </div>

      {/* 右侧文字区域 */}
      <div className="slider-text-box">
        <h2 className="slider-text-title">{title}</h2>
        <div className="slider-text-abstract">
          <span className="slider-abstract-label">Abstract</span>
          <p className="slider-abstract-content">{abstract}</p>
        </div>
      </div>
    </div>
  );
}