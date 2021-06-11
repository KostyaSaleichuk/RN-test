import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

import {loginStyles} from './loginScreenStyles';
import {MyButton} from '../../components/button/Button';
import {InputText} from '../../components/input/Input';
import {testData} from '../../services/authService';

export interface Props {
  placeholder: string;
  navigation: {
    navigate: (route: string) => void;
    reset: (routes: {}) => void;
  };
}

const login: React.FC<Props> = ({navigation}) => {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);

  const emailReg =
    /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const validUser =
    inputEmail === testData.email && inputPassword === testData.password;

  const tryEmail = () => {
    if (emailReg.test(inputEmail) == true) {
      return setValidEmail(true);
    }
    return setValidEmail(false);
  };
  const tryPassword = () => {
    if (inputPassword.length >= 8) {
      return setValidPassword(true);
    }
    return setValidPassword(false);
  };
  const loginHandler = () => {
    tryEmail();
    tryPassword();
    if (validEmail && validPassword && validUser) {
      navigation.navigate('Main');
    }
  };

  return (
    <View style={loginStyles.container}>
      <InputText
        placeholder="Enter your Email"
        onChangeText={setInputEmail}
        value={inputEmail}
        keyboardType={'email-address'}
      />
      {validEmail ? null : (
        <Text style={{color: '#f54242'}}>Email is not valid</Text>
      )}
      <InputText
        placeholder="Enter your password"
        secureTextEntry
        onChangeText={setInputPassword}
        value={inputPassword}
      />
      {validPassword ? null : (
        <Text style={{color: '#f54242'}}>
          Password length must be min 8 characters
        </Text>
      )}
      <MyButton text="Login" onPress={loginHandler} />
    </View>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export const Login = connect(null, mapDispatchToProps)(login);
