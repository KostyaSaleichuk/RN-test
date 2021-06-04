import React from 'react';
import {View} from 'react-native';

import {PostList} from '../../components/list/PostList';
import {feedsScreenStyles} from './feedsScreenStyles';

export const FeedsScreen = () => (
  <View style={feedsScreenStyles.feedsScreen}>
    <PostList />
  </View>
);
