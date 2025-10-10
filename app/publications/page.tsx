"use client";

import "./publication.css";

export default function PublicationsPage() {
  return (
    <>
      {/* Page Header */}
      <div className="container-fluid page-header py-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5 mt-4">
          <h1 className="display-2 text-white mb-3 animated slideInDown">Publications</h1>
        </div>
      </div>

      {/* Selected Publications */}
      <div className="container-fluid container-service py-5">
        <div className="container pt-5">
          <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 600 }}>
            <h1 className="display-6 mb-3">Selected Publications</h1>
            <p className="mb-5">
              See full publication list in{" "}
              <a
                className="scholar-link"
                href="https://scholar.google.com/citations?user=eaS3FCcAAAAJ&hl=en"
                target="_blank"
                rel="noreferrer"
              >
                Google Scholar <img src="/img/icon/graduation-cap.svg" alt="Scholar" />
              </a>
            </p>
          </div>

          <div className="article-box row g-4">
            {/* Item 1 */}
            <div className="article-item">
              <img
                className="article-img wow fadeInUp publication-img"
                src="/img/Perovskite_Solar_Cell_Structure_and_Morphology.png"
                alt="p-i-n perovskite solar cells"
              />
              <div className="col-lg-7 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="service-item">
                  <h5 className="mb-3">
                    Highly efficient p-i-n perovskite solar cells that endure temperature variations
                  </h5>
                  <p className="mb-4">
                    <span className="bold">Li, G.</span>, Su, Z., Canil, L., Hughes, D., Aldamasy, M. H., ... Wang, L.,
                    Li, M., &amp; Abate, A.*. (2023). Science.
                  </p>
                  <h6 className="mb-3">DOI: 10.1126/science.add7331.</h6>
                  <a
                    className="btn btn-light px-3"
                    href="https://www.science.org/doi/10.1126/science.add7331"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Read More<i className="bi bi-chevron-double-right ms-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="article-item">
              <img
                className="article-img wow fadeInUp"
                src="/img/Perovskite_Phase_Transition_Temperature_Cycle.jpg"
                alt="Resilience pathways"
              />
              <div className="col-lg-7 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="service-item">
                  <h5 className="mb-3">
                    Resilience pathways for halide perovskite photovoltaics under temperature cycling
                  </h5>
                  <p className="mb-4">
                    Wu, L., Hu, S., Yang, F., <span className="bold">Li, G.</span>, Wang, J., ... Pascual, J., Li, M.,
                    &amp; Abate, A.. (2025). Nature Reviews Materials.
                  </p>
                  <h6 className="mb-3">DOI:10.1038/s41578-025-00781-7.</h6>
                  <a
                    className="btn btn-light px-3"
                    href="https://www.nature.com/articles/s41578-025-00781-7"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Read More<i className="bi bi-chevron-double-right ms-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="article-item">
              <img
                className="article-img-3 wow fadeInUp"
                src="/img/High-efficiency_Sn-Pb.png"
                alt="Sn-Pb Perovskite Solar Cells"
              />
              <div className="col-lg-7 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="service-item">
                  <h5 className="mb-3">
                    High-efficiency Sn-Pb Perovskite Solar Cells via Nucleation and Crystallization Control
                  </h5>
                  <p className="mb-4">
                    Wang, A., Du, K., Fang, Z., Ren, Y., Zhou, C., ... Dong, X., <span className="bold">Li, G.</span>,
                    Nazeeruddin, M. K., &amp; Ding, J.. (2025). Advanced Materials.
                  </p>
                  <h6 className="mb-3">DOI:10.1002/adma.202418766</h6>
                  <a
                    className="btn btn-light px-3"
                    href="https://advanced.onlinelibrary.wiley.com/doi/10.1002/adma.202418766"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Read More<i className="bi bi-chevron-double-right ms-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Item 4 */}
            <div className="article-item">
              <img
                className="article-img wow fadeInUp"
                src="/img/Inverted_Perovskite.png"
                alt="Inverted Perovskite"
              />
              <div className="col-lg-7 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="service-item">
                  <h5 className="mb-3">
                    Inhibiting Interfacial Nonradiative Recombination in Inverted Perovskite Solar Cells with a
                    Multifunctional Molecule
                  </h5>
                  <p className="mb-4">
                    Wu, J., Zhu, R., <span className="bold">Li, G.</span>, Zhang, Z., Pascual, J., ... Li, M.. (2024).
                    Advanced Materials
                  </p>
                  <h6 className="mb-3">DOI:10.1002/adma.202407433.</h6>
                  <a
                    className="btn btn-light px-3"
                    href="https://advanced.onlinelibrary.wiley.com/doi/10.1002/adma.202407433"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Read More<i className="bi bi-chevron-double-right ms-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Item 5 */}
            <div className="article-item">
              <img
                className="article-img wow fadeInUp"
                src="/img/Heat‐Triggered_Dynamic.png"
                alt="Inverted Perovskite"
              />
              <div className="col-lg-7 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="service-item">
                  <h5 className="mb-3">
                    Heat‐Triggered Dynamic Self‐Healing Framework for Variable‐Temperature Stable Perovskite Solar Cells
                  </h5>
                  <p className="mb-4">
                    Y Tang, Z Zhang, <span className="bold">G Li</span>, C Qin, Z Su, H Liu, F Yang, Y Yang, MH Aldamasy, ...
                    (2025).Advanced Materials.
                  </p>
                  <h6 className="mb-3">DOI:10.1002/adma.202420378</h6>
                  <a
                    className="btn btn-light px-3"
                    href="https://advanced.onlinelibrary.wiley.com/doi/abs/10.1002/adma.202420378"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Read More<i className="bi bi-chevron-double-right ms-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All Publications (Year groups) */}
      <section className="pubs-module" aria-label="All Publications">
        <h2 className="pubs-title">All Publications</h2>

        <div className="pubs-group">
          <div className="pubs-year">2025</div>
          <ul className="pubs-list">
            <li className="pubs-item">
              <div className="pubs-title-line">
                <a
                  href="https://www.nature.com/articles/s41578-025-00781-7"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resilience pathways for halide perovskite photovoltaics under temperature cycling
                </a>
              </div>
              <p className="pubs-meta">
                Wu, L., Hu, S., Yang, F., Li, G., Wang, J., ... Pascual, J., Li, M., &amp; Abate, A.. (2025). Nature
                Reviews Materials.
              </p>
            </li>

            <li className="pubs-item">
              <div className="pubs-title-line">
                <a
                  href="https://advanced.onlinelibrary.wiley.com/doi/10.1002/adma.202418766"
                  target="_blank"
                  rel="noreferrer"
                >
                  High-efficiency Sn-Pb Perovskite Solar Cells via Nucleation and Crystallization Control
                </a>
              </div>
              <p className="pubs-meta">
                Wang, A., Du, K., Fang, Z., Ren, Y., Zhou, C., ... Dong, X., Li, G., Nazeeruddin, M. K., &amp; Ding,
                J.. (2025). Advanced Materials.
              </p>
            </li>

            <li className="pubs-item">
              <div className="pubs-title-line">
                <a
                  href="https://advanced.onlinelibrary.wiley.com/doi/abs/10.1002/adma.202420378"
                  target="_blank"
                  rel="noreferrer"
                >
                  Heat‐Triggered Dynamic Self‐Healing Framework for Variable‐Temperature Stable Perovskite Solar Cells
                </a>
              </div>
              <p className="pubs-meta">
                Y Tang, Z Zhang, <span className="bold">G Li</span>, C Qin, Z Su, H Liu, F Yang, Y Yang, MH Aldamasy, ...
                    (2025).Advanced Materials.
              </p>
            </li>
          </ul>
        </div>

        <div className="pubs-group">
          <div className="pubs-year">2024</div>
          <ul className="pubs-list">
            <li className="pubs-item">
              <div className="pubs-title-line">
                <a
                  href="https://advanced.onlinelibrary.wiley.com/doi/10.1002/adma.202407433"
                  target="_blank"
                  rel="noreferrer"
                >
                  Inhibiting Interfacial Nonradiative Recombination in Inverted Perovskite Solar Cells with a
                  Multifunctional Molecule
                </a>
              </div>
              <p className="pubs-meta">
                Wu, J., Zhu, R., Li, G., Zhang, Z., Pascual, J., ... Li, M.. (2024). Advanced Materials
              </p>
            </li>
          </ul>
        </div>

        <div className="pubs-group">
          <div className="pubs-year">2023</div>
          <ul className="pubs-list">
            <li className="pubs-item">
              <div className="pubs-title-line">
                <a
                  href="https://www.science.org/doi/10.1126/science.add7331"
                  target="_blank"
                  rel="noreferrer"
                >
                  Highly efficient p-i-n perovskite solar cells that endure temperature variations
                </a>
              </div>
              <p className="pubs-meta">
                Li, G., Su, Z., Canil, L., Hughes, D., Aldamasy, M. H., ... Wang, L., Li, M., &amp; Abate, A.*. (2023).
                Science.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
