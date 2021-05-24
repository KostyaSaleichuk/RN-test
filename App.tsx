import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import {MainNavigator} from './src/navigation/navigators/MainNavigator.tsx';


export const App = () => {
  return (
    <MainNavigator/>
  );
};
