import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {
  getTopBarWithProfileOptions,
  PROFILE_BUTTON_ID,
} from '../../../navigation/helper';
import {useNavigationButtonPress} from 'react-native-navigation-hooks';
import {Navigation} from 'react-native-navigation';
import {
  userDetailsStack,
  profileStack,
} from '../../../navigation/navigationStacks';
import {getUsers} from '../../../api/api';
import {globalStyles} from '../../../styles/globalStyles';
import UserItem from './components/UserItem';

const UsersTab = props => {
  const [users, setUsers] = useState([]);
  useNavigationButtonPress(e => {
    if (e.buttonId === PROFILE_BUTTON_ID) {
      Navigation.push(props.componentId, profileStack);
    }
  }, props.componentId);

  const showUserDetails = user => {
    userDetailsStack.stack.children[0].component.passProps = {userId: user?.id};
    Navigation.push(props.componentId, userDetailsStack);
  };

  useEffect(() => {
    const retrieveUsers = async () => {
      setUsers(await getUsers());
    };
    retrieveUsers();
  }, []);

  return (
    <View style={globalStyles.root}>
      <FlatList
        data={users}
        renderItem={({item}) => (
          <UserItem
            style={globalStyles.items}
            user={item}
            onPress={() => showUserDetails(item)}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
export default UsersTab;
UsersTab.options = getTopBarWithProfileOptions('Users');
