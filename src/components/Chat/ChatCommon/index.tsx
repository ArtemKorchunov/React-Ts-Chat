import React from 'react';
import styled from 'styled-components';
import * as R from 'ramda';

import { IconStyled } from '../../Common/Styled';

const DblCheckStyledWrap = styled.div`
  position: absolute;
  display: flex;
  left: 0;
`;

const SecondIconStyled = styled(IconStyled)`
  position: absolute;
  left: 5px;
`;

export enum CHECK_STATES {
  REQUEST = 'REQUEST',
  SENT = 'SENT',
  USER_GOT = 'USER_GOT',
  USER_READ = 'USER_READ',
}

type Props = {
  checkState: CHECK_STATES;
};

type checkValues = {
  color: string;
  isDblCheck: boolean;
};

const getCheckState = R.cond<any, checkValues>([
  [
    R.equals(CHECK_STATES.REQUEST),
    R.always({ color: '#fff', isDblCheck: false }),
  ],
  [R.equals(CHECK_STATES.SENT), R.always({ color: '#fff', isDblCheck: true })],
  [
    R.equals(CHECK_STATES.USER_GOT),
    R.always({ color: 'green', isDblCheck: false }),
  ],
  [
    R.equals(CHECK_STATES.USER_READ),
    R.always({ color: 'green', isDblCheck: true }),
  ],
  [R.T, R.always({ color: '#fff', isDblCheck: false })],
]);

const DblCheckIcon: React.SFC<Props> = ({ checkState }) => {
  const { color, isDblCheck } = getCheckState(checkState);
  return (
    <DblCheckStyledWrap>
      <IconStyled type="check" color={color} />
      {isDblCheck && <SecondIconStyled type="check" color={color} />}
    </DblCheckStyledWrap>
  );
};

export { DblCheckIcon };
export { default as EmojiPicker } from './EmojiPicker/EmojiPicker';
