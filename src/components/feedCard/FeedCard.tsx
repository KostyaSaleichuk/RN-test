import React from 'react';
import {View, Image, Text} from 'react-native';

import {listStyles} from './feedCardStyles';

interface CardProps {
  url: string;
  author: string;
}

export const FeedCard: React.FC<CardProps> = ({url, author}) => {
  return (
    <View style={listStyles.itemContainer}>
      <Image source={{uri: url}} style={listStyles.itemImage} />
      <View style={listStyles.itemTextContainer}>
        <Text style={listStyles.itemText}>{author}</Text>
      </View>
    </View>
  );
};
