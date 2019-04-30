import { Icon } from 'antd';
import styled from 'styled-components';
import { IconSize } from '../../../providers/ThemeProvider';

export const ContentWrapCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

interface IconProps {
  color?: string;
  size?: IconSize;
}

export const IconStyled = styled(Icon)<IconProps>`
  color: ${props => (props.color ? props.color : '#fff')};
  font-size: ${props => (props.size ? props.size : props.theme.icons.sm)};
`;

export const HoverIconStyled = styled(IconStyled)`
  cursor: pointer;
  transition: all 0.3s;
  padding: 6px;
  &:hover {
    color: ${props => props.theme.colors.lightBlue};
  }
`;

export { FormStyled, TextareaStyled } from './Form';
