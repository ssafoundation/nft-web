import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const MainFooter = () => {
  return (
    <div className="main-footer-main-area-wrap">
      <Container>
        <div className="main-footer-inner-container">
          <Row>
            <Col lg="4" className="mb-3">
              <div className="footer-single-item pe-5">
                <h3>NFters </h3>
                <p>
                  The world’s first and largest digital marketplace for crypto
                  collectibles and non-fungible tokens (NFTs). Buy, sell, and
                  discover exclusive digital items.
                </p>
                <div className="footer-social-link">
                  <a href="!#">
                    <i className="bx bxl-facebook-circle"></i>
                  </a>
                  <a href="!#">
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a href="!#">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </div>
              </div>
            </Col>
            <Col lg="4" className="mb-3">
              <Row>
                <Col lg="6" className="mb-3">
                  <div className="footer-single-item">
                    <h4>Market Place</h4>
                    <ul>
                      <li>
                        <a href="!#">All NFTs</a>
                      </li>
                      <li>
                        <a href="!#">New</a>
                      </li>
                      <li>
                        <a href="!#">Art</a>
                      </li>
                      <li>
                        <a href="!#">Sports</a>
                      </li>
                      <li>
                        <a href="!#">Utility</a>
                      </li>
                      <li>
                        <a href="!#">Music</a>
                      </li>
                      <li>
                        <a href="!#">Domain Name</a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col lg="6" className="mb-3">
                  <div className="footer-single-item">
                    <h4>My Account</h4>
                    <ul>
                      <li>
                        <a href="!#">Profile</a>
                      </li>
                      <li>
                        <a href="!#">Favorite</a>
                      </li>
                      <li>
                        <a href="!#">My Collections</a>
                      </li>

                      <li>
                        <a href="!#">Settings</a>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg="4" className="mb-3">
              <div className="footer-single-item pe-5">
                <h4>Stay in the loop</h4>
                <p>
                  The world’s first and largest digital marketplace for crypto
                  collectibles and non-fungible tokens (NFTs). Buy, sell, and
                  discover exclusive digital items.
                </p>
                <div className="footer-subscriber">
                  <input type="email" name="" id="subscribe" />
                  <label htmlFor="subscribe">Subscibe Now</label>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <div className="footer-copyright-area">
        <p>Copyright © 2022 Avi Yansah</p>
      </div>
    </div>
  );
};

export default MainFooter;
