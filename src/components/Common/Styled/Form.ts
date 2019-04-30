import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';
import { Form } from 'antd';

export const FormStyled = styled(Form)`
  width: 100%;
  max-width: 291px;
`;

export const TextareaStyled = styled(TextareaAutosize)`
  height: 100%;
  background-color: ${props => props.theme.colors.darkBlue};
  border: 0;
  padding: 6px;
  width: 100%;
  max-height: 201px;
  overflow: hidden;
`;
