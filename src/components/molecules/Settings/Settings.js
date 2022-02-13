import React, { useContext } from 'react';
import { AuthContext } from 'providers/AuthProvider';
import { StyledBox, StyledParagraph, StyledSettings } from './Settings.styles';

const Settings = () => {
  const { currentUser, handleSignOut } = useContext(AuthContext);

  return (
    <StyledSettings>
      <StyledParagraph>ACCOUNT</StyledParagraph>
      <StyledBox>{currentUser.email}</StyledBox>
      <StyledParagraph>THEME</StyledParagraph>
      <StyledBox>
        <label htmlFor="light">light</label>
        <input type="radio" id="light" name="drone" value="light" />
      </StyledBox>
      <StyledBox>
        <label htmlFor="dark">dark</label>
        <input
          type="radio"
          id="dark"
          name="drone"
          value="dark"
          defaultChecked
        />
      </StyledBox>
      <button onClick={handleSignOut}>Log Out</button>
    </StyledSettings>
  );
};

export default Settings;
