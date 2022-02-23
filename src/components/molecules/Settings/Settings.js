import React, { useContext } from 'react';
import { AuthContext } from 'providers/AuthProvider';
import {
  StyledBox,
  StyledBoxImage,
  StyledButtonWrapper,
  StyledInfoParagraph,
  StyledParagraph,
  StyledSettings,
} from './Settings.styles';
import { useDispatch } from 'react-redux';
import { removeAllNotes } from 'store/actionCreators';

const Settings = ({ handleChangeModeState, modeState }) => {
  const {
    currentUser: { displayName, photoURL, email, reloadUserInfo },
    handleSignOut,
  } = useContext(AuthContext);
  const dispatch = useDispatch();

  const handleRemoveAllNotes = () => {
    dispatch(removeAllNotes());
  };

  return (
    <StyledSettings>
      <StyledParagraph>ACCOUNT</StyledParagraph>
      {displayName ? (
        <StyledBoxImage>
          <p>{displayName}</p>
          <img src={photoURL} alt="" />
        </StyledBoxImage>
      ) : null}
      <StyledBox>{email}</StyledBox>
      <StyledParagraph>THEME</StyledParagraph>
      <StyledBox>
        <label htmlFor="light">light</label>
        <input
          type="radio"
          id="light"
          name="drone"
          value="light"
          onChange={handleChangeModeState}
          defaultChecked={modeState ? false : true}
        />
      </StyledBox>
      <StyledBox>
        <label htmlFor="dark">dark</label>
        <input
          type="radio"
          id="dark"
          name="drone"
          value="dark"
          onChange={handleChangeModeState}
          defaultChecked={modeState ? true : false}
        />
      </StyledBox>
      <StyledButtonWrapper>
        <button onClick={handleRemoveAllNotes}>Remove Notes</button>
        <button onClick={handleSignOut}>Log Out</button>
      </StyledButtonWrapper>
      <StyledInfoParagraph>
        Logged in by: {reloadUserInfo.providerUserInfo[0].providerId}
      </StyledInfoParagraph>
    </StyledSettings>
  );
};

export default Settings;
