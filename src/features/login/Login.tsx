import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';

import {loginStyles} from './loginScreenStyles';
import {MyButton} from '../../components/button/Button';
import {InputText} from '../../components/input/Input';
import {onChangeEmail, onChangePassword} from '../../actions/loginActions';
import {loggingIn} from '../../middlewares/loginMW';
import {IProps} from '../../interfaces';

const loginScreen: React.FC<IProps> = props => {
  return (
    <View style={loginStyles.container}>
      <InputText
        placeholder="Enter your Email"
        onChangeText={input => props.changeEmail(input)}
        value={props.input}
      />
      <InputText
        placeholder="Enter your password"
        secureTextEntry
        onChangeText={input => props.changePassword(input)}
        value={props.input}
      />
      <MyButton text="Login" onPress={props.logIn} />
    </View>
  );
};

const mapStateToProps = state => {
  return {
    email: state.email,
    password: state.password,
  };
};

const mapDispatchToProps = dispatch => ({
  changeEmail: () => dispatch(onChangeEmail),
  changePassword: () => dispatch(onChangePassword),
  logIn: () => loggingIn,
});

export const LoginScreen = connect(
  mapDispatchToProps,
  mapStateToProps,
)(loginScreen);
