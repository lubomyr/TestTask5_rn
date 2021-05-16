import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {getTopBarOptions} from '../../navigation/helper';
import UserView from './components/UserView';
import {getUserById} from '../../api/api';
import {globalStyles} from '../../styles/globalStyles';

const UserDetails = ({userId}) => {
  const [user, setUser] = useState(null);

  const retrieveUser = async () => {
    setUser(await getUserById(userId));
  };

  useEffect(() => {
    retrieveUser();
  }, []);

  return (
    <View style={globalStyles.root}>
      <UserView user={user} />
    </View>
  );
};
UserDetails.options = getTopBarOptions('User details');
export default UserDetails;
