import React from 'react';
import { TextInput } from 'react-native';
import inputStyles from './inputStyles.tsx'

export default function InputTextComp(props) {
    return(
        <TextInput
            style={inputStyles.inputContainer}
            placeholder={props.placeholder}
            placeholderTextColor='#FFF'
        />
    )
};