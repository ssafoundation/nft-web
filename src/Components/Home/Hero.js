import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { heroSlider } from "../../assets/data/heroSlider";
import EthereumIcon from "../../assets/icons/EthereumIcon";
import dotBg from "../../assets/images/home/hero/Dot.svg";
import sliderBadge from "../../assets/images/home/hero/slider-label.png";
const Hero = () => {
  return (
    <Container>
      <div className="hero-main-area-wrap">
        <Row>
          <Col lg="7" className="my-auto">
            <div className="hero-left-content">
              <h2>Discover, and collect Digital Art NFTs </h2>
              <p>
                Digital marketplace for crypto collectibles and non-fungible
                tokens (NFTs). Buy, Sell, and discover exclusive digital assets.
              </p>
              <div className="hero-left-bottom-statistics">
                <div className="dot-bg-image-hero">
                  <img src={dotBg} alt="" />
                </div>
                <Link to="/" className="nft-primary-btn">
                  Explore Now
                </Link>
                <div className="hero-statistics-wrap">
                  <div className="single-statistics">
                    <h3>
                      98k<i className="bx bx-plus"></i>
                    </h3>
                    <p>Artwork</p>
                  </div>
                  <div className="single-statistics">
                    <h3>
                      12k<i className="bx bx-plus"></i>
                    </h3>
                    <p>Auction</p>
                  </div>
                  <div className="single-statistics">
                    <h3>
                      15k<i className="bx bx-plus"></i>
                    </h3>
                    <p>Artist</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="5">
            <div className="hero-right-slider-wrap">
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
              >
                {heroSlider &&
                  heroSlider?.map((slide, idx) => (
                    <SwiperSlide>
                      <div
                        className="single-hero-slider-card"
                        style={{ backgroundImage: `url(${slide?.sliderBg})` }}
                      >
                        <div className="slider-header">
                          <h6>Abstr Gradient NFT</h6>
                          <div className="slider-card-profile">
                            <img src={slide?.profile} alt="" />
                            <p>Arkhan17</p>
                          </div>
                        </div>
                        <div className="slider-footer">
                          <div className="slider-footer-left">
                            <span>Current Bid</span>
                            <h3>
                              <EthereumIcon /> 0.25 ETH
                            </h3>
                          </div>
                          <div className="slider-footer-right">
                            <span>Ends in</span>
                            <h3>12h 43m 42s</h3>
                          </div>
                        </div>
                        <div className="slider-badge">
                          <img src={sliderBadge} alt="" />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Hero;
