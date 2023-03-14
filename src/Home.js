import React from "react";
import styled from "styled-components";
import HeroSection from "./Header/HeroSection";
const data = { name: "New Store" };
const Home = () => {
  return (
    // <Wrapper>
    <HeroSection myData={data} />
    // {/* </Wrapper> */}
  );
};
const Wrapper = styled.section`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bg};
`;

export default Home;
