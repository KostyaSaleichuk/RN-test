import React from 'react';
import {View, StyleSheet} from 'react-native';
import styles from './loginScreenStyles.tsx'
import MyButton from '../../components/button/buttonComponent.tsx';
import InputTextComp from '../../components/input/inputComponent.tsx'

export default function LoginScreen(){
    return(
        <View style={styles.container}>
            <InputTextComp placeholder='Enter your Email'/>
            <InputTextComp placeholder='Enter your password'/>
            <MyButton text='Login' />
        </View>
    )
};
