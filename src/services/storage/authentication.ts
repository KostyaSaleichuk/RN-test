import {storeApi} from './storeApi';

import {AsyncKey} from './asyncKey';

class Authentication {
    public tryLogin = async () => {
        await storeApi.set(AsyncKey.statusAuth, 'true');
    };

    public logoutHandler = async () => {
        await storeApi.remove(AsyncKey.statusAuth);
    }

    public getStatusAuth = async () => {
        const statusAuth = await storeApi.getString(AsyncKey.statusAuth);
        return (statusAuth || false) as boolean;
    };

}

export const authentication = new Authentication();
