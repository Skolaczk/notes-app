import React from 'react';
import Navigation from 'components/molecules/Navigation/Navigation';
import SearchBar from 'components/molecules/SearchBar/SearchBar';
import NotesList from 'components/organisms/NotesList/NotesList';
import {
  Box,
  Container,
  StyledAuthenticatedApp,
  Wrapper,
} from './AuthenticatedApp.styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from 'components/organisms/Form/Form';
import SettingsModal from 'components/organisms/SettingsModal/SettingsModal';
import useModal from 'hooks/useModal';
import useWarningModal from 'hooks/useWarningModal';
import WarningModal from 'components/molecules/WarningModal/WarningModal';

const AuthenticatedApp = ({ handleChangeModeState, modeState }) => {
  const { isOpen, handleChangeModalState } = useModal();
  const { isWarningOpen, handleCloseWarning, handleOpenWarning } =
    useWarningModal();
  const { matches } = window.matchMedia(`(min-width: 768px)`);

  return (
    <StyledAuthenticatedApp>
      <Router>
        {matches ? (
          <Wrapper>
            <Container>
              <Navigation handleChangeModalState={handleChangeModalState} />
              <SearchBar />
              <NotesList />
              <SettingsModal
                isOpen={isOpen}
                handleChangeModalState={handleChangeModalState}
                handleChangeModeState={handleChangeModeState}
                modeState={modeState}
              />
              <WarningModal
                isOpen={isWarningOpen}
                handleCloseWarning={handleCloseWarning}
              />
            </Container>
            <Box>
              <Form handleOpenWarning={handleOpenWarning} />
            </Box>
          </Wrapper>
        ) : (
          <Routes>
            <Route
              path="/note"
              element={
                <>
                  <Form handleOpenWarning={handleOpenWarning} />
                  <WarningModal
                    isOpen={isWarningOpen}
                    handleCloseWarning={handleCloseWarning}
                  />
                </>
              }
            />
            <Route
              path="/"
              element={
                <>
                  <Navigation handleChangeModalState={handleChangeModalState} />
                  <SearchBar />
                  <NotesList />
                  <SettingsModal
                    isOpen={isOpen}
                    handleChangeModalState={handleChangeModalState}
                    handleChangeModeState={handleChangeModeState}
                    modeState={modeState}
                  />
                </>
              }
            />
          </Routes>
        )}
      </Router>
    </StyledAuthenticatedApp>
  );
};

export default AuthenticatedApp;
