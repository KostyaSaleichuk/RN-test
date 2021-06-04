import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import {buttonStyles} from './buttonStyles';
import {IButtonProps} from '../../interfaces';

export const MyButton: React.FC<IButtonProps> = props => (
  <TouchableOpacity
    style={buttonStyles.buttonContainer}
    onPress={props.onPress}>
    <Text style={buttonStyles.buttonText}>{props.text}</Text>
  </TouchableOpacity>
);
