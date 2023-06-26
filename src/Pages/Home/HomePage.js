import React from "react";
import DiscoverNft from "../../Components/Home/DiscoverNft";
import Layout from "../../Components/Layout/Layout";
import AmazingNft from "./../../Components/Home/AmazingNft";
import CreateNftAccount from "./../../Components/Home/CreateNftAccount";
import Hero from "./../../Components/Home/Hero";
import NftCollection from "./../../Components/Home/NftCollection";
import NftFeatureCollection from "./../../Components/Home/NftFeatureCollection";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <AmazingNft />
      <NftCollection />
      <NftFeatureCollection />
      <CreateNftAccount />
      <DiscoverNft />
    </Layout>
  );
};

export default HomePage;
