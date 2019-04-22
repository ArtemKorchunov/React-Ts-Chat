import React from 'react'
import styled from 'styled-components';

const LoginViewWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

type Props = {
  form: React.ReactNode
}

const LoginView: React.SFC<Props> = () => {
  return (
    <LoginViewWrap>
      dddd
    </LoginViewWrap>
  )
}

export default LoginView;
