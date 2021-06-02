import React from "react";
import { TextInput } from "react-native";

import { inputStyles } from "./inputStyles";

interface InputProps {
  input: string;
  secureTextEntry: boolean;
  placeholder: string;
  onChange(): void;
}

export const InputText: React.FC<InputProps> = (props) => (
  <TextInput
    style={inputStyles.inputContainer}
    placeholder={props.placeholder}
    placeholderTextColor="#FFF"
    value={props.input}
    onChangeText={props.onChange}
    secureTextEntry={props.secureTextEntry}
  />
);
