import React, { useContext } from 'react';
import { AuthContext } from 'providers/AuthProvider';
import { StyledSocialButtons } from './SocialButtons.styles';

const SocialButtons = () => {
  const {
    handleSignInWithFacebook,
    handleSignInWithGoogle,
    handleSignInWithGithub,
  } = useContext(AuthContext);

  return (
    <StyledSocialButtons>
      <button onClick={handleSignInWithFacebook}>
        <i className="fab fa-facebook-f"></i>
      </button>
      <button onClick={handleSignInWithGithub}>
        <i className="fab fa-github"></i>
      </button>
      <button onClick={handleSignInWithGoogle}>
        <i className="fab fa-google"></i>
      </button>
    </StyledSocialButtons>
  );
};

export default SocialButtons;
