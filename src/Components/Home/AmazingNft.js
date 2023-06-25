import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardTickIcon from "../../assets/icons/CardTickIcon";
import ChartSquareIcon from "../../assets/icons/ChartSquareIcon";

const AmazingNft = () => {
  return (
    <div className="amazing-nft-full-area">
      <Container>
        <div className="amazing-nft-inner-container">
          <Row>
            <Col lg="4">
              <div className="amazing-nft-left-title">
                <h2>The amazing NFT art of the world here</h2>
              </div>
            </Col>
            <Col lg="8">
              <Row>
                <Col lg="6">
                  <div className="amazing-nft-right-single-item">
                    <div className="amazing-nft-s-i-icon">
                      <CardTickIcon />
                    </div>
                    <div className="amazing-nft-s-i-content">
                      <h4>Fast Transaction</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam etiam viverra tellus imperdiet.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg="6">
                  <div className="amazing-nft-right-single-item">
                    <div className="amazing-nft-s-i-icon">
                      <ChartSquareIcon />
                    </div>
                    <div className="amazing-nft-s-i-content">
                      <h4>Growth Transaction</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam etiam viverra tellus imperdiet.
                      </p>
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

export default AmazingNft;
