import React from 'react';
import {TextInput, TextInputProps} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {inputStyles} from './inputStyles';

export const Input: React.FC<TextInputProps> = ({style, ...props}) => {
  const {colors} = useTheme();
  return (
    <TextInput
      {...props}
      style={[inputStyles.inputContainer, {color: colors.text}]}
      placeholderTextColor={colors.text}
    />
  );
};
