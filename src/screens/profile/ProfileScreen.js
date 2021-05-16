import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {globalStyles} from '../../styles/globalStyles';
import UserView from '../home/components/UserView';
import {
  getUserFromStorage,
  deleteUserFromStore,
} from '../../helpers/authHelpers';
import {Button} from '../../components';
import {Navigation} from 'react-native-navigation';
import {loginStack} from '../../navigation/navigationStacks';
import {getTopBarOptions} from '../../navigation/helper';

const ProfileScreen = props => {
  const [user, setUser] = useState(null);

  const retrieveUser = async () => {
    setUser(await getUserFromStorage());
  };

  const onLogoutPress = () => {
    deleteUserFromStore();
    Navigation.setRoot({
      root: loginStack,
    });
  };

  useEffect(() => {
    retrieveUser();
  }, []);

  return (
    <View style={globalStyles.root}>
      <UserView user={user} />
      <Button
        style={{marginTop: 20}}
        title={'Logout'}
        onPress={onLogoutPress}
      />
    </View>
  );
};
ProfileScreen.options = getTopBarOptions('Profile');
export default ProfileScreen;
