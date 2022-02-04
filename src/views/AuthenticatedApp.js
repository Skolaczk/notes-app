import { AuthContext } from 'providers/AuthProvider';
import React, { useContext } from 'react';

const AuthenticatedApp = () => {
  const { handleSignOut } = useContext(AuthContext);

  return <button onClick={handleSignOut}>sign out</button>;
};

export default AuthenticatedApp;
