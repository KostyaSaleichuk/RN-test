import React, {createContext, useState, useContext, useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

import {AuthData, authService} from '../services/authService';

type AuthContextData = {
    authData?: AuthData;
    loading: boolean;
    logIn(): Promise<void>;
    logOut(): void;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
    const [authData, setAuthData] = useState<AuthData>();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadStorageData();
    }, []);

    async function loadStorageData(): Promise<void> {
        try{
            const authDataSerialized = await AsyncStorage.getItem('@AuthData');
            if (authDataSerialized) {
                const _authData: AuthData = JSON.parse(authDataSerialized);
                setAuthData(_authData);
            }
        } catch (error) {
        } finally {
            setLoading(false);
        }
    }

    const logIn = async () => {

        const _authData = await authService.signIn(
            'email@email.com',
            '123456',
        );

        setAuthData(_authData);

        AsyncStorage.setItem('@AuthData', JSON.stringify(_authData));
    };

    const logOut = async () => {
        setAuthData(undefined);
        await AsyncStorage.removeItem('@AuthData');
    };

    return (
        <AuthContext.Provider value={{authData, loading, logIn, logOut}}>
            {children}
        </AuthContext.Provider>
    );
};

function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error ('useAuth must be used within an AuthProvider');
    }
    return context;
}

export {AuthContext, AuthProvider, useAuth};
