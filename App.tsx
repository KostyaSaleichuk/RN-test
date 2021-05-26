import React from 'react';

import {Router} from './src/components/router/Router';
import {AuthProvider} from './src/navigation/navigators/Provider';


export const App = () => {
  return (
    <AuthProvider>
        <Router/>
    </AuthProvider>
  );
};
