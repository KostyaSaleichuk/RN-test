import React from 'react';
import {View, Text, Image} from 'react-native';

import {MyButton} from '../../components/button/ButtonComponent.tsx';
import {profileStyles} from './profileScreenStyles';

import {useAuth} from '../../contexts/Auth';

export const ProfileScreen = () => {


    const auth = useAuth();
    const logOut = () => {
        auth.logOut();
    };

    return(
    <View style={profileStyles.profileScreen}>
        <View style={profileStyles.profileContainer}>
            <Image style={profileStyles.profilePicture}/>
            <View style={profileStyles.textContainer}>
                <Text style={profileStyles.profileText}>somename</Text>
                <Text style={profileStyles.profileText}>someemail</Text>
            </View>
        </View>
        <View style={profileStyles.buttonContainer}>
            <MyButton text='Change theme to: light' />
            <MyButton text='Logout' onPress={logOut}/>
        </View>
    </View>
    );
};
