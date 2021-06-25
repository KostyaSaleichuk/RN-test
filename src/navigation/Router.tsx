import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  isLoggedIn: boolean;
}

const router: React.FC<RouterProps> = props => {
/*
  const getStatus = async () => {
    try{
      const currentStatus = await AsyncStorage.getItem('loggedIn')
      return currentStatus !== null ? JSON.parse(currentStatus) : null;
    } catch (error) {
      console.log(error)
    }
  }
*/
  return(
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={props.isLoggedIn ? Routes.Main : Routes.Login}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={Routes.Login} component={LoginStack} />
        <Stack.Screen name={Routes.Main} component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

const mapStateToProps = (state: AppState) =>({
  isLoggedIn: state.authReducer.isLoggedIn,
})

export const Router = connect(mapStateToProps)(router);
