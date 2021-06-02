import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";

import { loginStyles } from "./loginScreenStyles";
import { MyButton } from "../../components/button/Button";
import { InputText } from "../../components/input/Input";
import { onChangeEmail, onChangePassword } from "../../actions/actions";
import { loggingIn } from "../../middlewares/loginMW";

const loginScreen = (props: any) => {
  return (
    <View style={loginStyles.container}>
      <InputText
        placeholder="Enter your Email"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={props.changeEmail}
        value={props.email}
      />
      <InputText
        placeholder="Enter your password"
        autoCapitalize="none"
        secureTextEntry
        onChangeText={props.changePassword}
        value={props.password}
      />
      <MyButton text="Login" onPress={props.logIn} />
    </View>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  changeEmail: () => dispatch(onChangeEmail),
  changePassword: () => dispatch(onChangePassword),
  logIn: () => dispatch(loggingIn),
});

export const LoginScreen = connect(mapDispatchToProps)(loginScreen);
