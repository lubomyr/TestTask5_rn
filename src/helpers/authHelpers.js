import AsyncStorage from '@react-native-async-storage/async-storage';

const userKey = 'user_key';

export const getUserFromStorage = () =>
  new Promise((resolve, reject) => {
    AsyncStorage.getItem(userKey)
      .then(value => {
        if (value) {
          resolve(JSON.parse(value));
        } else {
          resolve(null);
        }
      })
      .catch(error => {
        resolve(null);
      });
  });

export const saveUserToStorage = async value => {
  const user = JSON.stringify(value);
  try {
    await AsyncStorage.setItem(userKey, user);
  } catch (e) {
    // saving error
  }
};

export const deleteUserFromStore = async () => {
  try {
    await AsyncStorage.removeItem(userKey);
  } catch (e) {
    // saving error
  }
};
