"use client";

import Link from "next/link";
import "../students.css";

export default function MemberPage() {
  return (
    <>
      <div className="container-fluid container-team py-5">
        <div className="container pb-5">
          <div className="row g-5 align-items-center mb-5">
            <div className="col-md-6 wow fadeIn side-img-container" data-wow-delay="0.3s">
              <img className="side-img" src="/img/liguixiang.jpg" alt="Guixiang Li" />
            </div>
            <div className="col-md-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="display-6 mb-3">Dr. Guixiang Li</h1>
              <p className="mb-1">Professor</p>
              <p className="mb-5">Southeast University, Nanjing, China</p>
              <h3 className="mb-3">Biography</h3>
              <p className="mb-4">Guixiang Li, Young Distinguished Professor at Southeast University,
                Doctoral Supervisor, recipient of the National High-Level Young Talent Program,
                and Marie Skłodowska-Curie Fellow of the European Union.
                Received Ph.D. from the Helmholtz-Zentrum Berlin in Germany,
                followed by postdoctoral research at École Polytechnique Fédérale de Lausanne (EPFL)
                in Switzerland and Northwestern University in the United States. Research interests include optoelectronic
                materials,
                energy chemistry, and semiconductor physics,
                with a particular focus on application-oriented studies in photovoltaic devices.
              </p>
              <p className="mb-4">
                Over 50 papers published in international academic journals,
                including 25 as first or corresponding author in Science,
                Nature Reviews Materials, Advanced Materials, Angewandte Chemie,
                and other leading journals in recent years.
                Multiple papers selected as ESI Highly Cited and Hot Papers.
                Three invention patents granted. Serving as Youth Editorial Board Member of APL Photonics
                and Energy & Environmental Materials, and Editorial Board Member of Scientific Reports.
                Recipient of one Second Prize of the Provincial Natural Science Award.</p>
              <div style={{ marginTop: 16 }}>
                <Link href="/members" className="btn btn-light px-3">← Back to Members</Link>
              </div>
            </div>

          </div>

        </div>

      </div>

    </>
  );
}