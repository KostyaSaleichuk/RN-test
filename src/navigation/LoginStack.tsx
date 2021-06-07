import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Login} from '../features/login/Login';

const Stack = createStackNavigator();

export const LoginStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={Login} />
  </Stack.Navigator>
);
