import React from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import profile from "../../assets/images/home/hero/profile.png";
import image from "../../assets/images/home/hero/slide-1.png";
const DiscoverNft = () => {
  return (
    <div className="discover-nft-full-area">
      <Container>
        <div className="discover-inner-container">
          <div className="discover-nft-header">
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
            <div className="discover-nft-filter-wrap">
              <div className="discover-filter-left">
                <ul>
                  <li>All Select</li>
                  <li>Select 1</li>
                  <li>Select 2</li>
                  <li>Select 3</li>
                  <li>Select 4</li>
                  <li>Select 5</li>
                </ul>
              </div>
              <div className="discover-sorting-right">
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">
                    <i class="bx bx-filter"></i> All Filters
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
          <div className="discover-nft-items">
            <Row>
              <Col lg="3">
                <div className="single-discover-item">
                  <div className="discover-image">
                    <img src={image} alt="" />
                  </div>
                  <div className="discover-content-bottom">
                    <div className="discover-bid-profile">
                      <img src={profile} alt="" />
                    </div>
                    <div className="discover-bid-info-top">
                      <h4>lorem</h4>
                      <div className="discover-bid-amount-wrap">
                        <span className="discover-bid-amount">0.25 ETH</span>
                        <span className="discover-bid-count">1 of 321</span>
                      </div>
                    </div>
                    <div className="discover-bid-info-bottom">
                      <div className="discover-bid-info-wrap">
                        <span className="discover-bid-info">
                          3h 50m 2s left
                        </span>
                        <span className="discover-bid-place">Place a bid</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DiscoverNft;
