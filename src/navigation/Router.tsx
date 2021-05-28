import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';

import { MainTabs } from './MainTabs';
import { LoginStack } from './LoginStack';


const Stack = createStackNavigator();

export const Router = () => {

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName = { isLoggedIn ? 'Main' : 'Login'}
                             screenOptions = {{headerShown: false}}>
                <Stack.Screen name="Login" component={LoginStack}/>
                <Stack.Screen name="Main" component={MainTabs}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const mapStateToProps = (state) => {
    return{
        isLoggedIn:state.isLoggedIn
    }
};

export const RouterConnect = connect(mapStateToProps)(Router);
