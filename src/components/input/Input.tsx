import React from 'react';
import {TextInput} from 'react-native';

import {inputStyles} from './inputStyles';
import {IInputProps} from '../../interfaces';

export const InputText: React.FC<IInputProps> = props => (
  <TextInput
    style={inputStyles.inputContainer}
    placeholder={props.placeholder}
    placeholderTextColor="#FFF"
    value={props.input}
    onChangeText={props.onChangeText}
    secureTextEntry={props.secureTextEntry}
  />
);
