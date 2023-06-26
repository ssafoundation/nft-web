import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import profile from "../../assets/images/home/hero/profile2.png";
import image1 from "../../assets/images/home/hero/slide-1.png";
import image2 from "../../assets/images/home/hero/slide-2.png";
import image3 from "../../assets/images/home/hero/slide-3.png";
const CreateNftAccount = () => {
  return (
    <div className="create-nft-account-full-area">
      <Container>
        <div className="create-nft-account-inner-container">
          <Row>
            <Col lg="7">
              <div className="create-nft-account-left">
                <Row>
                  <Col lg="6">
                    <div className="c-n-a-l-profile-view-wrap">
                      <div className="single-profile-view">
                        <img src={image1} alt="" />
                        <div className="profile-image">
                          <img src={profile} alt="" />
                        </div>
                      </div>{" "}
                      <div className="single-profile-view">
                        <img src={image2} alt="" />
                        <div className="profile-image">
                          <img src={profile} alt="" />
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg="6">
                    <div className="c-n-a-r-profile-view-wrap">
                      <div className="single-profile-view">
                        <img src={image3} alt="" />
                        <div className="profile-image">
                          <img src={profile} alt="" />
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg="5" className="my-auto">
              <div className="create-nft-account-right">
                <h3>Create and sell your NFTs</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Facilisi ac phasellus placerat a pellentesque tellus sed
                  egestas. Et tristique dictum sit tristique sed non. Lacinia
                  lorem id consectetur pretium diam ut. Pellentesque eu sit
                  blandit fringilla risus faucibus.
                </p>
                <button className="nft-primary-btn">Sign Up Now</button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default CreateNftAccount;
