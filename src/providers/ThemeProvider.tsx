import React, { FunctionComponent } from 'react';
import {ThemeProvider} from 'styled-components';

const theme = {
  breakpoints: { 
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  },
  maxContentWidth : '1000px',
  borders         : {
    lightGray: 'rgba(34,36,38,.15)',
  },
  backgrounds     : {
    gray: '#f0f2f5',
  },
  colors          : {
    blue : '#425cbb',
  },
};

type Props = {
  children?: React.ReactChild
}
const Theme: FunctionComponent<Props> = ({ children }) =>  {
    return (
      <ThemeProvider theme={theme}>
       {children}
      </ThemeProvider>
    );
  }

export default Theme;
