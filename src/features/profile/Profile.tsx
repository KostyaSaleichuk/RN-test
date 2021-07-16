import React, {useCallback} from 'react';
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

  const {language, setLanguage} = useLocalization();

  const setLightTheme = useCallback(() => {
    setTheme(Themes.light);
  }, [theme]);

  const setDarkTheme = useCallback(() => {
    setTheme(Themes.dark);
  }, [theme]);

  const setEnglish = useCallback(() => {
    setLanguage(Languages.english);
    console.log(language);
  }, [language]);

  const setUkrainian = useCallback(() => {
    setLanguage(Languages.ukrainian);
    console.log(language);
  }, [language]);

  const setRussian = useCallback(() => {
    setLanguage(Languages.russian);
    console.log(language);
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
        <View style={profileStyles.radioContainer}>
          <Text style={[profileStyles.text, {color: colors.text}]}>
            Change theme to light
          </Text>
          <RadioButton
            isChecked={theme === Themes.light}
            onPress={setLightTheme}
          />
        </View>
        <View style={profileStyles.radioContainer}>
          <Text style={[profileStyles.text, {color: colors.text}]}>
            Change theme to dark
          </Text>
          <RadioButton
            isChecked={theme === Themes.dark}
            onPress={setDarkTheme}
          />
        </View>
      </View>
      <View style={profileStyles.languageChangerContainer}>
        <View style={profileStyles.radioContainer}>
          <Text style={[profileStyles.text, {color: colors.text}]}>
            Change language to english
          </Text>
          <RadioButton
            isChecked={language === Languages.english}
            onPress={setEnglish}
          />
        </View>
        <View style={profileStyles.radioContainer}>
          <Text style={[profileStyles.text, {color: colors.text}]}>
            Change language to ukrainian
          </Text>
          <RadioButton
            isChecked={language === Languages.ukrainian}
            onPress={setUkrainian}
          />
        </View>
        <View style={profileStyles.radioContainer}>
          <Text style={[profileStyles.text, {color: colors.text}]}>
            Change language to russian
          </Text>
          <RadioButton
            isChecked={language === Languages.russian}
            onPress={setRussian}
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

export const Profile = connect(null, mapDispatchToProps)(profile);
