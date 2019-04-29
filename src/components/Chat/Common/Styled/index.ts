import styled from 'styled-components';

interface TopMenuWrapProps {
  justify?: string;
}

export const TopMenuWrap = styled.div<TopMenuWrapProps>`
  max-height: 52px;
  height: 100%;
  background-color: ${props => props.theme.colors.darkBlue};
  color: #fff;
  display: flex;
  justify-content: ${props => (props.justify ? props.justify : 'center')};
  align-items: center;
  padding: 0 20px;
`;
