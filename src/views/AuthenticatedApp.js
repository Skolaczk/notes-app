import React from 'react';
import Navigation from 'components/molecules/Navigation/Navigation';
import SearchBar from 'components/molecules/SearchBar/SearchBar';
import NotesList from 'components/organisms/NotesList/NotesList';
import { StyledAuthenticatedApp } from './AuthenticatedApp.styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from 'components/organisms/Form/Form';
import SettingsModal from 'components/organisms/SettingsModal/SettingsModal';
import useModal from 'hooks/useModal';

const AuthenticatedApp = () => {
  const { isOpen, handleChangeModalState } = useModal();

  return (
    <StyledAuthenticatedApp>
      <Router>
        <Routes>
          <Route path="/note" element={<Form />} />
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
                />
              </>
            }
          />
        </Routes>
      </Router>
    </StyledAuthenticatedApp>
  );
};

export default AuthenticatedApp;
