import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start footer-section">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none text-light d-lg-block">
            <span>Follor us on our social handles: </span>
          </div>
          <div>
            <a href="" className="me-4 text-light">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="me-4 text-light">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="me-4 text-light">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="me-4 text-light">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="me-4 text-light">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="me-4 text-light">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>
        <section>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6
                  className="text-uppercase d-flex footer-title fw-bold mb-2"
                  style={{ color: "#000" }}
                >
                  My
                  <div style={{ color: "rgb(255 255 255)" }}>Restro</div>
                </h6>
                <p className="footer-text-color">
                  Hey Guys This Is Best Place Here We are Expert in this Feild
                  So please just give me a change for your work
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase text-light fw-bold mb-2">
                  IMPORTANTS
                </h6>
                <p>
                  <a href="#!" className="footer-text-color">
                    Be a Partner
                  </a>
                </p>
                <p>
                  <a href="#!" className="footer-text-color">
                    Get your Website
                  </a>
                </p>
                <p>
                  <a href="#!" className="footer-text-color">
                    Check Our Websites
                  </a>
                </p>
                <p>
                  <a href="#!" className="footer-text-color">
                    Request For Demo
                  </a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase text-light fw-bold mb-2">
                  Useful links
                </h6>
                <p>
                  <a
                    href="upi://pay?pn=Mayank%20Gangwar&pa=8755507582@ybl&cu=INR"
                    className="footer-text-color"
                  >
                    About Us
                  </a>
                </p>
                <p>
                  <a href="#!" className="footer-text-color">
                    Contact Us
                  </a>
                </p>
                <p>
                  <a href="#!" className="footer-text-color">
                    {`Term & Condition`}
                  </a>
                </p>
                <p>
                  <a href="#!" className="footer-text-color">
                    Privacy Policy
                  </a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase text-light fw-bold mb-2">
                  Contact
                </h6>
                <p className="footer-text-color">
                  <i className="fas fa-home me-3"></i> Bhuta Bareilly U.P India
                  243503
                </p>
                <p className="footer-text-color">
                  <i className="fas fa-envelope me-3"></i>info@myrestro.co.in
                </p>
                <p className="footer-text-color">
                  <i className="fas fa-phone me-3"></i> +91 8755507582
                </p>
                <p className="footer-text-color">
                  <i className="fas fa-print me-3"></i> +91 7017550758
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="text-center footer-text-color p-4 border-top">
          © 2023 Copyright:
          <a
            className="footer-text-color fw-bold"
            href="https://restroweb.myrestro.co.in/"
          >
            restroweb.myrestro.co.in
          </a>
        </div>
      </footer>
    </>
  );
};
export default Footer;
