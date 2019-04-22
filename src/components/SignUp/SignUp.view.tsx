import React from 'react'
import styled from 'styled-components';

const SignUpViewWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

type Props = {
  form: React.ReactNode
}

const SignUpView: React.SFC<Props> = ({ form }) => {
  return (
    <SignUpViewWrap>
      {form}
    </SignUpViewWrap>
  )
}

export default SignUpView;
