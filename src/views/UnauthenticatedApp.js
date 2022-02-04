import React, { useContext } from 'react';
import {
  ButtonsWrapper,
  StyledError,
  StyledUnauthenticatedApp,
  Wrapper,
} from './UnauthenticatedApp.styles';
import FormField from 'components/molecules/FormField/FormField';
import { StyledButton } from 'components/atoms/Button/button';
import { AuthContext } from 'providers/AuthProvider';
import SocialButtons from 'components/molecules/SocialButtons/SocialButtons';

const UnauthenticatedApp = () => {
  const { handleInputChange, handleSignIn, handleSignUp, error } =
    useContext(AuthContext);

  return (
    <StyledUnauthenticatedApp>
      <Wrapper>
        <h1>Notes-app</h1>
        <form>
          <FormField
            label="E-mail"
            name="email"
            id="email"
            type="text"
            placeholder="Types your e-mail"
            onChange={handleInputChange}
          />
          <FormField
            label="Password"
            name="password"
            id="password"
            type="password"
            placeholder="Types your password"
            onChange={handleInputChange}
          />
          <ButtonsWrapper>
            <StyledButton onClick={handleSignIn}>Sign In</StyledButton>
            <StyledButton onClick={handleSignUp}>Sign Up</StyledButton>
          </ButtonsWrapper>
        </form>
        <StyledError>{error}</StyledError>
        <p>or using:</p>
        <SocialButtons />
      </Wrapper>
    </StyledUnauthenticatedApp>
  );
};

export default UnauthenticatedApp;
