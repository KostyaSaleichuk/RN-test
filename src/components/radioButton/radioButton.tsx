import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {radioButtonStyles} from './radioButtonStyles';

interface RadioButtonProps {
  onPress: () => void;
  isChecked: boolean;
}

export const RadioButton: React.FC<RadioButtonProps> = props => {
  const {colors} = useTheme();

  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={[
          radioButtonStyles.outerCircle,
          {borderColor: colors.background},
        ]}>
        {props.isChecked ? (
          <View
            style={[
              radioButtonStyles.innerCircle,
              {backgroundColor: colors.background},
            ]}
          />
        ) : null}
      </View>
    </TouchableOpacity>
  );
};
