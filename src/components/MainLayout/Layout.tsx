import React, { FunctionComponent } from "react";
import { Layout } from "antd";

import Menu from "./Menu";
import styled from "styled-components";

type Props = {
  children?: React.ReactChild;
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => props.theme.backgrounds.gray};
`;

const Section = styled.div`
  width: 100%;
  max-width: ${props => props.theme.maxContentWidth};
  box-shadow: 6px 8px 20px 0px rgba(13, 34, 64, 0.168);
`;

const LayoutStyled = styled(Layout)`
  height: 65vh;
  overflow: hidden;
`
const ContentStyled = styled(Layout.Content)`
  background-color: ${props => props.theme.backgrounds.white};
  padding: ${props => props.theme.paddings.lg};
  overflow: hidden;
`;

const MainLayout: FunctionComponent<Props> = ({ children }) => {
  return (
    <Wrapper>
      <Section>
        <LayoutStyled>
          <Menu />
          <ContentStyled>{children}</ContentStyled>
        </LayoutStyled>
      </Section>
    </Wrapper>
  );
};

export default MainLayout;
