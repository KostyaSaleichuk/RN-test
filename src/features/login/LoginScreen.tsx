import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';

import {loginStyles} from './loginScreenStyles'
import {MyButton} from '../../components/button/ButtonComponent';
import {InputText} from '../../components/input/InputComponent';
import {testData} from '../../services/authService';


export const LoginScreen = () => {

    return(
        <View style={loginStyles.container}>
            <InputText placeholder='Enter your Email'
                        keyboardType= 'email-address'
                        value={value}
            />
            <InputText placeholder='Enter your password'
                        value={value}
                        secureTextEntry
            />
            <MyButton
                text='Login'
                onPress={props.logIn}
            />
        </View>
    );
};

const mapDispatchToProps = (dispatch) => {
    return{
        logIn: () => dispatch({type: 'LOG_IN'}),
    }
};

export const LoginConnect = connect(mapDispatchToProps)(LoginScreen);
