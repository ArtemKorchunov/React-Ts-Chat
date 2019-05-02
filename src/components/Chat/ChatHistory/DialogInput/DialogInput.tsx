import React from 'react';

import { HoverIconStyled, TextareaStyled } from '../../../Common/Styled';
import { EmojiPicker } from '../../ChatCommon';
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
        onHeightChange={height => {
          setTextareaHeight(height);
        }}
        maxRows={8}
      />
      <EmojiPicker />
      <HoverIconStyled type="right-square" size={IconSize.lg} />
    </>
  );
};

export default React.memo(DialogInput);
