import React, {useCallback} from 'react';
import {View, Text, Image} from 'react-native';
import {MaterialTopTabNavigationProp} from '@react-navigation/material-top-tabs';
import {connect} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {useTheme} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';

import {CustomButton} from '../../components/button/Button';
import {profileStyles} from './profileScreenStyles';
import {Routes} from '../../navigation/Router';
import {logoutHandler} from '../../middlewares/loginThunk';
import {testData} from '../../services/authService';
import {Themes} from '../../theme/theme';
import {RadioContainer} from '../../components/radioContainer/radioContainer';
import {useOwnTheme} from '../../theme/useOwnTheme';
import {LoginStackNavigationParams} from '../../navigation/loginStackNavParams';
import {Languages} from '../../localization/localization';
import {useLocalization} from '../../localization/useLocalization';
import {localization} from '../../localization/localization';

interface ProfileProps {
  navigation: MaterialTopTabNavigationProp<LoginStackNavigationParams>;
}

interface Props extends ProfileProps {
  logOutHandler: () => void;
  setTheme: (theme: Themes) => void;
}

const profile: React.FC<Props> = ({navigation, logOutHandler}) => {
  const {theme, setTheme} = useOwnTheme();
  const {colors} = useTheme();
  const {language, setLanguage} = useLocalization();

  const setLightTheme = useCallback(() => {
    setTheme(Themes.light);
  }, [theme]);

  const setDarkTheme = useCallback(() => {
    setTheme(Themes.dark);
  }, [theme]);

  const pickLanguage = useCallback(
    async language => {
      await localization.changeLanguage(language);
      setLanguage(language);
    },
    [language],
  );

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
        <Text style={[profileStyles.text, {color: colors.text}]}>
          {localization.translate('choose_theme')}
        </Text>
        <RadioContainer
          isChecked={theme === Themes.light}
          onPress={setLightTheme}
          text={localization.translate('light')}
        />
        <RadioContainer
          isChecked={theme === Themes.dark}
          onPress={setDarkTheme}
          text={localization.translate('dark')}
        />
      </View>
      <View style={profileStyles.languageChangerContainer}>
        <Text style={[profileStyles.text, {color: colors.text}]}>
          {localization.translate('choose_language')}
        </Text>
        <Picker
          selectedValue={language}
          onValueChange={itemValue => pickLanguage(itemValue)}
          mode="dropdown"
          style={[profileStyles.pickerContainer, {color: colors.text}]}>
          <Picker.Item
            label={localization.translate('english')}
            value={Languages.english}
          />
          <Picker.Item
            label={localization.translate('ukrainian')}
            value={Languages.ukrainian}
          />
          <Picker.Item
            label={localization.translate('russian')}
            value={Languages.russian}
          />
        </Picker>
      </View>
      <View style={profileStyles.buttonContainer}>
        <CustomButton
          text={localization.translate('logout')}
          onPress={logoutHandler}
        />
      </View>
    </View>
  );
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, null, Action>) => ({
  logOutHandler: () => dispatch(logoutHandler()),
});

export const Profile = connect(null, mapDispatchToProps)(profile);
