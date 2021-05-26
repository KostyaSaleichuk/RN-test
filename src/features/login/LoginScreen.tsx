import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';

import {loginStyles} from './loginScreenStyles.tsx'
import {MyButton} from '../../components/button/ButtonComponent.tsx';
import {InputText} from '../../components/input/InputComponent.tsx';


export const LoginScreen = () => (
    <View style={loginStyles.container}>
        <InputText placeholder='Enter your Email'
        keyboardType= 'email-address'/>
        <InputText placeholder='Enter your password'
                   secureTextEntry
        />
        <MyButton
            text='Login'
        />
    </View>
);
