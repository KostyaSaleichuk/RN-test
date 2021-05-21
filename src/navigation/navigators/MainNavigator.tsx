import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { FeedsScreen } from '../../features/feeds/FeedsScreen.tsx';
import { ProfileScreen } from '../../features/profile/ProfileScreen.tsx';

const Tab = createMaterialTopTabNavigator();


export const MainNavigator = () => {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Feeds" component={FeedsScreen}/>
                <Tab.Screen name="Profile" component={ProfileScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}
