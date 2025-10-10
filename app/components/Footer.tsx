export default function Footer() {
  return (
    <>
      {/* Footer Start */}
      <div className="container-fluid footer position-relative bg-dark text-white-50 py-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
          <div className="row g-5 py-5">
            <div className="col-lg-6 pe-lg-5">
              <a href="/" className="navbar-brand">
                <h1 className="h1 text-primary mb-0">
                  Guixiang Li<span className="text-white">Laboratory</span>
                </h1>
              </a>
              <p className="fs-5 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue, iaculis
                id elit eget, ultrices pulvinar tortor.
              </p>
              <p><i className="fa fa-map-marker-alt me-2" />Southeast University, Nanjing, China</p>
              <p><i className="fa fa-envelope me-2" />guixiang.li@seu.edu.cn</p>
            </div>
            <div className="col-lg-6 ps-lg-5">
              <div className="row g-5">
                <div className="col-sm-6">
                  <h4 className="text-light mb-4">Quick Links</h4>
                  <a className="btn btn-link" href="">About Us</a>
                  <a className="btn btn-link" href="">Contact Us</a>
                  <a className="btn btn-link" href="">Our Services</a>
                  <a className="btn btn-link" href="">Terms & Condition</a>
                  <a className="btn btn-link" href="">Support</a>
                </div>
                <div className="col-sm-6">
                  <h4 className="text-light mb-4">Popular Links</h4>
                  <a className="btn btn-link" href="">About Us</a>
                  <a className="btn btn-link" href="">Contact Us</a>
                  <a className="btn btn-link" href="">Our Services</a>
                  <a className="btn btn-link" href="">Terms & Condition</a>
                  <a className="btn btn-link" href="">Support</a>
                </div>
                <div className="col-sm-12">
                  <h4 className="text-light mb-4">Newsletter</h4>
                  <div className="w-100">
                    <div className="input-group">
                      <input type="text" className="form-control border-0 py-3 px-4" style={{ background: "rgba(255,255,255,.1)" }} placeholder="Your Email Address" />
                      <button className="btn btn-primary px-4">Sign Up</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{/* Footer End */}

      {/* Copyright Start */}
      <div className="container-fluid copyright bg-dark text-white-50 py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-0">&copy; <a href="#">Your Site Name</a>. All Rights Reserved.</p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="mb-0">
                Designed by <a href="https://htmlcodex.com">HTML Codex</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright End */}

      {/* Back to Top */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top">
        <i className="bi bi-arrow-up" />
      </a>
    </>
  );
}