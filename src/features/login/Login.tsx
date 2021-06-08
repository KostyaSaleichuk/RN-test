import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Dispatch} from 'redux';

import {loginStyles} from './loginScreenStyles';
import {MyButton} from '../../components/button/Button';
import {InputText} from '../../components/input/Input';
import {onChangeEmail, onChangePassword} from '../../actions/loginActions';
import {loggingIn} from '../../middlewares/loginMW';
import {AppState} from '../../reducers/RootReducer';

interface Props {
  placeholder: string;
  onChangeEmail: (input: string) => void;
  onChangePassword: (input: string) => void;
  loggingIn?: () => void;
  input: string;
}

const login: React.FC<Props> = props => (
  <View style={loginStyles.container}>
    <InputText
      placeholder="Enter your Email"
      onChangeText={email => props.onChangeEmail(email)}
      value={props.input}
    />
    <InputText
      placeholder="Enter your password"
      secureTextEntry
      onChangeText={password => props.onChangePassword(password)}
      value={props.input}
    />
    <MyButton text="Login" onPress={props.loggingIn} />
  </View>
);

const mapStateToProps = (state: AppState) => ({
  email: state.email,
  password: state.password,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      loggingIn,
      onChangeEmail,
      onChangePassword,
    },
    dispatch,
  );
};

export const Login = connect(mapStateToProps, mapDispatchToProps)(login);
