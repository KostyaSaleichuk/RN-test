export type AuthData = {
    token: string;
    email: string;
    name: string;
};

const logIn = (email: string, _password: string): Promise<AuthData> => {

    return new Promise((resolve) => {
        setTimeout((resolve) => {
            resolve({
                token: JWTTokenMock,
                email: email,
                name: 'Some Name',
            });
        }, 1000);
    });
};

export const authService = {
    signIn,
};

const JWTTokenMock = '';
