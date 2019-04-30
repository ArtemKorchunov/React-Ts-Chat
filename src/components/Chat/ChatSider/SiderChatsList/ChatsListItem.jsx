import React from 'react';
import styled from 'styled-components';
import { Badge } from 'antd';
import { DateTime } from 'luxon';

import { DblCheckIcon } from '../../ChatCommon';
import { ColumnContent, ChatsIcon } from '../../ChatCommon/Styled';

const ChatsListItemWrap = styled.div`
  display: flex;
  padding: 6px;
  cursor: pointer;
  transition: all 0.3s;
  color: #fff;
  &:hover {
    background-color: ${props => props.theme.colors.blue};
  }
`;

const ListItemContent = styled(ColumnContent)`
  padding-left: 10px;
  width: calc(100% - 95px);
`;

const ListItemContentEnd = styled(ListItemContent)`
  align-items: flex-end;
  width: initial;
  padding-left: 5px;
`;

const TextPrimary = styled.span`
  color: ${props => props.theme.colors.lightBlue};
  padding-right: 5px;
`;

const badgeStyle = { backgroundColor: '#1890ff', boxShadow: 'initial' };

const ChatsListItem = () => {
  return (
    <ChatsListItemWrap>
      <ChatsIcon radius={40}>{'E'}</ChatsIcon>
      <ListItemContent>
        <div>Nikita</div>
        <div>
          <TextPrimary>You:</TextPrimary>Heloo dude
        </div>
      </ListItemContent>
      <ListItemContentEnd>
        <div>
          <DblCheckIcon />
          {DateTime.local().monthShort}
        </div>
        <div>
          <Badge count={109} style={badgeStyle} />
        </div>
      </ListItemContentEnd>
    </ChatsListItemWrap>
  );
};

export default ChatsListItem;
