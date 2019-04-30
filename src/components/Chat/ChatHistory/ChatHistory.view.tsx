import React from 'react';
import styled from 'styled-components';

import { TopMenuWrap } from '../ChatCommon/Styled';

const HistoryViewWrap = styled.div`
  width: 100%;
  position: relative;
`;

const DialogInputWrap = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.darkBlue};
  color: #fff;
  display: flex;
  align-items: flex-end;
`;

type Props = {
  topMenu: React.ReactNode;
  dialog: React.ReactNode;
  dialogInput: React.ReactNode;
};

const ChatHistoryView: React.SFC<Props> = ({
  topMenu,
  dialog,
  dialogInput,
}) => {
  return (
    <HistoryViewWrap>
      <TopMenuWrap justify="space-between">{topMenu}</TopMenuWrap>
      {dialog}
      <DialogInputWrap>{dialogInput}</DialogInputWrap>
    </HistoryViewWrap>
  );
};

export default ChatHistoryView;
