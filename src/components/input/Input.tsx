import React from 'react';
import {TextInput, TextInputProps} from 'react-native';

import {inputStyles} from './inputStyles';

export const Input: React.FC<TextInputProps> = ({style, ...props}) => (
  <TextInput
    {...props}
    style={[inputStyles.inputContainer]}
    placeholderTextColor="#FFF"
  />
);
