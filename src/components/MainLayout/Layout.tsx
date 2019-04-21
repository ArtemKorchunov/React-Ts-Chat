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
`;

const LayoutStyled = styled(Layout)`
  height: 65vh;
  overflow: hidden;
`

const SiderStyled = styled(Layout.Sider)`
  overflow-y: auto;
`;


const MainLayout: FunctionComponent<Props> = ({ children }) => {
  return (
    <Wrapper>
      <Section>
        <LayoutStyled>
          <SiderStyled>
            <Menu />
          </SiderStyled>
          <Layout.Content>{children}</Layout.Content>
        </LayoutStyled>
      </Section>
    </Wrapper>
  );
};

export default MainLayout;
