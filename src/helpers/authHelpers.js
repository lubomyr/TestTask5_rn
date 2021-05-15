import AsyncStorage from '@react-native-async-storage/async-storage';

const tokenKey = 'token_key';

export const isAuthorizad = () =>
  new Promise((resolve, reject) => {
    AsyncStorage.getItem(tokenKey)
      .then(value => {
        if (value === 'true') {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(error => {
        resolve(false);
      });
  });
