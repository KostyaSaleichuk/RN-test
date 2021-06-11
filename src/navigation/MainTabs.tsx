import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {Feeds} from '../features/feeds/Feeds';
import {Profile} from '../features/profile/Profile';

const Tab = createMaterialTopTabNavigator();

export const MainTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feeds" component={Feeds} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);
