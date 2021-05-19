import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import buttonStyles from './buttonStyles.tsx'

export default function MyButton(props) {
    return(
         <TouchableOpacity style={buttonStyles.buttonContainer}>
            <Text style={buttonStyles.buttonText}>{props.text}</Text>
         </TouchableOpacity>
   )
};
