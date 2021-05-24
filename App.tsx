import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import {MainNavigator} from './src/navigation/navigators/MainNavigator.tsx';

import {LoginScreen} from './src/features/login/LoginScreen.tsx';
export const App = () => {
  return (
    <LoginScreen/>
  );
};

//<MainNavigator/>