import React from 'react';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { darkTheme } from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import AuthProvider from './AuthProvider';

const AppProvider = ({ children }) => (
  <ThemeProvider theme={darkTheme}>
    <GlobalStyle />
    <AuthProvider>{children}</AuthProvider>
  </ThemeProvider>
);

export default AppProvider;
