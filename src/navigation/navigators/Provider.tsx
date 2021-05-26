import React, {createContext, useState, useContext} from 'react';


type AuthContextData = {
    authData?: AuthData;
    loading: boolean;
    logIn(): Promise<void>;
    logOut(): void;
}

type AuthData = {
    token: string,
    email: string,
    password: string,
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
    const [authData, setAuthData] = useState<AuthData>();

    const [loading, setLoading] = useState(true);

    const logIn = async () => {

    const _authData = await authService.logIn(
        'email@email.com',
        '123456',
    );

    setAuthData(_authData);
    };

    const logOut = async () => {
        setAuthData(undefined);
    };

    return (
        <AuthContext.Provider value={{authData, loading, logIn, logOut}}>
            {children}
        </AuthContext.Provider>
    )
};

function useAuth(): AuthContextData {

    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
}

//import { NavigationContainer } from '@react-navigation/native';
//import {createStackNavigator} from '@react-navigation/stack';
//import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//import {LoginScreen} from '../../features/login/LoginScreen'

//import {Loading} from '../../components/loading/LoadingComponent';

/*
const Stack = createStackNavigator();

const LoginStack = () => {
    <Stack.Navigator>
        <Stack.Screen name='Login Screen' component={LoginScreen}/>
    </Stack.Navigator>
};
/*
/*
const Tab = createMaterialTopTabNavigator();

const AppTabs = () => {
    <Tab.Navigator>
        <Tab.Screen name="Feeds" component={FeedsScreen}/>
        <Tab.Screen name="Profile" component={ProfileScreen}/>
    </Tab.Navigator>
}
*/
/*
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
*/