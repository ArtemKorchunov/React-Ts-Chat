import React from 'react';
import styled from 'styled-components';

import { HoverIconStyled, TextareaStyled } from '../../../Common/Styled';
import { IconSize } from '../../../../providers/ThemeProvider';

const DialogInput = () => {
  return (
    <>
      <HoverIconStyled type="paper-clip" size={IconSize.lg} />
      <TextareaStyled />
      <HoverIconStyled type="smile" size={IconSize.lg} />
      <HoverIconStyled type="right-square" size={IconSize.lg} />
    </>
  );
};

export default DialogInput;
