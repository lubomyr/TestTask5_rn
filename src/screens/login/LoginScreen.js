import React, {useState} from 'react';
import {View} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {globalStyles, theme} from '../../styles/globalStyles';
import {FieldWrapper, TextInput, Button} from '../../components';
import {getTopBarOptions} from '../../navigation/helper';
import {withModal} from '../../hoc/withModal';
import {getUsers} from '../../api/api';
import {homeStack} from '../../navigation/navigationStacks';
import {saveUserToStorage} from '../../helpers/authHelpers';

const LoginScreen = props => {
  const {showModal} = props;
  const [data, setData] = useState({email: '', password: ''});

  const checkEmail = async () => {
    if (!data?.email) {
      showModal({title: 'Enter valid email'});
      return true;
    }
    if (!data?.password) {
      showModal({title: 'Enter any password'});
      return true;
    }
    const users = await getUsers(`?email=${data?.email}`);
    if (users?.length) {
      saveUserToStorage(users?.[0]);
      Navigation.setStackRoot(props.componentId, homeStack);
    } else {
      showModal({title: 'User with this email not found'});
    }
  };

  return (
    <View style={globalStyles.root}>
      <FieldWrapper title={'Email'}>
        <TextInput
          value={data?.email}
          onChangeText={v => setData({...data, email: v})}
        />
      </FieldWrapper>
      <FieldWrapper style={{marginTop: 20}} title={'Password'}>
        <TextInput
          value={data?.password}
          onChangeText={v => setData({...data, password: v})}
          secureTextEntry
        />
      </FieldWrapper>
      <Button
        style={{marginTop: 30}}
        color={theme.primaryColor}
        title={'Login'}
        onPress={() => checkEmail()}
      />
    </View>
  );
};
const options = getTopBarOptions('Login');
export default withModal(LoginScreen, options);
