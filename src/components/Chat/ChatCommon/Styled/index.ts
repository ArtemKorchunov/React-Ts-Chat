import styled from 'styled-components';
import { px } from '../../../../utils';
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

export const ColumnContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-around;
  font-size: 0.7rem;
  height: inherit;
  > div {
    text-overflow: ellipsis;
    overflow: hidden;
    display: flex;
    align-items: center;
  }
`;

interface ChatsIconProps {
  src?: string;
  children?: string;
  radius: number;
}

export const ChatsIcon = styled.div<ChatsIconProps>`
  background-image: ${props => props.src};
  height: ${props => px(props.radius)};
  width: ${props => px(props.radius)};
  border-radius: 50%;
  background-color: ${props => props.theme.colors.lightBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  min-width: ${props => px(props.radius)};
`;
