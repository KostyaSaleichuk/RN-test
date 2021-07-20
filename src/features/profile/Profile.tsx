import React, {useCallback} from 'react';
import {View, Text, Image} from 'react-native';
import {MaterialTopTabNavigationProp} from '@react-navigation/material-top-tabs';
import {connect} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {useTheme} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

import {CustomButton} from '../../components/button/Button';
import {profileStyles} from './profileScreenStyles';
import {Routes} from '../../navigation/Router';
import {logoutHandler} from '../../middlewares/loginThunk';
import {testData} from '../../services/authService';
import {Themes} from '../../theme/theme';
import {RadioContainer} from '../../components/radioContainer/radioContainer';
import {useOwnTheme} from '../../theme/useOwnTheme';
import {LoginStackNavigationParams} from '../../navigation/loginStackNavParams';
import {Languages} from '../../localization/languages';
import {useLocalization} from '../../localization/useLocalization';

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
  const {t, i18n} = useTranslation();
  const {language, setLanguage} = useLocalization();

  const setLightTheme = useCallback(() => {
    setTheme(Themes.light);
  }, [theme]);

  const setDarkTheme = useCallback(() => {
    setTheme(Themes.dark);
  }, [theme]);

  const setEnglish = useCallback(async () => {
    await i18n.changeLanguage('en');
    await setLanguage(Languages.english);
  }, [language]);

  const setUkrainian = useCallback(async () => {
    await i18n.changeLanguage('ua');
    await setLanguage(Languages.ukrainian);
  }, [language]);

  const setRussian = useCallback(async () => {
    await i18n.changeLanguage('ru');
    await setLanguage(Languages.russian);
  }, [language]);

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
        <RadioContainer
          isChecked={theme === Themes.light}
          onPress={setLightTheme}
          text={t('change_theme_to_light')}
        />
        <RadioContainer
          isChecked={theme === Themes.dark}
          onPress={setDarkTheme}
          text={t('change_theme_to_dark')}
        />
      </View>
      <View style={profileStyles.languageChangerContainer}>
        <RadioContainer
          isChecked={language === Languages.english}
          onPress={setEnglish}
          text={t('change_language_to_english')}
        />
        <RadioContainer
          isChecked={language === Languages.ukrainian}
          onPress={setUkrainian}
          text={t('change_language_to_ukrainian')}
        />
        <RadioContainer
          isChecked={language === Languages.russian}
          onPress={setRussian}
          text={t('change_language_to_russian')}
        />
      </View>
      <View style={profileStyles.buttonContainer}>
        <CustomButton text={t('logout')} onPress={logoutHandler} />
      </View>
    </View>
  );
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, null, Action>) => ({
  logOutHandler: () => dispatch(logoutHandler()),
});

export const Profile = connect(null, mapDispatchToProps)(profile);
