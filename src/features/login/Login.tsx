import React, {useState, useCallback} from 'react';
import {View, Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {connect} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {useTheme} from '@react-navigation/native';

import {loginStyles} from './loginScreenStyles';
import {CustomButton} from '../../components/button/Button';
import {Input} from '../../components/input/Input';
import {Routes} from '../../navigation/Router';
import {tryLogin} from '../../middlewares/loginThunk';
import {MainStackNavigationParams} from '../../navigation/mainStackNavParams';

interface LoginProps {
  navigation: StackNavigationProp<MainStackNavigationParams, Routes.Main>;
}

interface Props extends LoginProps {
  tryLogin: (credentials: {email: string; password: string}) => boolean;
}

const login: React.FC<Props> = ({navigation, tryLogin}) => {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);

  const userIsAuth = useCallback(
    async (credentials: {email: string; password: string}) => {
      const statusAuth = tryLogin(credentials);
      weirdFuncName(statusAuth);
    },
    [],
  );

  const weirdFuncName = (statusAuth: boolean) => {
    if (statusAuth) {
      navigation.reset({
        routes: [{name: Routes.Main}],
      });
      return;
    } else {
      setValidEmail(inputPassword.length >= 8);
      setValidPassword(inputEmail.length >= 4);

      setInputEmail('');
      setInputPassword('');
    }
  };

  const loginHandler = (): void => {
    userIsAuth({email: inputEmail, password: inputPassword});
  };

  const {colors} = useTheme();

  return (
    <View style={[loginStyles.container, {backgroundColor: colors.primary}]}>
      <Input
        placeholder="Enter your Email"
        onChangeText={setInputEmail}
        value={inputEmail}
        keyboardType={'email-address'}
      />
      {validEmail ? null : (
        <Text style={{color: colors.notification}}>Email is not valid</Text>
      )}
      <Input
        placeholder="Enter your password"
        secureTextEntry
        onChangeText={setInputPassword}
        value={inputPassword}
      />
      {validPassword ? null : (
        <Text style={{color: colors.notification}}>
          Password length must be min 8 characters long
        </Text>
      )}
      <CustomButton text="Login" onPress={loginHandler} />
    </View>
  );
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, undefined, Action>,
) => ({
  tryLogin: (credentials: {email: string; password: string}) =>
    dispatch(tryLogin(credentials)),
});

export const Login = connect(null, mapDispatchToProps)(login);
