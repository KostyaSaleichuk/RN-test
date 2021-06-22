import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Dispatch} from 'redux';
import {connect} from 'react-redux'
import {logIn} from '../../actions/loginActions'

import {loginStyles} from './loginScreenStyles';
import {CustomButton} from '../../components/button/Button';
import {Input} from '../../components/input/Input';
import {testData} from '../../services/authService';
import {emailPattern} from '../../services/emailPattern';
import {Routes} from '../../navigation/Router';

type LoginScreenParamList = {
  [Routes.Main]: undefined;
};

type NavigationProp = StackNavigationProp<LoginScreenParamList, Routes.Main>;

interface LoginProps {
  navigation: NavigationProp;
}

const login = ({navigation}: LoginProps) => {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);

  const validUser =
    inputEmail === testData.email && inputPassword === testData.password;

  const tryEmail = (inputEmail: string) => {
    setValidEmail(emailPattern.test(inputEmail));
  };

  const tryPassword = (inputPassword: string) => {
    setValidPassword(inputPassword.length >= 8);
  };

  const loginHandler = () => {
    tryEmail(inputEmail);
    tryPassword(inputPassword);
    if (validEmail && validPassword && validUser) {
      navigation.navigate(Routes.Main);
    }
  };

  return (
    <View style={loginStyles.container}>
      <Input
        placeholder="Enter your Email"
        onChangeText={setInputEmail}
        value={inputEmail}
        keyboardType={'email-address'}
      />
      {validEmail ? null : (
        <Text style={{color: '#f54242'}}>Email is not valid</Text>
      )}
      <Input
        placeholder="Enter your password"
        secureTextEntry
        onChangeText={setInputPassword}
        value={inputPassword}
      />
      {validPassword ? null : (
        <Text style={{color: '#f54242'}}>
          Password length must be min 8 characters long
        </Text>
      )}
      <CustomButton text="Login" onPress={loginHandler} />
    </View>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) =>({
  logIn: () => dispatch(logIn()),
})

export const Login = connect(null, mapDispatchToProps)(login);
