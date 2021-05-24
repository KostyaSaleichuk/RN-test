import React from 'react';
import {StyleSheet} from 'react-native';


export const profileStyles = StyleSheet.create({
    profileScreen: {
        flex:1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#3a474e',
    },
    profileContainer: {
        margin: 30,
        backgroundColor: '#65727a',
        width: '90%',
        padding: 15,
        borderRadius: 15,
        flexDirection: 'row',
    },
    profilePicture : {
        height: 80,
        width: 80,
        borderRadius: 40,
        backgroundColor: '#000',
    },
    textContainer: {
        alignSelf: 'center',
        paddingLeft: 20,
    },
    profileText : {
        color: '#FFF',
        fontSize: 14,
        textAlign: 'center',
    },
    buttonContainer:{
        flexDirection:'column',
        width: "100%",
        paddingBottom: 20,
        alignItems: 'center',
    },
});
