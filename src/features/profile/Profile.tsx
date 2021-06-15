import React from 'react';
import {View, Text, Image, Alert} from 'react-native';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {MaterialTopTabNavigationProp} from '@react-navigation/material-top-tabs';

import {CustomButton} from '../../components/button/Button';
import {profileStyles} from './profileScreenStyles';
import {logOut} from '../../actions/loginActions';
import {Routes} from '../../navigation/Router';

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

const profile = ({navigation}: ProfileProps) => {
  const logOutHandler = () =>
    navigation.reset({routes: [{name: Routes.Login}]});

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

const mapDispatchToProps = (dispatch: Dispatch) => ({
  logOut: () => dispatch(logOut()),
});

export const Profile = connect(null, mapDispatchToProps)(profile);
