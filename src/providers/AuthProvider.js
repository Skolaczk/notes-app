import React, { useEffect, useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  signInWithRedirect,
  getRedirectResult,
} from 'firebase/auth';
import { app } from 'firebase/Firebase';
import { ERRORS } from 'constant/Constant';

export const AuthContext = React.createContext({
  currentUser: null,
  auth: null,
  handleInputChange: () => {},
  handleSignIn: () => {},
  handleSignUp: () => {},
  handleSignOut: () => {},
  handleSignInWithGoogle: () => {},
  handleSignInWithFacebook: () => {},
  handleSignInWithGithub: () => {},
  error: '',
});

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState(null);
  const [inputsValue, setInputsValue] = useState({
    email: '',
    password: '',
  });
  const { email, password } = inputsValue;

  const handleInputChange = (e) => {
    setInputsValue({
      ...inputsValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignInWithGoogle = () => {
    signInWithRedirect(auth, googleProvider);
    getRedirectResult(auth).catch(() => {
      setError(ERRORS.SOCIAL_LOG_ERROR);
    });
  };

  const handleSignInWithFacebook = () => {
    signInWithRedirect(auth, facebookProvider);
    getRedirectResult(auth).catch(() => {
      setError(ERRORS.SOCIAL_LOG_ERROR);
    });
  };

  const handleSignInWithGithub = () => {
    signInWithRedirect(auth, githubProvider);
    getRedirectResult(auth).catch(() => {
      setError(ERRORS.SOCIAL_LOG_ERROR);
    });
  };

  const handleSignOut = () => auth.signOut();

  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).catch(() => {
      setError(ERRORS.SIGN_UP_ERROR);
    });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).catch(() => {
      setError(ERRORS.SIGN_IN_ERROR);
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        localStorage.setItem('user', user.email);
      } else {
        setCurrentUser(null);
        localStorage.removeItem('user');
      }
    });
  }, [auth]);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        auth,
        handleInputChange,
        handleSignIn,
        handleSignUp,
        handleSignOut,
        handleSignInWithGoogle,
        handleSignInWithFacebook,
        handleSignInWithGithub,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
