import React from 'react';
import {View, Text, Image} from 'react-native';
import { connect } from 'react-redux';

import {MyButton} from '../../components/button/ButtonComponent.tsx';
import {profileStyles} from './profileScreenStyles';


export const ProfileScreen = () => {

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
                <MyButton text='Logout' onPress={props.logOut}  />
            </View>
        </View>
    );
};

const mapDispatchToProps = (dispatch) => {
    return{
        logOut: () => dispatch({type: 'LOG_OUT'})
    }
};

const ProfileConnect = connect(mapDispatchToProps)(ProfileScreen);
