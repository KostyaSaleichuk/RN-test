import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { FeedsScreen } from "../features/feeds/Feeds";
import { ProfileScreen } from "../features/profile/Profile";

const Tab = createMaterialTopTabNavigator();

export const MainTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feeds" component={FeedsScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);
