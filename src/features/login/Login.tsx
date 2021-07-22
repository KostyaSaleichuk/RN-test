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
import {localization} from '../../localization/localization';

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

  const translate = (key: string) => localization.translate(key);

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
        placeholder={translate('enter_your_email')}
        onChangeText={setInputEmail}
        value={inputEmail}
        keyboardType={'email-address'}
      />
      {validEmail ? null : (
        <Text style={{color: colors.notification}}>
          {translate('not_valid_email')}
        </Text>
      )}
      <Input
        placeholder={translate('enter_your_password')}
        secureTextEntry
        onChangeText={setInputPassword}
        value={inputPassword}
      />
      {validPassword ? null : (
        <Text style={{color: colors.notification}}>
          {translate('not_valid_password')}
        </Text>
      )}
      <CustomButton text={translate('login')} onPress={loginHandler} />
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
