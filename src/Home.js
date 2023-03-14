import React from "react";
// import styled from "styled-components";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import HeroSection from "./Header/HeroSection";
const data = { name: "Wish Store" };
const Home = () => {
  // const Name = ContextApiHook();
  return (
    <>
      {/* // <Wrapper> */}
      {/* <h1>{Name}</h1> */}
      <HeroSection myData={data} />
      <Services />
      <Trusted />
      {/* // </Wrapper> */}
    </>
  );
};
// const Wrapper = styled.section`
//   height: 100vh;
//   background-color: ${({ theme }) => theme.colors.bg};
// `;

export default Home;
