import React, {useState} from 'react';
import { TextInput } from 'react-native';

import {inputStyles} from './inputStyles.tsx'


export const InputText = (props) => {
////
    const [input, setInput] = useState('');
////
    return(
        <TextInput
            style={inputStyles.inputContainer}
            placeholder={props.placeholder}
            placeholderTextColor='#FFF'
            value={input}
            onChangeText={input => setInput(input)}
            secureTextEntry={props.secureTextEntry}
        />
    )
};