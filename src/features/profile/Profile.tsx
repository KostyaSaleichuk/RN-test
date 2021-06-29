import React from 'react';
import {View, Text, Image, Alert} from 'react-native';
import {MaterialTopTabNavigationProp} from '@react-navigation/material-top-tabs';
import {connect} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';

import {CustomButton} from '../../components/button/Button';
import {profileStyles} from './profileScreenStyles';
import {Routes} from '../../navigation/Router';
import {logoutHandler} from '../../reducers/authReducer';

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

interface Props extends ProfileProps {
  logOutHandler: () => void
}

 const profile: React.FC<Props> = ({navigation, logOutHandler}) => {

  const logoutHandler = async () => {
    await logOutHandler();
    navigation.reset({routes: [{name: Routes.Login}]});
  };

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
        <CustomButton text="Logout" onPress={logoutHandler} />
      </View>
    </View>
  );
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, null, Action>) => ({
  logOutHandler: () => dispatch(logoutHandler())
});

export const Profile = connect(null, mapDispatchToProps)(profile);
