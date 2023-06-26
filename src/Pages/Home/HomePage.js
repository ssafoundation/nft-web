import React from "react";
import AmazingNft from "../../Components/Home/AmazingNft";
import CreateNftAccount from "../../Components/Home/CreateNftAccount";
import Hero from "../../Components/Home/Hero";
import NftCollection from "../../Components/Home/NftCollection";
import NftFeatureCollection from "../../Components/Home/NftFeatureCollection";
import Layout from "../../Components/Layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <AmazingNft />
      <NftCollection />
      <NftFeatureCollection />
      <CreateNftAccount />
    </Layout>
  );
};

export default HomePage;
