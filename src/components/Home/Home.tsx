import React from "react";
import styled from "styled-components";

import Slider from "../Common/Slider";

const SliderWrapper = styled.div`
  overflow: hidden;
  position: relative;
  margin: 0;
  padding: -20px;
  width: 100%;
  height: 100%;
`;
function Home() {
  return (
    <SliderWrapper>
      <Slider />
    </SliderWrapper>
  );
}

export default Home;
