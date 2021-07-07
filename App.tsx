import React from 'react';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import {Router} from './src/navigation/Router';
import {authentication} from './src/services/storage/authentication';
import {store} from './src/store';
import {setAuth} from './src/actions/loginActions';
import {Indicator} from './src/components/ActivityIndicator/activityIndicator';
import {appTheme} from './src/services/storage/theme';
import {setTheme} from './src/actions/themeActions';

export const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  const userIsAuth = React.useCallback(async () => {
    const statusAuth = await authentication.getStatusAuth();
    store.dispatch(setAuth(statusAuth));
    setIsLoading(false);
  }, []);

  const getTheme = React.useCallback(async () => {
    const theme = await appTheme.getTheme();
    store.dispatch(setTheme(theme));
  }, []);

  React.useEffect(() => {
    userIsAuth();
    getTheme();
    SplashScreen.hide();
  }, [userIsAuth]);

  if (isLoading) {
    return <Indicator />;
  }

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};
