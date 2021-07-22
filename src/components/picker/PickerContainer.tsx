import React from 'react';
import {Picker} from '@react-native-picker/picker';
import {PickerProps} from '@react-native-picker/picker';
import {useTheme} from '@react-navigation/native';

import {pickerStyles} from './pickerStyles';

export const PickerContainer: React.FC<PickerProps> = ({style, ...rest}) => {
  const {colors} = useTheme();

  return (
    <Picker
      style={[pickerStyles.picker, {color: colors.text}, style]}
      {...rest}>
      {rest.children}
    </Picker>
  );
};
