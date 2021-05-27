import React, {useState} from 'react';
import {View} from 'react-native';

import {loginStyles} from './loginScreenStyles'
import {MyButton} from '../../components/button/ButtonComponent.tsx';
import {InputText} from '../../components/input/InputComponent.tsx';

import {useAuth} from '../../contexts/Auth';

export const LoginScreen = () => {
    const [loading, isLoading] = useState(false);
    const auth = useAuth();
    const logIn = async () => {
        isLoading(true);
        await auth.signIn();
    };

    return(
    <View style={loginStyles.container}>
        <InputText placeholder='Enter your Email'
        keyboardType= 'email-address'/>
        <InputText placeholder='Enter your password'
                   secureTextEntry
        />
        <MyButton
            text='Login'
            onPress = {logIn}
        />
    </View>
    );
};
