import React from 'react';
import {View, Text, Image, Alert} from 'react-native';
import {MaterialTopTabNavigationProp} from '@react-navigation/material-top-tabs';

import {CustomButton} from '../../components/button/Button';
import {profileStyles} from './profileScreenStyles';
import {Routes} from '../../navigation/Router';
import AsyncStorage from '@react-native-async-storage/async-storage';

type ProfileTabParamList = {
  [Routes.Login]: undefined;
};

type NavigationProp = MaterialTopTabNavigationProp<
  ProfileTabParamList,
  Routes.Login
>;

interface ProfileProps {
  navigation: NavigationProp;
}

export const Profile = ({navigation}: ProfileProps) => {

  const logOutHandler = async() => {
    try {
      await AsyncStorage.removeItem('loggedIn');
      navigation.reset({routes: [{name: Routes.Login}]});
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={profileStyles.profileScreen}>
      <View style={profileStyles.profileContainer}>
        <Image
          style={profileStyles.profilePicture}
          source={{uri: 'https://picsum.photos/200'}}
        />
        <View style={profileStyles.textContainer}>
          <Text style={profileStyles.profileText}>somename</Text>
          <Text style={profileStyles.profileText}>someemail</Text>
        </View>
      </View>
      <View style={profileStyles.buttonContainer}>
        <CustomButton
          text="Change theme to: light"
          onPress={() =>
            Alert.alert(
              'Sorry',
              'Changing theme is not provided yet, wait for for the updates',
            )
          }
        />
        <CustomButton text="Logout" onPress={logOutHandler} />
      </View>
    </View>
  );
};
