import React from 'react';
import {View, Text, Image, Switch} from 'react-native';
import {MaterialTopTabNavigationProp} from '@react-navigation/material-top-tabs';
import {connect} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {useTheme} from '@react-navigation/native';

import {CustomButton} from '../../components/button/Button';
import {profileStyles} from './profileScreenStyles';
import {Routes} from '../../navigation/Router';
import {logoutHandler} from '../../reducers/authReducer';
import {changeTheme} from '../../actions/themeActions';
import {AppState} from '../../reducers/RootReducer';
import {testData} from '../../services/authService';

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
  logOutHandler: () => void;
  changeTheme: (isDark: boolean) => void;
  isDark: boolean;
}

const profile: React.FC<Props> = ({
  navigation,
  logOutHandler,
  changeTheme,
  isDark,
}) => {
  const toggleSwitch = (isDark: boolean) => {
    changeTheme(isDark);
  };

  const logoutHandler = () => {
    logOutHandler();
    navigation.reset({routes: [{name: Routes.Login}]});
  };

  const {colors} = useTheme();

  return (
    <View
      style={[profileStyles.profileScreen, {backgroundColor: colors.primary}]}>
      <View
        style={[
          profileStyles.profileContainer,
          {backgroundColor: colors.card},
        ]}>
        <Image
          style={profileStyles.profilePicture}
          source={{uri: 'https://picsum.photos/200'}}
        />
        <View style={profileStyles.textContainer}>
          <Text style={[profileStyles.profileText, {color: colors.text}]}>
            John Smith
          </Text>
          <Text style={[profileStyles.profileText, {color: colors.text}]}>
            {testData.email}
          </Text>
        </View>
      </View>
      <View style={profileStyles.themeChangerContainer}>
        <Text style={{color: colors.text}}>
          Change to {isDark ? 'light' : 'dark'} mode
        </Text>
        <Switch
          trackColor={{false: '#767577', true: '81b0ff'}}
          thumbColor={isDark ? '#000000' : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={isDark}
        />
      </View>
      <View style={profileStyles.buttonContainer}>
        <CustomButton text="Logout" onPress={logoutHandler} />
      </View>
    </View>
  );
};

const mapStateToProps = (state: AppState) => ({
  isDark: state.themeReducer.isDark,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, null, Action>) => ({
  logOutHandler: () => dispatch(logoutHandler()),
  changeTheme: (isDark: boolean) => dispatch(changeTheme(isDark)),
});

export const Profile = connect(mapStateToProps, mapDispatchToProps)(profile);
