import React from 'react';
import { Input } from 'antd';
import styled from 'styled-components';

const Search = Input.Search;

const SearchStyled = styled(Search)`
  width: 100%;
`;

const SiderTopMenu = () => {
  console.log('SiderTopMenu render');
  return (
    <SearchStyled
      placeholder="input search text"
      onSearch={value => console.log(value)}
    />
  );
};

export default React.memo(SiderTopMenu);
