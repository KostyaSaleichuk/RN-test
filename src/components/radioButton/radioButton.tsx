import React from 'react';
import {TouchableOpacity} from 'react-native';

interface RadioButtonProps {
  onPress: () => void;
  style: {};
}

export const RadioButton: React.FC<RadioButtonProps> = props => (
  <TouchableOpacity style={props.style} onPress={props.onPress} />
);
