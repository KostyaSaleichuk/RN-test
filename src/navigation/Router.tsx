import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';

import {MainTabs} from './MainTabs';
import {LoginStack} from './LoginStack';
import {AppState} from '../reducers/RootReducer';
import {darkTheme, lightTheme, Themes} from '../theme';

const Stack = createStackNavigator();

export enum Routes {
  Main = 'Main',
  Login = 'Login',
  Profile = 'Profile',
  Feed = 'Feed',
}

interface RouterProps {
  isAuth: boolean;
  theme: string;
}

const router: React.FC<RouterProps> = props => (
  <NavigationContainer
    theme={props.theme === Themes.dark ? darkTheme : lightTheme}>
    <Stack.Navigator
      initialRouteName={props.isAuth ? Routes.Main : Routes.Login}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.Login} component={LoginStack} />
      <Stack.Screen name={Routes.Main} component={MainTabs} />
    </Stack.Navigator>
  </NavigationContainer>
);

const mapStateToProps = (state: AppState) => ({
  isAuth: state.authReducer.isAuth,
  theme: state.themeReducer.theme,
});

export const Router = connect(mapStateToProps)(router);
