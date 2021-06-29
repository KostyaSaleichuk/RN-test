import React from "react";
import { Provider } from "react-redux";
import SplashScreen from 'react-native-splash-screen';

import { Router } from "./src/navigation/Router";
import { authentication } from "./src/services/storage/authentication";
import { store } from "./src/store";
import { setAuth } from "./src/actions/loginActions";
import {Indicator} from "./src/components/ActivityIndicator/activityIndicator";

export const App = () => {

  const [isLoading, setIsLoading] = React.useState(true);

  const userIsAuth = React.useCallback(async () => {
    const statusAuth = await authentication.getStatusAuth();
    store.dispatch(setAuth(statusAuth));
    setIsLoading(false);
  }, []);

  React.useEffect(() => {
    userIsAuth();
    SplashScreen.hide();
  }, [userIsAuth])

  if (isLoading) {
    return <Indicator />
  }

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};
