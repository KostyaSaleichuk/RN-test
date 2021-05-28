import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {LoginScreen} from '../features/login/LoginScreen';

const Stack = createStackNavigator();

export const LoginStack = () => (
    <Stack.Navigator>
        <Stack.Screen name='Login' component={LoginScreen}/>
    </Stack.Navigator>
);
