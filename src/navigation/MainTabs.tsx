import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {Feed} from '../features/feed/Feed';
import {Profile} from '../features/profile/Profile';
import {Routes} from './Router';

const Tab = createMaterialTopTabNavigator();

export const MainTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name={Routes.Feed} component={Feed} />
    <Tab.Screen name={Routes.Profile} component={Profile} />
  </Tab.Navigator>
);
