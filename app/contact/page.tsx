"use client";

import Link from "next/link";
import "./contact.css";

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <div className="container-fluid page-header py-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5 mt-4">
          <h1 className="display-2 text-white mb-3 animated slideInDown">Contact</h1>
        </div>
      </div>

      {/* Contact Content */}
      <div className="container-fluid py-5">
        <div className="container">
          {/* Intro paragraph */}
          <div className="mx-auto wow fadeInUp contact-content" data-wow-delay="0.1s">
            <p className="mb-5 detail-item">
              The research group is committed to providing students with a harmonious,
              warm, and positive academic and research environment. A reward system is implemented for
              students who demonstrate outstanding performance. Each year, the group plans to recruit
              four master's students, either in the academic track of Optical Engineering or the
              professional track of Optoelectronic Information Engineering. Undergraduate and master's
              students who have a strong interest in this field are also welcome to join the group for
              academic exchange.
            </p>
          </div>

          {/* Requirements */}
          <div className="row">
            <h3 className="display-9 mb-3">Requirements:</h3>
            <ul className="requirement-list">
              <li className="list-item">
                Diligent, hardworking, practical, and capable, with a strong interest in scientific research, a strong sense
                of motivation, and a good team spirit.
              </li>
              <li className="list-item">
                Able to follow the supervisor’s guidance and complete all assigned tasks conscientiously.
              </li>
              <li className="list-item">
                CET-4 or above in English is required; CET-6 is preferred.
              </li>
            </ul>

            {/* Contact email */}
            <p className="contact-info">
              Students who are interested are welcome to send their resume to:
              <a href="mailto:guixiang.li@seu.edu.cn">guixiang.li@seu.edu.cn</a> (Contact: Prof. Li).
            </p>

            {/* Map */}
            <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.5s">
              <img src="/img/contact-map.png" alt="Map" className="contact-map" />
            </div>
          </div>

          <hr />

          {/* Info blocks */}
          <div className="row contact-info position-relative g-0 mb-5">
            <div className="col-lg-6">
              <a href="#" className="d-flex justify-content-lg-center bg-primary p-4">
                <div className="icon-box-light flex-shrink-0">
                  <i className="bi bi-geo-alt text-dark"></i>
                </div>
                <div className="ms-3">
                  <h5 className="text-white">Position</h5>
                  <h2 className="text-white mb-0">Southeast University</h2>
                </div>
              </a>
            </div>
            <div className="col-lg-6">
              <a href="mailto:guixiang.li@seu.edu.cn" className="d-flex justify-content-lg-center bg-primary p-4">
                <div className="icon-box-light flex-shrink-0">
                  <i className="bi bi-envelope text-dark"></i>
                </div>
                <div className="ms-3">
                  <h5 className="text-white">Mail Us</h5>
                  <h2 className="text-white mb-0">guixiang.li@seu.edu.cn</h2>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
