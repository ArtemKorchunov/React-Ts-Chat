import React from 'react';
import { Picker, CategoryName } from 'emoji-mart';

import { HoverIconStyled } from '../../../Common/Styled';
import { IconSize } from '../../../../providers/ThemeProvider';

import './EmojiPicker.css';

const pickerStyles: React.CSSProperties = {
  position: 'absolute',
  bottom: '30px',
  right: '20px',
  height: '182px',
  display: 'none',
};

interface Props {}

const EmojiPicker: React.SFC<Props> = () => {
  return (
    <>
      <HoverIconStyled type="smile" size={IconSize.lg} className="emoji-icon" />
      <Picker
        set="emojione"
        perLine={7}
        showPreview={false}
        emojiSize={20}
        exclude={['objects', 'symbols', 'flags', 'custom'] as CategoryName[]}
        style={pickerStyles}
      />
    </>
  );
};

export default EmojiPicker;
