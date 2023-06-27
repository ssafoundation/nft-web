import React, { useState } from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { discoverNftData } from "../../assets/data/dicoverNftData";
import EthereumIcon from "../../assets/icons/EthereumIcon";
import profile from "../../assets/images/home/hero/profile.png";
const DiscoverNft = () => {
  const [selectCategory, setSelectCategory] = useState("");
  const allCategories = [];
  discoverNftData.forEach((item) => {
    allCategories.push(...item.category);
  });
  const uniqueCategories = [...new Set(allCategories)];
  const filterNftCategory =
    selectCategory === ""
      ? discoverNftData
      : discoverNftData?.filter((item) =>
          item.category.includes(selectCategory)
        );
  // const handleReverse = () => {
  //   filterNftCategory.reverse();
  // };

  return (
    <div className="discover-nft-full-area">
      <Container>
        <div className="discover-inner-container">
          <div className="discover-nft-header">
            <h3>Discover more NFTs</h3>
            <div className="discover-nft-filter-wrap">
              <div className="discover-filter-left">
                <ul>
                  <li
                    onClick={() => setSelectCategory("")}
                    className={selectCategory === "" ? "active" : ""}
                  >
                    All Select
                  </li>
                  {uniqueCategories?.map((menu, idx) => (
                    <li
                      className={selectCategory === menu ? "active" : ""}
                      onClick={() => setSelectCategory(menu)}
                      key={idx}
                    >
                      {menu}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="discover-sorting-right">
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">
                    <i className="bx bx-filter"></i> All Filters
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>A to Z</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
          <div className="discover-nft-items">
            <Row>
              {filterNftCategory.length &&
                filterNftCategory?.map((discover, idx) => (
                  <Col lg="3" className="mb-3" key={idx}>
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
