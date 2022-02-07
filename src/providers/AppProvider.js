import React from 'react';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { darkTheme } from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from 'store/index';
import AuthProvider from './AuthProvider';

const AppProvider = ({ children }) => (
  <ThemeProvider theme={darkTheme}>
    <GlobalStyle />
    <AuthProvider>
      <Provider store={store}>{children}</Provider>
    </AuthProvider>
  </ThemeProvider>
);

export default AppProvider;
