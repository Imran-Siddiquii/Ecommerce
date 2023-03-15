import React from "react";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import HeroSection from "./components/HeroSection";
import FeatureProduct from "./components/FeatureProducts";
const data = { name: "Wish Store" };
const Home = () => {
  return (
    <>
      <HeroSection myData={data} />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
