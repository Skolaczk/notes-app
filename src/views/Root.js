import React, { useContext } from 'react';
import { AuthContext } from 'providers/AuthProvider';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { darkTheme, lightTheme } from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from 'store/index';
import useMode from 'hooks/useMode';

const Root = () => {
  const { currentUser } = useContext(AuthContext);
  const { modeState, handleChangeModeState } = useMode();

  return (
    <ThemeProvider theme={modeState ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Provider store={store}>
        {currentUser ? (
          <AuthenticatedApp
            handleChangeModeState={handleChangeModeState}
            modeState={modeState}
          />
        ) : (
          <UnauthenticatedApp />
        )}
      </Provider>
    </ThemeProvider>
  );
};

export default Root;
