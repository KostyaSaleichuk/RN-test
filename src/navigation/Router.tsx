import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';

import {MainTabs} from './MainTabs';
import {LoginStack} from './LoginStack';
import {AppState} from '../reducers/RootReducer';
import {darkTheme, lightTheme, Themes} from '../theme/theme';
import {withTheme} from '../theme/themeHOC';

const Stack = createStackNavigator();

export enum Routes {
  Main = 'Main',
  Login = 'Login',
  Profile = 'Profile',
  Feed = 'Feed',
}

interface RouterProps {
  isAuth: boolean;
  theme: Themes;
}

const router: React.FC<RouterProps> = ({theme, isAuth}) => {
  return (
    <NavigationContainer theme={theme === Themes.dark ? darkTheme : lightTheme}>
      <Stack.Navigator
        initialRouteName={isAuth ? Routes.Main : Routes.Login}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={Routes.Login} component={LoginStack} />
        <Stack.Screen name={Routes.Main} component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = (state: AppState) => ({
  isAuth: state.authReducer.isAuth,
});

export const connectedRouter = connect(mapStateToProps)(router);

export const Router = withTheme(connectedRouter);
