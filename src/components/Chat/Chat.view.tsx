import React from 'react';
import styled from 'styled-components';

const ChatWrap = styled.div`
  display: flex;
  height: inherit;
`;

type Props = {
  sider: React.ReactNode;
  history: React.ReactNode;
};

const ChatView: React.SFC<Props> = ({ sider, history }) => {
  return (
    <ChatWrap>
      {sider}
      {history}
    </ChatWrap>
  );
};

export default ChatView;
