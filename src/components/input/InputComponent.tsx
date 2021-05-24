import React, {useState} from 'react';
import { TextInput } from 'react-native';

import {inputStyles} from './inputStyles.tsx'

interface Props {
    input: string;
    secureTextEntry: boolean;
    placeholder: string;
};

export const InputText: React.FC<Props> = ({
    input,
    secureTextEntry,
    placeholder}) => (
    <TextInput
        style={inputStyles.inputContainer}
        placeholder={placeholder}
        placeholderTextColor='#FFF'
        value={input}
        secureTextEntry={secureTextEntry}
    />
);
