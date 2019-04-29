import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';

import { TopMenuWrap } from '../Common/Styled';

const SiderStyled = styled(Layout.Sider)`
  background: ${props => props.theme.colors.darkBlue};
  max-width: 220px !important;
  width: 100% !important;
  flex-basis: 220px !important;
`;

const ChatsListWrap = styled.div`
  height: calc(100% - 52px);
`;

type Props = {
  topMenu: React.ReactNode;
  chatsList: React.ReactNode;
};

const ChatSiderView: React.SFC<Props> = ({ topMenu, chatsList }) => {
  return (
    <SiderStyled>
      <TopMenuWrap>{topMenu}</TopMenuWrap>
      <ChatsListWrap>{chatsList}</ChatsListWrap>
    </SiderStyled>
  );
};

export default ChatSiderView;
