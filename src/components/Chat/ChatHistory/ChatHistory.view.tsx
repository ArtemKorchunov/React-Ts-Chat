import React from 'react';
import styled from 'styled-components';

import { TopMenuWrap } from '../Common/Styled';

const HistoryViewWrap = styled.div`
  width: 100%;
`;

const ChatHistoryView: React.SFC<{}> = () => {
  return (
    <HistoryViewWrap>
      <TopMenuWrap justify="space-between">
        <div>dfsaf</div>
        <div>fasd</div>
      </TopMenuWrap>
    </HistoryViewWrap>
  );
};

export default ChatHistoryView;
