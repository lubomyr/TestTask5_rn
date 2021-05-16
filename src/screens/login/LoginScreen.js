import React, {useState} from 'react';
import {View} from 'react-native';
import {globalStyles, theme} from '../../styles/globalStyles';
import {FieldWrapper, TextInput, Button} from '../../components';
import {getTopBarOptions} from '../../navigation/helper';
import {withModal} from '../../hoc/withModal';

const LoginScreen = props => {
  const {showModal} = props;
  const [data, setData] = useState({email: '', password: ''});
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
        onPress={() => {}}
      />
    </View>
  );
};
export default withModal(LoginScreen);

LoginScreen.options = getTopBarOptions('Login');
