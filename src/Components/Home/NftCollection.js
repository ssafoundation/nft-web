import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { topNftData } from "../../assets/data/topNftData";
import EthereumIcon from "../../assets/icons/EthereumIcon";
import VerifyBadgeIcon from "../../assets/icons/VerifyBadgeIcon";
import image1 from "../../assets/images/home/Nft-collection/image-1.png";
import sImage1 from "../../assets/images/home/Nft-collection/s-image-1.png";
import sImage2 from "../../assets/images/home/Nft-collection/s-image-2.png";
import sImage3 from "../../assets/images/home/Nft-collection/s-image-3.png";
import profile from "../../assets/images/home/hero/profile.png";

const NftCollection = () => {
  return (
    <div className="nft-collection-full-area-wrap">
      <Container>
        <div className="nft-collection-inner-container">
          <Row>
            <Col lg="4" className="mb-3">
              <div className="single-collection-card">
                <img src={image1} alt="" />
                <div className="single-nft-collection-card-bottom">
                  <div className="profile-left">
                    <img src={profile} alt="" />
                    <div className="nft-profile-info-right">
                      <h6>The Futr Abstr</h6>
                      <span></span>
                    </div>
                  </div>
                  <div className="profile-right-bid-info">
                    <span>Highest Bid</span>
                    <h6>
                      <EthereumIcon /> 0.25 ETH
                    </h6>
                  </div>
                </div>
              </div>
            </Col>
            <Col ld="8" className="mb-3">
              <Row>
                <Col md="6">
                  <div className="nft-collection-list">
                    <div className="nft-single-collection-list-item">
                      <div className="nft-s-c-l-i-left-image">
                        <img src={sImage1} alt="" />
                      </div>
                      <div className="nft-s-c-l-i-right-content">
                        <h4>The Futr Abstr</h4>
                        <div className="nft-s-c-l-i-right-profile-left">
                          <img src={profile} alt="" />
                          <div className="nft-s-c-l-i-right-profilebid-amount">
                            {" "}
                            <EthereumIcon /> 0.25 ETH
                          </div>
                          <span>1 of 8</span>
                        </div>
                        <button>Place a bid</button>
                      </div>
                    </div>{" "}
                    <div className="nft-single-collection-list-item">
                      <div className="nft-s-c-l-i-left-image">
                        <img src={sImage2} alt="" />
                      </div>
                      <div className="nft-s-c-l-i-right-content">
                        <h4>The Futr Abstr</h4>
                        <div className="nft-s-c-l-i-right-profile-left">
                          <img src={profile} alt="" />
                          <div className="nft-s-c-l-i-right-profilebid-amount">
                            {" "}
                            <EthereumIcon /> 0.25 ETH
                          </div>
                          <span>1 of 8</span>
                        </div>
                        <button>Place a bid</button>
                      </div>
                    </div>{" "}
                    <div className="nft-single-collection-list-item">
                      <div className="nft-s-c-l-i-left-image">
                        <img src={sImage3} alt="" />
                      </div>
                      <div className="nft-s-c-l-i-right-content">
                        <h4>The Futr Abstr</h4>
                        <div className="nft-s-c-l-i-right-profile-left">
                          <img src={profile} alt="" />
                          <div className="nft-s-c-l-i-right-profilebid-amount">
                            {" "}
                            <EthereumIcon /> 0.25 ETH
                          </div>
                          <span>1 of 8</span>
                        </div>
                        <button>Place a bid</button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="6">
                  <div className="top-collection-over">
                    <div className="top-collect-header">
                      <h3>Top Collections over </h3>
                      <h6>Last 7 days</h6>
                    </div>
                    <div className="top-collection-list">
                      {topNftData &&
                        topNftData?.map((item, idx) => (
                          <div className="top-collection-single-item">
                            <div className="t-c-ps-item-left">
                              <h4>1</h4>
                              <div className="t-c-ps-item-left-image-with-badge">
                                {item?.badge ? <VerifyBadgeIcon /> : null}
                                <img src={item?.image} alt="" />
                              </div>
                            </div>
                            <div className="t-c-ps-item-middle">
                              <h5>CryptoFunks</h5>
                              <h6>
                                <EthereumIcon /> 19,769.39
                              </h6>
                            </div>
                            <div className="t-c-ps-item-right">
                              <h4
                                style={
                                  item?.bidStatus === "up"
                                    ? { color: "#14C8B0" }
                                    : { color: "#FF002E" }
                                }
                              >
                                +26.52%
                              </h4>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default NftCollection;
