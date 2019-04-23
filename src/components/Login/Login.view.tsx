import React from 'react';

import { ContentWrapCenter } from '../Common/Styled';

type Props = {
  form: React.ReactNode
}

const LoginView: React.SFC<Props> = ({ form }) => {
  return (
    <ContentWrapCenter>
      {form}
    </ContentWrapCenter>
  )
}

export default LoginView;
