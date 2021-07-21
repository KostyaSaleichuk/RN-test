import React from 'react';
import {TouchableOpacity, Text, TouchableOpacityProps} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {buttonStyles} from './buttonStyles';

interface ButtonProps extends TouchableOpacityProps {
  text?: string;
}

export const CustomButton: React.FC<ButtonProps> = ({style, text, ...rest}) => {
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      {...rest}
      style={[
        buttonStyles.buttonContainer,
        {backgroundColor: colors.background},
        style,
      ]}
      onPress={rest.onPress}>
      <Text style={{color: colors.text}}>{text}</Text>
    </TouchableOpacity>
  );
};
