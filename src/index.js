import React from 'react';
import ReactDOM from 'react-dom';
import Root from './views/Root';
import AuthProvider from 'providers/AuthProvider';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Root />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
