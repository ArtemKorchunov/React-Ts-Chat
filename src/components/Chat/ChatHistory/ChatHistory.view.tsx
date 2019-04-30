import React from 'react';
import styled from 'styled-components';

import { TopMenuWrap } from '../ChatCommon/Styled';

interface DialogContentProps {
  offset: number;
}

const DialogWrap = styled.div<DialogContentProps>`
  height: ${props => `calc(100% - ${props.offset + 52}px)`};
`;

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
  dialogOffset: number;
};

const ChatHistoryView: React.SFC<Props> = ({
  topMenu,
  dialog,
  dialogInput,
  dialogOffset,
}) => {
  return (
    <HistoryViewWrap>
      <TopMenuWrap justify="space-between">{topMenu}</TopMenuWrap>
      <DialogWrap offset={dialogOffset}>{dialog}</DialogWrap>
      <DialogInputWrap>{dialogInput}</DialogInputWrap>
    </HistoryViewWrap>
  );
};

export default ChatHistoryView;
