import React, {useState, useCallback} from 'react';
import {View, Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {connect} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';

import {loginStyles} from './loginScreenStyles';
import {CustomButton} from '../../components/button/Button';
import {Input} from '../../components/input/Input';
import {Routes} from '../../navigation/Router';
import {logIn, logOut} from '../../actions/loginActions';
import {AppState} from '../../reducers/RootReducer';
import {tryLogin} from '../../reducers/authReducer';

type LoginScreenParamList = {
  [Routes.Main]: undefined;
};
type NavigationProp = StackNavigationProp<LoginScreenParamList, Routes.Main>;

interface LoginProps {
  navigation: NavigationProp;
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
      const statusAuth = await tryLogin(credentials);
      weirdFuncName(statusAuth);
    }, []);

  const weirdFuncName = (statusAuth: boolean) => {
    if (statusAuth) {
      navigation.reset({
        routes: [{name: Routes.Main}]
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
    userIsAuth({email: inputEmail, password: inputPassword})
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

const mapStateToProps = (state: AppState) => ({
  isLoggedIn: state.authReducer.isLoggedIn,
})

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, undefined, Action>) =>({
  logIn: () => dispatch(logIn()),
  logOut: () => dispatch(logOut()),
  tryLogin: (credentials: {email: string; password: string}) => dispatch(tryLogin(credentials)),
})

export const Login = connect(mapStateToProps, mapDispatchToProps)(login);
