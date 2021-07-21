import React, {useState, useCallback, useEffect} from 'react';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import {Router} from './src/navigation/Router';
import {authentication} from './src/services/storage/authentication';
import {store} from './src/store';
import {setAuth} from './src/actions/loginActions';
import {Indicator} from './src/components/ActivityIndicator/activityIndicator';
import {appTheme} from './src/services/storage/theme';
import {ThemeProvider} from './src/theme/themeProvider';
import {Themes} from './src/theme/theme';
import {appLanguage} from './src/services/storage/language';
import {LocalizationProvider} from './src/localization/localizationProvider';
import {Languages} from './src/localization/languages';
import {localization} from './src/localization/i18n';
import en from './src/localization/translations/en.json';
import ua from './src/localization/translations/ua.json';
import ru from './src/localization/translations/ru.json';

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState(Themes.light);
  const [language, setLanguage] = useState(Languages.english);

  const userIsAuth = useCallback(async () => {
    const statusAuth = await authentication.getStatusAuth();
    store.dispatch(setAuth(statusAuth));
    setIsLoading(false);
  }, []);

  const getTheme = useCallback(async () => {
    const result = await appTheme.getTheme();
    const theme = result == null ? Themes.light : result;
    setTheme(theme);
  }, []);

  const saveAndSetTheme = useCallback((theme: Themes) => {
    setTheme(theme);
    appTheme.saveTheme(theme);
  }, []);

  const getLanguage = useCallback(async () => {
    const result = await appLanguage.getLanguage();
    const language = result == null ? Languages.english : result;
    setLanguage(language);
  }, []);

  const saveAndSetLanguage = useCallback((language: Languages) => {
    setLanguage(language);
    appLanguage.saveLanguage(language);
  }, []);

  const LanguageInitialization = (language: Languages) =>
    localization.initialization({
      resources: {en, ua, ru},
      lng: language || 'en',
      keySeparator: false,
      interpolation: {escapeValue: false},
    });

  useEffect(() => {
    LanguageInitialization(language);
  });

  useEffect(() => {
    (async () => {
      await userIsAuth();
      await getTheme();
      await getLanguage();
      await LanguageInitialization(language);
      await SplashScreen.hide();
    })();
  }, [userIsAuth]);

  if (isLoading) {
    return <Indicator />;
  }

  return (
    <ThemeProvider value={{theme, setTheme: saveAndSetTheme}}>
      <LocalizationProvider value={{language, setLanguage: saveAndSetLanguage}}>
        <Provider store={store}>
          <Router />
        </Provider>
      </LocalizationProvider>
    </ThemeProvider>
  );
};
