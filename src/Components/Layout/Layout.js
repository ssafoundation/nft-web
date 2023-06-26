import React from "react";
import MainHeader from "./../Common/Header/MainHeader";

const Layout = ({ children }) => {
  return (
    <div className="website-layout">
      <MainHeader />
      <>{children}</>
    </div>
  );
};

export default Layout;
