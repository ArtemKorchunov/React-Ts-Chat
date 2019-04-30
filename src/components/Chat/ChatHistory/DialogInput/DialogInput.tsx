import React from 'react';
import styled from 'styled-components';

import { HoverIconStyled, TextareaStyled } from '../../../Common/Styled';
import { IconSize } from '../../../../providers/ThemeProvider';

type Props = {
  setTextareaHeight: (count: number) => number;
};
//TODO: Replace textarea styles with general and for current component
const DialogInput: React.SFC<Props> = ({ setTextareaHeight }) => {
  return (
    <>
      <HoverIconStyled type="paper-clip" size={IconSize.lg} />
      <TextareaStyled
        onHeightChange={(height: number) => setTextareaHeight(height)}
        maxRows={8}
      />
      <HoverIconStyled type="smile" size={IconSize.lg} />
      <HoverIconStyled type="right-square" size={IconSize.lg} />
    </>
  );
};

export default DialogInput;
