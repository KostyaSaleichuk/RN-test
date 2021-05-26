import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import {FeedsScreen} from '../../features/feeds/FeedsScreen';
import {ProfileScreen} from '../../features/profile/ProfileScreen';


const Tab = createMaterialTopTabNavigator();

export const AppTabs = () => {
    <Tab.Navigator>
        <Tab.Screen name="Feeds" component={FeedsScreen}/>
        <Tab.Screen name="Profile" component={ProfileScreen}/>
    </Tab.Navigator>
};
