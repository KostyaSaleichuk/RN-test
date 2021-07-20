import React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {RadioButton} from '../radioButton/radioButton';
import {RadioContainerStyles} from './radioContainerStyles';
import {RadioButtonProps} from '../radioButton/radioButton';

interface RadioContainerProps extends RadioButtonProps {
  text: string;
}

export const RadioContainer: React.FC<RadioContainerProps> = ({
  isChecked,
  text,
  ...props
}) => {
  const {colors} = useTheme();
  return (
    <View style={RadioContainerStyles.radioContainer}>
      <Text style={[RadioContainerStyles.text, {color: colors.text}]}>
        {text}
      </Text>
      <RadioButton isChecked={isChecked} {...props} />
    </View>
  );
};
