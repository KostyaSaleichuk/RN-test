import React from 'react';
import {TouchableOpacity, TouchableOpacityProps, Text} from 'react-native';

import {buttonStyles} from './buttonStyles.tsx'


interface Props {
    butText: string;
    onPress: Function;
};

export const MyButton:React.FC<Props> = ({butText, onPress}) => (
    <TouchableOpacity
        style={buttonStyles.buttonContainer}
        onPress={onPress}
    >
        <Text style={buttonStyles.buttonText}>{butText}</Text>
    </TouchableOpacity>
);
