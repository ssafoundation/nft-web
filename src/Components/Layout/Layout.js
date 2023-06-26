import React from "react";
import MainFooter from "../Common/footer/MainFooter";
import MainHeader from "./../Common/Header/MainHeader";

const Layout = ({ children }) => {
  return (
    <div className="website-layout">
      <MainHeader />
      <>{children}</>
      <MainFooter />
    </div>
  );
};

export default Layout;
