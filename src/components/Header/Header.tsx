import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export default function Header() {
  return (
    <Header.Wrapper>
      <Header.Navigation>
        <Header.Section>
          <Header.List>
            <Header.ListItem>
              <Link to="/">Main</Link>
            </Header.ListItem>
            <Header.ListItem>
              <Link to="/">Chat</Link>
            </Header.ListItem>
          </Header.List>
        </Header.Section>
      </Header.Navigation>
    </Header.Wrapper>
  )
}


Header.Wrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 4;
  background: #fff;
`;


Header.Navigation = styled.div`
  display: flex;
  justify-content: center;
`;

Header.Section = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;
  ${breakpoint('md')`
    flex-direction: column;
    justify-content-center;
  `}
`;

Header.List = styled.ul`
  display: flex;
`;


Header.ListItem = styled.li`
  padding: 10px;
  border: 1px solid gray;
  &:first-child {
    border-radius: 5px 0 0 5px;
  }
  &:last-child {
    border-radius: 0 5px 5px 0;
  }
`;