import React from 'react';
import styled from 'styled-components';

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

const ChatsIcon = styled.div`
  background-image: ${props => props.src};
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.lightBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  min-width: 40px;
`;

const ChatsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 10px;
  font-size: 0.6rem;
  height: inherit;
  width: 100%;
  > div {
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

const ChatsContentEnd = styled(ChatsContent)`
  align-items: flex-end;
  width: initial;
  padding-left: 5px;
`;

const ChatsListItem = () => {
  return (
    <ChatsListItemWrap>
      <ChatsIcon>{'E'}</ChatsIcon>
      <ChatsContent>
        <div>adsada</div>
        <div>fasdfasd</div>
      </ChatsContent>
      <ChatsContentEnd>
        <div>adsada</div>
        <div>fasdfasd</div>
      </ChatsContentEnd>
    </ChatsListItemWrap>
  );
};

export default ChatsListItem;
