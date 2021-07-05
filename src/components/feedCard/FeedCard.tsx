import React from 'react';
import {View, ImageBackground, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {listStyles} from './feedCardStyles';

interface CardProps {
  url: string;
  author: string;
}

export const FeedCard: React.FC<CardProps> = ({url, author}) => {
  const {colors} = useTheme();

  return (
    <View style={[listStyles.itemContainer, {backgroundColor: colors.primary}]}>
      <ImageBackground source={{uri: url}} style={listStyles.itemImage}>
        <Text style={listStyles.itemText}>{author}</Text>
      </ImageBackground>
    </View>
  );
};
