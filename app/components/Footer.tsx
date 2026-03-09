"use client"

/**
 * 通用组件，页脚部分
 */

import useI18nLite from "@/components/useI18nLite";
import Link from "next/link";
import { useState } from "react"; // 用于控制模态框显示/隐藏
import { QRCodeCanvas } from 'qrcode.react'; // 引入二维码生成组件

export default function Footer() {
  const { t, L } = useI18nLite();

  const [showQrModal, setShowQrModal] = useState(false); // 使用 useQRCode 生成 canvas 类型的二维码

  // 公众号二维码配置（替换为公众号实际信息）
  const wechatConfig = {
    qrUrl: "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzE5OTM3ODMwNQ%3D%3D", // 公众号关注页URL（扫码后跳转的链接）
    title: t("component.footer.popularLinks.QRCode"), // 二维码下方文字
    size: 100, // 二维码尺寸（适配页脚布局）
    modalSize: 280 // 模态框中二维码的大图尺寸
  };

  return (
    <>
      {/* Footer Start */}
      <div
        className="container-fluid footer position-relative bg-dark text-white-50 py-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <div className="row g-5 py-5">
             {/* 左侧：实验室名称+联系方式区域 */}
            <div className="col-lg-6 pe-lg-5">
              <Link href={L("/")} className="navbar-brand">
                <h1 className="h1 text-primary mb-5">
                  {t("component.footer.labName.primary")}
                  <span className="text-white">
                    {t("component.footer.labName.secondary")}
                  </span>
                </h1>
              </Link>

              <p>
                <i className="fa fa-school me-2" />
                {t("component.footer.address")}
              </p>
              <p>
                <i className="fa fa-envelope me-2" />
                guixiang.li@seu.edu.cn
              </p>
              <p>
                <i className="fa fa-map-marker-alt me-2" />
                {t("component.footer.addressdetail")}
              </p>

              <div className="d-flex mt-4">
                <Link
                  className="btn btn-lg-square btn-primary me-2"
                  href="https://x.com/GuixiangLi"
                  target="_blank"
                >
                  <i className="fab fa-twitter"></i>
                </Link>

                {/* 新增 ORCID 链接按钮 */}
                <Link
                  className="btn btn-lg-square btn-primary me-2"
                  href="https://orcid.org/0000-0002-8730-0713"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="ORCID Profile"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 1.778C10.127 1.778 11.879 3.129 11.879 5.092c0 1.157-.546 2.075-1.24 2.614-.41.289-.764.444-.764.444l-.044.032c-.114.083-.242.148-.384.192.643.128 1.17.619 1.17 1.277 0 .854-.66 1.446-1.792 1.446-1.07 0-1.802-.679-1.802-1.446 0-.66.527-1.15 1.17-1.277-.142-.044-.27-.109-.384-.192s-.35-.155-.764-.444c-.694-.539-1.24-1.457-1.24-2.614C4.12 3.129 5.872 1.778 8 1.778Zm0 0c0 0 0 0 0 0Z"/>
                    <path d="M4.486 7.821c0 .052.012.102.035.148.022.045.058.08.108.108.148.075.363.148.646.192V7.24c-.24.044-.452.113-.63.21-.18.098-.326.223-.438.377-.112.154-.198.344-.258.57-.06.225-.09.498-.09.819h1.942c0-.42-.04-.776-.118-1.07-.078-.294-.202-.54-.372-.744-.17-.204-.384-.35-.64-.438-.256-.088-.556-.132-.9-.132-.344 0-.644.044-.9.132-.256.088-.47.234-.64.438-.17.204-.294.45-.372.744-.078.294-.118.65-.118 1.07h1.941c0-.32.03-.594.09-.819.06-.226.146-.416.258-.57.112-.154.258-.279.438-.377.18-.098.39-.166.63-.21v1.024c-.283-.044-.498-.117-.646-.192-.05-.028-.086-.063-.108-.108-.023-.046-.035-.096-.035-.148 0-.052.012-.102.035-.148.022-.045.058-.08.108-.108.148-.075.363-.148.646-.192V5.932c-.24.044-.452.113-.63.21-.18.098-.326.223-.438.377-.112.154-.198.344-.258.57-.06.225-.09.498-.09.819H1.865c0-.42.04-.776.118-1.07.078-.294.202-.54.372-.744.17-.204.384-.35.64-.438.256-.088.556-.132.9-.132.344 0 .644.044.9.132.256.088.47.234.64.438.17.204.294.45.372.744.078.294.118.65.118 1.07H4.486Zm2.94 0c0 .052.012.102.035.148.022.045.058.08.108.108.148.075.363.148.646.192V7.24c-.24.044-.452.113-.63.21-.18.098-.326.223-.438.377-.112.154-.198.344-.258.57-.06.225-.09.498-.09.819h1.942c0-.42-.04-.776-.118-1.07-.078-.294-.202-.54-.372-.744-.17-.204-.384-.35-.64-.438-.256-.088-.556-.132-.9-.132-.344 0-.644.044-.9.132-.256.088-.47.234-.64.438-.17.204-.294.45-.372.744-.078.294-.118.65-.118 1.07h1.941c0-.32.03-.594.09-.819.06-.226.146-.416.258-.57.112-.154.258-.279.438-.377.18-.098.39-.166.63-.21v1.024c-.283-.044-.498-.117-.646-.192-.05-.028-.086-.063-.108-.108-.023-.046-.035-.096-.035-.148 0-.052.012-.102.035-.148.022-.045.058-.08.108-.108.148-.075.363-.148.646-.192V5.932c-.24.044-.452.113-.63.21-.18.098-.326.223-.438.377-.112.154-.198.344-.258.57-.06.225-.09.498-.09.819H4.426c0-.42.04-.776.118-1.07.078-.294.202-.54.372-.744.17-.204.384-.35.64-.438.256-.088.556-.132.9-.132.344 0 .644.044.9.132.256.088.47.234.64.438.17.204.294.45.372.744.078.294.118.65.118 1.07H7.426Z"/>
                  </svg>
                </Link>

              </div>
            </div>

            {/* 右侧：快速链接+常用链接+二维码区域 */}
            <div className="col-lg-6 ps-lg-5">
              <div className="row g-5">
                {/* 快速链接 */}
                <div className="col-sm-6">
                  <h4 className="text-light mb-4">
                    {t("component.footer.quickLinks.title")}
                  </h4>
                  <Link className="btn btn-link" href={L("/")}>
                    {t("component.footer.quickLinks.about")}
                  </Link>
                  <Link className="btn btn-link" href={L("/research")}>
                    {t("component.footer.quickLinks.research")}
                  </Link>
                  <Link className="btn btn-link" href={L("/publications")}>
                    {t("component.footer.quickLinks.publications")}
                  </Link>
                  <Link className="btn btn-link" href={L("/members")}>
                    {t("component.footer.quickLinks.team")}
                  </Link>
                  <Link className="btn btn-link" href={L("/news")}>
                    {t("component.footer.quickLinks.news")}
                  </Link>
                  <Link className="btn btn-link" href={L("/contact")}>
                    {t("component.footer.quickLinks.contact")}
                  </Link>
                </div>

                 {/* 常用链接 + 公众号二维码 */}
                <div className="col-sm-6">
                  <h4 className="text-light mb-4">
                    {t("component.footer.popularLinks.title")}
                  </h4>
                  <Link className="btn btn-link" href="https://www.seu.edu.cn/" target="_blank">
                    {t("component.footer.popularLinks.university")}
                  </Link>
                  <Link className="btn btn-link" href="https://seugs.seu.edu.cn/" target="_blank">
                    {t("component.footer.popularLinks.master")}
                  </Link>
                  <Link className="btn btn-link" href="https://smse.seu.edu.cn/" target="_blank">
                    {t("component.footer.popularLinks.materials")}
                  </Link>
                  <Link className="btn btn-link" href="https://smse.seu.edu.cn/2025/0411/c2590a524616/page.htm" target="_blank">
                    {t("component.footer.popularLinks.individual")}
                  </Link>

                   {/* 公众号二维码区域（20251121新增） */}
                   <div className="mt-6 border-top border-white/10 pt-4">
                    {/* 用 d-flex 实现左右分布，align-items-center 垂直居中 */}
                    <div 
                      className="d-flex align-items-center cursor-pointer"
                      onClick={() => setShowQrModal(true)}
                    >
                      {/* 左侧：二维码 */}
                      <div className="bg-white p-2 rounded me-3">
                        <QRCodeCanvas
                          value={wechatConfig.qrUrl}
                          size={wechatConfig.size}
                          bgColor="#ffffff"
                          fgColor="#000000"
                        />
                      </div>
                      {/* 右侧：文字（垂直居中，与二维码对齐） */}
                      <div className="flex-column">
                        <h5 className="text-light mb-1" style={{ whiteSpace: "pre-line" }}> {/* 减小文字底部间距 */}
                           {t("component.footer.popularLinks.QRCode")}
                        </h5>
                        <span className="text-sm text-primary">{t("component.footer.wechat.clickToEnlarge")}</span>
                      </div>
                    </div>
                  </div>
                </div>

                 {/* 订阅邮件 */}
                <div className="col-sm-12">
                  <h4 className="text-light mb-4">
                    {t("component.footer.newsletter.title")}
                  </h4>
                  <div className="w-100">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control border-0 py-3 px-4"
                        style={{ background: "rgba(255,255,255,.1)" }}
                        placeholder={t("component.footer.newsletter.placeholder")}
                      />
                      <button className="btn btn-primary px-4">
                        {t("component.footer.newsletter.signup")}
                      </button>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}

      {/* 公众号二维码模态框（渲染大二维码) */}
      {showQrModal && (
        <div 
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setShowQrModal(false)} // 点击背景关闭
        >
          <div 
            className="bg-white rounded-lg p-6 text-center max-w-md w-full"
            onClick={(e) => e.stopPropagation()} // 点击二维码区域不关闭
          >
            {/* 关闭按钮 */}
            <button 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setShowQrModal(false)}
            >
              <i className="fa fa-times text-xl"></i>
            </button>
            {/* 大图二维码 */}
            <div className="mb-4">
              <QRCodeCanvas
                value={wechatConfig.qrUrl}
                size={wechatConfig.modalSize}
                bgColor="#ffffff"
                fgColor="#000000"
              />
            </div>
            {/* 二维码下方文字 */}
            <h5 className="text-lg font-semibold text-gray-800 mb-2">{wechatConfig.title}</h5>
            <p className="text-gray-600 text-sm">扫码关注公众号获取更多资讯</p>
          </div>
        </div>
      )}


      {/* Copyright Start */}
      <div className="container-fluid copyright bg-dark text-white-50 py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-0">
                &copy;{" "}
                <Link href={L("/")}>{t("component.footer.copyright.lab")}</Link>.{" "}
                {t("component.footer.copyright.rights")}
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="mb-0">
                {t("component.footer.copyright.design")}{" "}
                <Link href="https://htmlcodex.com">HTML Codex</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright End */}

      {/* Back to Top */}
      <Link
        href="#"
        className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
      >
        <i className="bi bi-arrow-up" />
      </Link>
    </>
  );
}
