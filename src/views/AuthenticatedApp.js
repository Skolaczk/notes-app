import React from 'react';
import Navigation from 'components/molecules/Navigation/Navigation';
import SearchBar from 'components/molecules/SearchBar/SearchBar';
import NotesList from 'components/organisms/NotesList/NotesList';
import { StyledAuthenticatedApp } from './AuthenticatedApp.styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const AuthenticatedApp = () => {
  return (
    <StyledAuthenticatedApp>
      <Router>
        <Routes>
          <Route path="/note" element={<h1>hello</h1>} />
          <Route
            path="/"
            element={
              <>
                <Navigation />
                <SearchBar />
                <NotesList />
              </>
            }
          />
        </Routes>
      </Router>
    </StyledAuthenticatedApp>
  );
};

export default AuthenticatedApp;
