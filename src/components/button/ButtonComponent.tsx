import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import {buttonStyles} from './buttonStyles.tsx'

interface Props {
    butText: string;
};

const onPress = () => {alert('tapped')};

export const MyButton = (props: Props) => (
    <TouchableOpacity
        style={buttonStyles.buttonContainer}
        onPress={onPress}
    >
        <Text style={buttonStyles.buttonText}>{props.butText}</Text>
    </TouchableOpacity>
);
