import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';

import {MainTabs} from './MainTabs';
import {LoginStack} from './LoginStack';
import {IProps} from '../interfaces';

const Stack = createStackNavigator();

const router: React.FC<IProps> = props => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName={props.isLoggedIn ? 'Main' : 'Login'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginStack} />
      <Stack.Screen name="Main" component={MainTabs} />
    </Stack.Navigator>
  </NavigationContainer>
);

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
});

export const Router = connect(mapStateToProps)(router);
