import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';

import {MainTabs} from './MainTabs';
import {LoginStack} from './LoginStack';
import {AppState} from '../reducers/RootReducer'

const Stack = createStackNavigator();

export enum Routes {
  Main = 'Main',
  Login = 'Login',
  Profile = 'Profile',
  Feed = 'Feed',
}

interface RouterProps {
  auth:boolean,
}

const router: React.FC<RouterProps> = props => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName={props.auth ? Routes.Main : Routes.Login}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.Login} component={LoginStack} />
      <Stack.Screen name={Routes.Main} component={MainTabs} />
    </Stack.Navigator>
  </NavigationContainer>
);

const mapStateToProps = (state: AppState) =>({
  auth: state.authReducer.auth,
})

export const Router = connect(mapStateToProps)(router);
