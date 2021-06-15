import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {Feeds} from '../features/feeds/Feeds';
import {Profile} from '../features/profile/Profile';
import {Routes} from './Router';

const Tab = createMaterialTopTabNavigator();

export const MainTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name={Routes.Feeds} component={Feeds} />
    <Tab.Screen name={Routes.Profile} component={Profile} />
  </Tab.Navigator>
);
