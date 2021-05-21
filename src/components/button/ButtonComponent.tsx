import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import {buttonStyles} from './buttonStyles.tsx'

interface Props {
    text: string;
}

export const MyButton = (props) => {

    const onPress = () => {alert('tapped')};

    return(
         <TouchableOpacity
            style={buttonStyles.buttonContainer}
            onPress={onPress}
         >
            <Text style={buttonStyles.buttonText}>{props.text}</Text>
         </TouchableOpacity>
   )
};
