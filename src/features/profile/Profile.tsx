import React from 'react';
import {View, Text, Image} from 'react-native';
import {MaterialTopTabNavigationProp} from '@react-navigation/material-top-tabs';
import {connect} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {useTheme} from '@react-navigation/native';
import {RadioButton} from 'react-native-paper';

import {CustomButton} from '../../components/button/Button';
import {profileStyles} from './profileScreenStyles';
import {Routes} from '../../navigation/Router';
import {logoutHandler} from '../../reducers/authReducer';
import {AppState} from '../../reducers/RootReducer';
import {testData} from '../../services/authService';
import {setLightTheme, setDarkTheme} from '../../actions/themeActions';
import {Themes} from '../../theme';

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
  setLightTheme: (theme: string) => void;
  setDarkTheme: (theme: string) => void;
  theme: string;
}

const profile: React.FC<Props> = ({
  navigation,
  logOutHandler,
  setLightTheme,
  setDarkTheme,
  theme,
}) => {
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
            value="light"
            status={theme === Themes.light ? 'checked' : 'unchecked'}
            onPress={() => setLightTheme(Themes.light)}
            color={colors.notification}
          />
        </View>
        <View style={profileStyles.radioContainer}>
          <Text style={[profileStyles.text, {color: colors.text}]}>
            Change theme to dark
          </Text>
          <RadioButton
            value="dark"
            status={theme === Themes.dark ? 'checked' : 'unchecked'}
            onPress={() => setDarkTheme(Themes.dark)}
            color={colors.notification}
          />
        </View>
      </View>
      <View style={profileStyles.buttonContainer}>
        <CustomButton text="Logout" onPress={logoutHandler} />
      </View>
    </View>
  );
};

const mapStateToProps = (state: AppState) => ({
  theme: state.themeReducer.theme,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, null, Action>) => ({
  logOutHandler: () => dispatch(logoutHandler()),
  setLightTheme: (theme: string) => dispatch(setLightTheme(theme)),
  setDarkTheme: (theme: string) => dispatch(setDarkTheme(theme)),
});

export const Profile = connect(mapStateToProps, mapDispatchToProps)(profile);
