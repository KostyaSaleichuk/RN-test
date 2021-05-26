import React from 'react';
import {View, Text, Image} from 'react-native';

import {feedsScreenStyles} from './feedsScreenStyles';


export const FeedsScreen = () => (
<View style = {feedsScreenStyles.feedsScreen}>
    <View style={feedsScreenStyles.postContainer}>
              <Image/>
              <View>
                  <Text></Text>
              </View>
          </View>
</View>
);
