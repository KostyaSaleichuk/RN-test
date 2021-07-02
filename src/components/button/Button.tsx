import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {buttonStyles} from './buttonStyles';

interface ButtonProps {
  text: string;
  onPress: () => void;
}

export const CustomButton: React.FC<ButtonProps> = props => {
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      style={[
        buttonStyles.buttonContainer,
        {backgroundColor: colors.background},
      ]}
      onPress={props.onPress}>
      <Text style={{color: colors.text}}>{props.text}</Text>
    </TouchableOpacity>
  );
};
