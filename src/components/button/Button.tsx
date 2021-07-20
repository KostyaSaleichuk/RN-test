import React from 'react';
import {TouchableOpacity, Text, TouchableOpacityProps} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {buttonStyles} from './buttonStyles';

interface ButtonProps extends TouchableOpacityProps {
  text?: string;
}

export const CustomButton: React.FC<ButtonProps> = props => {
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      {...props}
      style={[
        buttonStyles.buttonContainer,
        {backgroundColor: colors.background},
      ]}
      onPress={props.onPress}>
      <Text style={{color: colors.text}}>{props.text}</Text>
    </TouchableOpacity>
  );
};
