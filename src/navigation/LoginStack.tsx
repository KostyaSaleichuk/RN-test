import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Login} from '../features/login/Login';
import {Routes} from './Router';

const Stack = createStackNavigator();

export const LoginStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={Routes.Login} component={Login} />
  </Stack.Navigator>
);
