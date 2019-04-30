import React from 'react';
import styled from 'styled-components';

import { TopMenuWrap } from '../ChatCommon/Styled';

const HistoryViewWrap = styled.div`
  width: 100%;
`;

type Props = {
  topMenu: React.ReactNode;
};

const ChatHistoryView: React.SFC<Props> = ({ topMenu }) => {
  return (
    <HistoryViewWrap>
      <TopMenuWrap justify="space-between">{topMenu}</TopMenuWrap>
    </HistoryViewWrap>
  );
};

export default ChatHistoryView;
