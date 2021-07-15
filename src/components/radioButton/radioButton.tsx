import React from 'react';
import {View, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {radioButtonStyles} from './radioButtonStyles';

interface RadioButtonProps extends TouchableOpacityProps {
  isChecked: boolean;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  isChecked,
  ...props
}) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      {...props}
      style={[radioButtonStyles.outerCircle, {borderColor: colors.background}]}>
      {isChecked ? (
        <View
          style={[
            radioButtonStyles.innerCircle,
            {backgroundColor: colors.background},
          ]}
        />
      ) : null}
    </TouchableOpacity>
  );
};
