import React from 'react';
import {View} from 'react-native';
import {Posts} from '../../components/list/Posts';

import {feedsScreenStyles} from './feedsScreenStyles';

export const Feeds = () => (
  <View style={feedsScreenStyles.feedsScreen}>
    <Posts />
  </View>
);
