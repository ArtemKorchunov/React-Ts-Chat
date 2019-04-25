import React from 'react';
import styled from 'styled-components';

const ChatWrap = styled.div`
  display: flex;
  height: inherit;
`;

type Props = {
  sider: React.ReactNode;
};

const ChatView: React.SFC<Props> = ({ sider }) => {
  return <ChatWrap>{sider}</ChatWrap>;
};

export default ChatView;
