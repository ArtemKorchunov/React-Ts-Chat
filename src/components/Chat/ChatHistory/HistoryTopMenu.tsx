import React from 'react';
import styled from 'styled-components';

import { ColumnContent } from '../ChatCommon/Styled';
import { HoverIconStyled } from '../../Common/Styled';
import { IconSize } from '../../../providers/ThemeProvider';

const TopMenuContent = styled(ColumnContent)`
  padding: 8px 0;
  max-width: 200px;
`;

const TopMenuContentEnd = styled(ColumnContent)`
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
  justify-content: space-around;
`;

const HistoryTopMenu = () => {
  return (
    <>
      <TopMenuContent>
        <div>Notes</div>
        <div>last seen 6 hours ago</div>
      </TopMenuContent>
      <TopMenuContentEnd>
        <HoverIconStyled type="search" size={IconSize.md} />
        <HoverIconStyled type="more" size={IconSize.md} />
      </TopMenuContentEnd>
    </>
  );
};

export default HistoryTopMenu;
