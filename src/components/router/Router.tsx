import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import {Loading} from '../components/loading/LoadingComponent';
import {AppTabs} from '../../navigation/navigators/AppTabs';
import {LoginStack} from '../../navigation/navigators/LoginStack';

export const Router = () => {

    const {authData, loading} = useAuth();

      if (loading) {
        return <Loading />;
      }
    return(
        <NavigationContainer>
            {authData?.token ? <AppTabs/> : <LoginStack/>}
        </NavigationContainer>
    );
};
