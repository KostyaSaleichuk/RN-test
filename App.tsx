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
import {InitLanguage} from './src/localization/localization';

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
    const savedTheme = await appTheme.getTheme();
    setTheme(savedTheme || Themes.light);
  }, []);

  const saveAndSetTheme = useCallback((theme: Themes) => {
    setTheme(theme);
    appTheme.saveTheme(theme);
  }, []);

  const getLanguage = useCallback(async () => {
    const savedLanguage = await appLanguage.getLanguage();
    setLanguage(savedLanguage || Languages.english);
  }, []);

  const saveAndSetLanguage = useCallback((language: Languages) => {
    setLanguage(language);
    appLanguage.saveLanguage(language);
  }, []);

  useEffect(() => {
    InitLanguage(language);
  });

  useEffect(() => {
    (async () => {
      await userIsAuth();
      await getTheme();
      await getLanguage();
      await InitLanguage(language);
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
