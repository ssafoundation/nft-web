import React from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { discoverNftData } from "../../assets/data/dicoverNftData";
import EthereumIcon from "../../assets/icons/EthereumIcon";
import profile from "../../assets/images/home/hero/profile.png";
const DiscoverNft = () => {
  const allCategories = [];
  discoverNftData.forEach((item) => {
    allCategories.push(...item.category);
  });

  const uniqueCategories = [...new Set(allCategories)];

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
                  {uniqueCategories?.map((menu, idx) => (
                    <li>{menu}</li>
                  ))}
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
              {discoverNftData &&
                discoverNftData?.map((discover, idx) => (
                  <Col lg="3" className="mb-3">
                    <div className="single-discover-item">
                      <div className="discover-image">
                        <img src={discover?.featureImage} alt="" />
                      </div>
                      <div className="discover-content-bottom">
                        <div className="discover-bid-profile">
                          <img src={profile} alt="" />
                          <img src={profile} alt="" />
                          <img src={profile} alt="" />
                          <img src={profile} alt="" />
                        </div>
                        <div className="discover-bid-info-top">
                          <h4>{discover?.title}</h4>
                          <div className="discover-bid-amount-wrap">
                            <span className="discover-bid-amount">
                              <EthereumIcon /> 0.25 ETH
                            </span>
                            <span className="discover-bid-count">1 of 321</span>
                          </div>
                        </div>
                        <div className="discover-bid-info-bottom">
                          <div className="discover-bid-info-wrap">
                            <span className="discover-bid-info">
                              3h 50m 2s left
                            </span>
                            <span className="discover-bid-place">
                              Place a bid
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
            </Row>
            <div className="more-nft-data-show">
              <Link to="/" className="nft-secondary-btn">
                More NFTs
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DiscoverNft;
