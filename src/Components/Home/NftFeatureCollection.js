import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { nftFeatureCollectionData } from "../../assets/data/nftFeatureCollectionData";

const NftFeatureCollection = () => {
  return (
    <div className="nft-feature-collection">
      <Container>
        <div className="nft-feature-collection-inner-container">
          <div className="nft-feature-collection-title">
            <h3>Collection Featured NFTs</h3>
          </div>
          <Row>
            {nftFeatureCollectionData &&
              nftFeatureCollectionData?.map((item, idx) => (
                <Col lg="4">
                  <div className="nft-feature-single-card">
                    <div className="nft-feature-image-wrap">
                      <div className="feature-image">
                        <img src={item?.featureImage} alt="" />
                      </div>
                      <div className="feature-image-list">
                        {console.log(item?.otherImages)}
                        <ul>
                          {item?.otherImages?.map((image, i) => (
                            <li>
                              <img src={image?.image} alt="" />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="nft-feature-card-profile">
                      <h3>{item?.collectionName}</h3>
                      <div className="nft-feature-card-profile-bottom">
                        <span>
                          <img src={item?.authorPic} alt="" />
                          by {item?.author}{" "}
                        </span>
                        <div className="nft-profile-item-info">
                          <p>Total 54 Items</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default NftFeatureCollection;
