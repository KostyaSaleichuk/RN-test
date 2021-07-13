import React from 'react';
import {View, Text, Image} from 'react-native';
import {MaterialTopTabNavigationProp} from '@react-navigation/material-top-tabs';
import {connect} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {useTheme} from '@react-navigation/native';

import {CustomButton} from '../../components/button/Button';
import {profileStyles} from './profileScreenStyles';
import {Routes} from '../../navigation/Router';
import {logoutHandler} from '../../middlewares/loginThunk';
import {testData} from '../../services/authService';
import {Themes} from '../../theme/theme';
import {RadioButton} from '../../components/radioButton/radioButton';
import {appTheme} from '../../services/storage/theme';
import {withTheme} from '../../theme/themeHOC';

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
  theme: Themes;
  setTheme: (theme: Themes) => void;
}

const profile: React.FC<Props> = ({
  navigation,
  logOutHandler,
  theme,
  setTheme,
}) => {
  const {colors} = useTheme();

  const chooseTheme = (theme: Themes) => {
    appTheme.saveTheme(theme);
  };

  const logoutHandler = () => {
    logOutHandler();
    navigation.reset({routes: [{name: Routes.Login}]});
  };

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
          <Text style={[profileStyles.text, {color: colors.text}]}>
            John Smith
          </Text>
          <Text style={[profileStyles.text, {color: colors.text}]}>
            {testData.email}
          </Text>
        </View>
      </View>
      <View style={profileStyles.themeChangerContainer}>
        <View style={profileStyles.radioContainer}>
          <Text style={[profileStyles.text, {color: colors.text}]}>
            Change theme to light
          </Text>
          <RadioButton
            isChecked={theme === Themes.light}
            onPressIn={() => setTheme(Themes.light)}
            onPress={() => {
              chooseTheme(theme);
            }}
          />
        </View>
        <View style={profileStyles.radioContainer}>
          <Text style={[profileStyles.text, {color: colors.text}]}>
            Change theme to dark
          </Text>
          <RadioButton
            isChecked={theme === Themes.dark}
            onPressIn={() => setTheme(Themes.dark)}
            onPress={() => {
              chooseTheme(theme);
            }}
          />
        </View>
      </View>
      <View style={profileStyles.buttonContainer}>
        <CustomButton text="Logout" onPress={logoutHandler} />
      </View>
    </View>
  );
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, null, Action>) => ({
  logOutHandler: () => dispatch(logoutHandler()),
});

export const connectedProfile = connect(null, mapDispatchToProps)(profile);

export const Profile = withTheme(connectedProfile);
