import React from "react";
import AmazingNft from "../../Components/Home/AmazingNft";
import Hero from "../../Components/Home/Hero";
import NftCollection from "../../Components/Home/NftCollection";
import Layout from "../../Components/Layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <AmazingNft />
      <NftCollection />
    </Layout>
  );
};

export default HomePage;
