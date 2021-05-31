import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';

import {loginStyles} from './loginScreenStyles'
import {MyButton} from '../../components/button/ButtonComponent';
import {InputText} from '../../components/input/InputComponent';
import {testData} from '../../services/authService';


export const LoginScreen = (props) => {

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

const mapDispatchToProps = (dispatch) => {
    return{
        changeEmail:() => dispatch({type: 'ON_CHANGE_EMAIL'}),
        changePassword:() => dispatch({type: 'ON_CHANGE_PASSWORD'}),
        logIn: () => dispatch({type: 'LOG_IN'}),
    }
};

const mapStateToProps = (state) => {
    return {
        email: state.email,
        password: state.password,
    }
};

export const LoginConnect = connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
