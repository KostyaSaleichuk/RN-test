import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {MainTabs} from './MainTabs';
import {LoginStack} from './LoginStack';

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

export const Router: React.FC<RouterProps> = props => {

  const getStatus = async () => {
    try{
      const currentStatus = await AsyncStorage.getItem('loggedIn')
      return currentStatus !== null ? JSON.parse(currentStatus) : null;
    } catch (error) {
      console.log(error)
    }
  }

  return(
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={getStatus() ? Routes.Main : Routes.Login}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={Routes.Login} component={LoginStack} />
        <Stack.Screen name={Routes.Main} component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};
