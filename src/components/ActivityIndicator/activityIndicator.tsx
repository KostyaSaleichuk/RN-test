import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import {activityStyles} from './activityStyles';

export const Indicator = () => (
  <View style={activityStyles.container}>
    <ActivityIndicator size="large" color="#FF0000" />
  </View>
);
