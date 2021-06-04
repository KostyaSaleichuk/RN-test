import React from 'react';
import {View, Text, Image, Alert} from 'react-native';
import {connect} from 'react-redux';

import {MyButton} from '../../components/button/Button';
import {profileStyles} from './profileScreenStyles';
import {IProps} from '../../interfaces';

export const ProfileScreen: React.FC<IProps> = props => {
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
          onPress={() => Alert.alert('clicked')}
        />
        <MyButton text="Logout" onPress={props.logOut} />
      </View>
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch({type: 'LOG_OUT'}),
});

export const ProfileConnect = connect(mapDispatchToProps)(ProfileScreen);
