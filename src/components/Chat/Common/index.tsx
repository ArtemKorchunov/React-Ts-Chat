import React from 'react';
import { Icon } from 'antd';
import styled from 'styled-components';
import * as R from 'ramda';

const DblCheckStyledWrap = styled.div`
  position: absolute;
  display: flex;
  left: 0;
`;

interface IconProps {
  color?: string;
}

const IconStyled = styled(Icon)<IconProps>`
  color: ${props => (props.color ? props.color : '#fff')};
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
    R.always({ color: 'green', isDblCheck: false }),
  ],
  [R.T, R.always({ color: 'green', isDblCheck: false })],
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
