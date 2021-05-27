import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import {Loading} from '../loading/LoadingComponent';
import {AppTabs} from '../../navigation/navigators/AppTabs';
import {LoginStack} from '../../navigation/navigators/LoginStack';
import {useAuth} from '../../contexts/Auth';

export const Router = () => {
    const {authData, loading} = useAuth();

      if (loading) {
        return <Loading />;
      }
    return(
        <NavigationContainer>
            {authData ? <AppTabs/> : <LoginStack/>}
        </NavigationContainer>
    );
};
