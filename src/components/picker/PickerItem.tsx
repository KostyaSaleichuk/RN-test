import React from 'react';
import {Picker} from '@react-native-picker/picker';
import {PickerItemProps} from 'react-native';

export const PickerItem: React.FC<PickerItemProps> = ({label}, ...rest) => (
  <Picker.Item label={label} {...rest} />
);
