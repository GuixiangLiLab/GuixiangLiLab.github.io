"use client";

import { useState, useEffect } from "react";
import "./page.css"

export default function HomePage() {
  // “Show More” 的展开状态
  const [showMore, setShowMore] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 页面资源加载完隐藏；若已完成则立刻隐藏
    const handleLoad = () => setLoading(false);

    if (document.readyState === "complete") {
      setLoading(false);
      return;
    }
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      {/* 只有 loading=true 才渲染遮罩 */}
      {loading && (
        <div
          id="spinner"
          className="bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
          aria-hidden="true"
          style={{ inset: 0, zIndex: 2000 }}
        >
          <div className="spinner-border text-primary" role="status" style={{ width: "3rem", height: "3rem" }} />
        </div>
      )}

      {/* Carousel Start（轮播） */}
      <div className="container-fluid header-carousel px-0 mb-5">
        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            {/* Slide 1 */}
            <div className="carousel-item">
              <div className="img-container fill-blur kenburns" style={{ ['--bg-url' as any]: "url('img/Perovskite_Phase_Transition_Temperature_Cycle.jpg')" }}>
                <img className="big-img" src="img/Perovskite_Phase_Transition_Temperature_Cycle.png" alt="Perovskite Phase Transition" />
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <div className="img-container fill-blur kenburns" style={{ ['--bg-url' as any]: "url('img/main_page/new_member.jpg')" }}>
                <img className="big-img" src="img/main_page/new_member.jpg" alt="New Member" />
              </div>
            </div>

            {/* Slide 3 (active) */}
            <div className="carousel-item active">
              <div className="img-container fill-blur kenburns" style={{ ['--bg-url' as any]: "url('img/SouthEastUniversity.png')" }}>
                <img className="big-img" src="img/SouthEastUniversity.png" alt="Southeast University" />
              </div>
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-end">
                    <div className="col-lg-7 caption-col">
                      <h1 className="display-1 text-end text-white mb-3"> Lab for Functional Optoelectronics</h1>
                      <p className="mb-4 text-end">
                        The research group focuses on the study of optoelectronic materials and their application in
                        devices. Our main research areas include the design and synthesis of functional materials,
                        preparation and photovoltaic applications of halide perovskites, development of novel semiconductor
                        materials and optoelectronic devices, as well as investigations into the related material chemistry
                        and device physics.
                      </p>
                      <a href="#" className="btn btn-primary py-3 px-5">Explore More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev" aria-label="Previous slide">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
          </button>

          <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next" aria-label="Next slide">
            <span className="carousel-control-next-icon" aria-hidden="true" />
          </button>
        </div>
      </div>
      {/* Carousel End */}

      {/* Profile Start */}
      <div className="container-fluid container-team py-3">
        <div className="container pb-1 profile-module">
          <div className="row g-5 align-items-center">
            <div className="col-md-6 wow fadeIn side-img-container" data-wow-delay="0.3s">
              <img className="side-img" src="img/liguixiang.jpg" alt="Dr. Guixiang Li" />
            </div>
            <div className="col-md-6 wow fadeIn profile-text" data-wow-delay="0.5s">
              <h1 className="display-6 mb-3">Dr. Guixiang Li</h1>
              <p className="mb-1 teacher-intro">Professor</p>
              <p className="mb-5 teacher-intro">Southeast University, Nanjing, China</p>
              <h3 className="mb-3">Biography</h3>
              <p className="mb-4 teacher-intro">
                Guixiang Li, Young Distinguished Professor at Southeast University, Doctoral Supervisor,
                recipient of the National High-Level Young Talent Program, and Marie Skłodowska-Curie Fellow of the European Union.
                Received Ph.D. from the Helmholtz-Zentrum Berlin in Germany, followed by postdoctoral research at
                École Polytechnique Fédérale de Lausanne (EPFL) in Switzerland and Northwestern University in the United States.
                Research interests include optoelectronic materials, energy chemistry, and semiconductor physics, with a particular
                focus on application-oriented studies in photovoltaic devices.
              </p>

              <button
                className="btn btn-toggle px-3 d-inline-flex align-items-center"
                id="toggle-btn"
                onClick={() => setShowMore(v => !v)}
                aria-expanded={showMore}
                aria-controls="more-text"
              >
                {showMore ? 'Show Less' : 'Show More'}
                <i className={`bi ms-2 ${showMore ? 'bi-chevron-double-left' : 'bi-chevron-double-right'}`} />
              </button>

              <p className={`mb-4 mt-3 ${showMore ? 'show' : ''} teacher-intro`} id="more-text">
                Over 50 papers published in international academic journals, including 25 as first or corresponding author in
                <em> Science</em>, <em> Nature Reviews Materials</em>, <em> Advanced Materials</em>, <em> Angewandte Chemie</em>, and other leading journals in recent years.
                Multiple papers selected as ESI Highly Cited and Hot Papers. Three invention patents granted. Serving as Youth Editorial Board Member of
                <em> APL Photonics</em> and <em> Energy & Environmental Materials</em>, and Editorial Board Member of <em> Scientific Reports</em>.
                Recipient of one Second Prize of the Provincial Natural Science Award.
              </p>
            </div>
          </div>
        </div>
        {/* Profile End */}

        {/* Research Start */}
        <div className="research-module">
          <div className="rm-wrap" role="region" aria-label="Research Directions">
            <div className="rm-header">
              <div className="pn-header">
                <h2><span>Research</span> Directions</h2>
              </div>
            </div>

            <div className="rm-grid">
              <a className="rm-card" href="/research">
                <div className="rm-image">
                  <img src="img/perovskite_solar_cells.png" alt="Perovskite solar cells" />
                </div>
                <div className="rm-text">
                  <h3>Degradation and stability mechanisms of perovskite solar cells</h3>
                </div>
              </a>

              <a className="rm-card" href="/research">
                <div className="rm-image">
                  <img src="img/perovskite_photovoltaics.png" alt="Perovskite photovoltaics" />
                </div>
                <div className="rm-text">
                  <h3>Large-area perovskite photovoltaics, tandem cells, and modules</h3>
                </div>
              </a>

              <a className="rm-card" href="/research">
                <div className="rm-image">
                  <img src="img/novel_photoelectric_conversion_materials.png" alt="Novel photoelectric materials" />
                </div>
                <div className="rm-text">
                  <h3>Development of novel photoelectric conversion materials and functional applications</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* Research End */}

        {/* Publications & News Start */}
        <div className="pub-news-module">
          <div className="pn-wrap pn-has-divider">
            <div className="pn-deco" />
            {/* Publications */}
            <div className="pn-col pn-card pn-col--pub">
              <div className="pn-header">
                <h2><span>Selected</span> Publications</h2>
              </div>
              <div className="pn-scroll">
                <ul className="pn-list">
                  <li>
                    <a href="https://www.science.org/doi/10.1126/science.add7331" target="_blank" rel="noreferrer">
                      <div className="pn-item">
                        <img src="img/Perovskite_Solar_Cell_Structure_and_Morphology.png" alt="Publication 1" />
                        <div className="pn-text">
                          <h3>Highly efficient p-i-n perovskite solar cells that endure temperature variations</h3>
                          <p><span className="bold">Li, G.</span>, Su, Z., Canil, L., Hughes, D., Aldamasy, M. H., ... Wang, L., Li, M., &amp; Abate, A.*. (2023). Science.</p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.nature.com/articles/s41578-025-00781-7" target="_blank" rel="noreferrer">
                      <div className="pn-item">
                        <img src="img/Perovskite_Phase_Transition_Temperature_Cycle.jpg" alt="Publication 2" />
                        <div className="pn-text">
                          <h3>Resilience pathways for halide perovskite photovoltaics under temperature cycling</h3>
                          <p>Wu, L., Hu, S., Yang, F., <span className="bold">Li, G.</span>, Wang, J., ... Pascual, J., Li, M., &amp; Abate, A.. (2025). Nature Reviews Materials.</p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="https://advanced.onlinelibrary.wiley.com/doi/10.1002/adma.202418766" target="_blank" rel="noreferrer">
                      <div className="pn-item">
                        <img src="img/High-efficiency_Sn-Pb.png" alt="Publication 3" />
                        <div className="pn-text">
                          <h3>High-efficiency Sn-Pb Perovskite Solar Cells via Nucleation and Crystallization Control</h3>
                          <p>Wang, A., Du, K., Fang, Z., Ren, Y., Zhou, C., ... Dong, X., <span className="bold">Li, G.</span>, Nazeeruddin, M. K., &amp; Ding, J.. (2025). Advanced Materials.</p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="https://advanced.onlinelibrary.wiley.com/doi/10.1002/adma.202407433" target="_blank" rel="noreferrer">
                      <div className="pn-item">
                        <img src="img/Inverted_Perovskite.png" alt="Publication 4" />
                        <div className="pn-text">
                          <h3>Inhibiting Interfacial Nonradiative Recombination in Inverted Perovskite Solar Cells with a Multifunctional Molecule</h3>
                          <p>Wu, J., Zhu, R., <span className="bold">Li, G.</span>, Zhang, Z., Pascual, J., ... Li, M.. (2024). Advanced Materials</p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <a href="/publications" className="pn-more">Read More</a>
            </div>

            {/* News */}
            <div className="pn-col pn-card pn-col--news">
              <div className="pn-header">
                <h2>News</h2>
              </div>
              <ul className="pn-list news-list">
                <li>
                  <a href="/news">
                    <span className="pn-date">2025-09-19</span>
                    <span className="pn-title">All members of the research group report in</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="pn-date">2025-09-01</span>
                    <span className="pn-title">news title 2</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="pn-date">2025-09-01</span>
                    <span className="pn-title">news title 2</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="pn-date">2025-09-01</span>
                    <span className="pn-title">news title 2</span>
                  </a>
                </li>
              </ul>
              <a href="/news" className="pn-more">Read More</a>
            </div>
          </div>
        </div>
        {/* Publications & News End */}
      </div>
    </>
  );
}