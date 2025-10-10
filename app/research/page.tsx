"use client";

import { useEffect } from "react";
import "./research.css";

export default function ResearchPage() {
  useEffect(() => window.scrollTo(0, 0), []);
  
  return (
    <>
      {/* 页面头部 */}
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-5 mt-4">
          <h1 className="display-2 text-white mb-3 animated slideInDown">
            Research
          </h1>
        </div>
      </div>

      {/* 三个研究方向卡片 */}
      <div className="research-card">
        <div className="card-content">
          <div className="left-section">
            <div className="title-image-group">
              <div className="image-container">
                <img
                  src="/img/perovskite_solar_cells.png"
                  alt="Perovskite Solar Cells"
                  className="research-image"
                />
              </div>
            </div>
          </div>

          <div className="right-section">
            <div className="slide-overlay" />
            <div className="content-area">
              <div className="section-number">01</div>
              <h3 className="content-title">
                Degradation and stability mechanisms of perovskite solar cells
              </h3>
              <p className="content-text">
                High-efficiency and stable perovskite/heterojunction tandem
                solar cells are the focus of joint exploration in academia and
                industry. At present, the efficiency advantage of small-area
                tandem solar cells is already very clear, but in the process of
                commercialization, the tandem route still faces many challenges
                in aspects such as device structure design and interface
                regulation, perovskite material selection and optimization,
                device scaling, and stability.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="research-card">
        <div className="card-content">
          <div className="left-section">
            <div className="title-image-group">
              <div className="image-container">
                <img
                  src="/img/perovskite_photovoltaics.png"
                  alt="Perovskite Photovoltaics"
                  className="research-image"
                />
              </div>
            </div>
          </div>

          <div className="right-section">
            <div className="slide-overlay" />
            <div className="content-area">
              <div className="section-number">02</div>
              <h3 className="content-title">
                Large-area perovskite photovoltaics, tandem cells, and modules
              </h3>
              <p className="content-text">
                For practical applications, variations in ambient temperature
                limit the performance of PSCs, as perovskites undergo severe ion
                migration, phase transitions, and temperature-induced strain,
                leading to reduced PCE. Under variable temperatures, cycling
                requires perovskites to withstand alternating tensile and
                compressive stresses within the device structure. Therefore, the
                development of high-efficiency PSCs with thermal cycling
                stability is crucial for advancing PSC applications.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="research-card">
        <div className="card-content">
          <div className="left-section">
            <div className="title-image-group">
              <div className="image-container">
                <img
                  src="/img/novel_photoelectric_conversion_materials.png"
                  alt="Novel Photoelectric Materials"
                  className="research-image"
                />
              </div>
            </div>
          </div>

          <div className="right-section">
            <div className="slide-overlay" />
            <div className="content-area">
              <div className="section-number">03</div>
              <h3 className="content-title">
                Development of novel photoelectric conversion materials and
                functional applications
              </h3>
              <p className="content-text">
                The design and development of emerging photoelectric functional
                materials provide possibilities for further efficiency
                improvement, enhanced stability, cost optimization, and
                expansion of application scenarios. Artificial intelligence is
                becoming the core driving force of technological innovation in
                perovskite solar cells. Therefore, using artificial intelligence
                to screen semiconductor materials with high optoelectronic
                performance greatly reduces costs and accelerates the
                commercialization of perovskite cells.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}