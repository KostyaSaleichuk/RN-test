import React, {useState} from 'react';
import { TextInput } from 'react-native';

import {inputStyles} from './inputStyles'

interface InputProps {
    input: string;
    secureTextEntry: boolean;
    placeholder: string;
};

export const InputText:React.FC<InputProps> = (props) => (
    <TextInput
        style={inputStyles.inputContainer}
        placeholder={props.placeholder}
        placeholderTextColor='#FFF'
        value={props.input}
        secureTextEntry={props.secureTextEntry}
    />
);
