import React from 'react';
import {View, Text, Image, Alert} from 'react-native';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

import {MyButton} from '../../components/button/Button';
import {profileStyles} from './profileScreenStyles';
import {logOut} from '../../actions/loginActions';

interface ProfileProps {
  navigation: {
    navigate: (route: string) => void;
    reset: (arg: any) => void;
  };
}

const profile: React.FC<ProfileProps> = ({navigation}) => {
  const logOutHandler = () => navigation.reset({routes: [{name: 'Login'}]});

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
        <MyButton
          text="Change theme to: light"
          onPress={() =>
            Alert.alert(
              'Sorry',
              'Changing theme is not provided yet, wait for for the updates',
            )
          }
        />
        <MyButton text="Logout" onPress={logOutHandler} />
      </View>
    </View>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  logOut: () => dispatch(logOut()),
});

export const Profile = connect(null, mapDispatchToProps)(profile);
