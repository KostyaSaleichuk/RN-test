import React, {useState} from 'react';
import { TextInput } from 'react-native';

import {inputStyles} from './inputStyles.tsx'

interface Props {
    input: string;
    secureTextEntry: boolean;
    placeholder: string;
};

export const InputText = (props: Props) => (
    <TextInput
        style={inputStyles.inputContainer}
        placeholder={props.placeholder}
        placeholderTextColor='#FFF'
        value={props.input}
        secureTextEntry={props.secureTextEntry}
    />
);
