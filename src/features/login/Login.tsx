import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';

import {loginStyles} from './loginScreenStyles'
import {MyButton} from '../../components/button/Button';
import {InputText} from '../../components/input/Input';
import {testData} from '../../services/authService';


const loginScreen = (props) => {

    return(
        <View style={loginStyles.container}>
            <InputText placeholder='Enter your Email'
                        keyboardType= 'email-address'
                        autoCapitalize = 'none'
                        value={props.email}
            />
            <InputText placeholder='Enter your password'
                        autoCapitalize = 'none'
                        secureTextEntry
                        value={props.password}
            />
            <MyButton
                text='Login'
                onPress = {props.logIn}
            />
        </View>
    );
};

const mapDispatchToProps = (dispatch) => ({
    changeEmail:() => dispatch({type: 'ON_CHANGE_EMAIL'}),
    changePassword:() => dispatch({type: 'ON_CHANGE_PASSWORD'}),
    logIn: () => dispatch({type: 'LOG_IN'}),
});

const mapStateToProps = (state) => ({
    email: state.email,
    password: state.password,
});

export const LoginScreen = connect(mapStateToProps, mapDispatchToProps)(loginScreen);
