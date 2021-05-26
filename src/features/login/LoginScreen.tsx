import React from 'react';
import {View} from 'react-native';

import {loginStyles} from './loginScreenStyles'
import {MyButton} from '../../components/button/ButtonComponent.tsx';
import {InputText} from '../../components/input/InputComponent.tsx';

import {useAuth} from '../../navigation/navigators/Provider';

export const LoginScreen = () => {

    const auth = useAuth();

    <View style={loginStyles.container}>
        <InputText placeholder='Enter your Email'
        keyboardType= 'email-address'/>
        <InputText placeholder='Enter your password'
                   secureTextEntry
        />
        <MyButton
            text='Login'
            onPress = {auth.logIn}
        />
    </View>
};
