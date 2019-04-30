import React from 'react';
import styled from 'styled-components';

interface DialogContentProps {
  offset: number;
}

const DialogContent = styled.div<DialogContentProps>`
  height: ${props => `calc(100% - ${props.offset}px)`};
`;
type Props = {
  textareaHeight: number;
};

const Dialog: React.SFC<Props> = ({ textareaHeight }) => {
  return <DialogContent offset={textareaHeight + 52}>fasdfasd</DialogContent>;
};

export default Dialog;
