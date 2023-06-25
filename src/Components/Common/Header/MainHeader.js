import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchIcon from "./SearchIcon";
import logo from "./logo.svg";
const MainHeader = () => {
  return (
    <header className="header-main-area-wrap">
      <Container>
        <div className="header-inner-container">
          <div className="header-left-logo">
            <Link>
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="header-right-menu">
            <div className="header-right-menu-list-item">
              <ul>
                <li>
                  <Link to="/">Marketplace</Link>
                </li>
                <li>
                  <Link to="/">Resource</Link>
                </li>
                <li>
                  <Link to="/">About</Link>
                </li>
              </ul>
            </div>
            <div className="header-right-menu-search-upload">
              <div className="search-bar-area">
                <input
                  type="search"
                  name=""
                  id="search-field"
                  placeholder="Search"
                />
                <label htmlFor="search-field">
                  <SearchIcon />
                </label>
              </div>
              <div className="header-upload-btn">
                <Link className="nft-primary-btn">Upload</Link>
              </div>
              <div className="header-connect-wallet-btn">
                <Link className="nft-secondary-btn">Connect Wallet</Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default MainHeader;
