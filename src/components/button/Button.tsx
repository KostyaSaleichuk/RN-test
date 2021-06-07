import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import {buttonStyles} from './buttonStyles';
interface ButtonProps {
  text: string;
  onPress: () => void;
}

export const MyButton: React.FC<ButtonProps> = props => (
  <TouchableOpacity
    style={buttonStyles.buttonContainer}
    onPress={props.onPress}>
    <Text style={buttonStyles.buttonText}>{props.text}</Text>
  </TouchableOpacity>
);
