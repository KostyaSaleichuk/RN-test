import AsyncStorage from '@react-native-async-storage/async-storage';

import {AsyncKey} from './asyncKey';

class StoreApi {
  public set = async (key: AsyncKey, value: string | {[key: string]: any}) => {
    await AsyncStorage.setItem(
      key,
      typeof value === 'string' ? value : JSON.stringify(value),
    );
  };

  public getString = async (key: AsyncKey) => await AsyncStorage.getItem(key);

  public getObject = async (key: AsyncKey) => {
    const data = await AsyncStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  };

  public remove = async (key: AsyncKey) => {
    await AsyncStorage.removeItem(key);
  };
}

export const storeApi = new StoreApi();
