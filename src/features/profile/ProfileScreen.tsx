import React from 'react';
import {View, Text, Image} from 'react-native';

import {MyButton} from '../../components/button/ButtonComponent.tsx';
import {profileStyles} from './profileScreenStyles';


export const ProfileScreen = () => (
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
            <MyButton text='Logout' />
        </View>
    </View>
);
