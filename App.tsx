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

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState(Themes.light);

  const userIsAuth = useCallback(async () => {
    const statusAuth = await authentication.getStatusAuth();
    store.dispatch(setAuth(statusAuth));
    setIsLoading(false);
  }, []);

  const getTheme = useCallback(async () => {
    const theme = await appTheme.getTheme();
    setTheme(theme);
  }, []);

  const saveAndSetTheme = useCallback((theme: Themes) => {
    setTheme(theme);
    appTheme.saveTheme(theme);
  }, []);

  useEffect(() => {
    (async () => {
      await userIsAuth();
      await getTheme();
      await SplashScreen.hide();
    })();
  }, [userIsAuth]);

  if (isLoading) {
    return <Indicator />;
  }

  return (
    <ThemeProvider value={{theme, setTheme: saveAndSetTheme}}>
      <Provider store={store}>
        <Router />
      </Provider>
    </ThemeProvider>
  );
};
