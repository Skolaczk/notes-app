import { AuthContext } from 'providers/AuthProvider';
import React, { useContext } from 'react';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';

const Root = () => {
  const { currentUser } = useContext(AuthContext);

  return <>{currentUser ? <AuthenticatedApp /> : <UnauthenticatedApp />}</>;
};

export default Root;
