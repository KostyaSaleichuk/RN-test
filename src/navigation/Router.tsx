import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';

import {MainTabs} from './MainTabs';
import {LoginStack} from './LoginStack';
import {AppState} from '../reducers/RootReducer';
import {darkTheme, lightTheme, Themes} from '../theme';
import {ThemeContext} from '../context/themeContext';

const Stack = createStackNavigator();

export enum Routes {
  Main = 'Main',
  Login = 'Login',
  Profile = 'Profile',
  Feed = 'Feed',
}

interface RouterProps {
  isAuth: boolean;
}

const router: React.FC<RouterProps> = props => {
  const {theme} = useContext(ThemeContext);

  return (
    <NavigationContainer theme={theme === Themes.dark ? darkTheme : lightTheme}>
      <Stack.Navigator
        initialRouteName={props.isAuth ? Routes.Main : Routes.Login}
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

export const Router = connect(mapStateToProps)(router);
